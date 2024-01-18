<template>
  <div class="container mt-5" style="max-width: 700px">
    <div class="card">
      <div class="card-header" style="background-color: #9991ba">
        <h4>Add Song</h4>
      </div>
      <div class="card-body" style="background-color: #c9c3e3">
        <div class="mb-3">
          <label for="title">Title</label>
          <input type="text" v-model="title" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="artist">Artist</label>
          <input type="text" v-model="artist" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="year">Year</label>
          <input type="text" v-model="year" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="genre">Genre</label>
          <input type="text" v-model="genre" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="duration">Duration</label>
          <input type="text" v-model="duration" class="form-control" />
        </div>
        <div class="mb-3">
          <button
            type="button"
            @click="saveSong"
            class="btn btn-dark"
            style="background-color: #998fc4; color: black"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import $toast from "@/components/toast";

const title = ref("");
const artist = ref("");
const year = ref("");
const genre = ref("");
const duration = ref("");

const saveSong = () => {
  const songData = {
    title: title.value,
    artist: artist.value,
    year: year.value,
    genre: genre.value,
    duration: duration.value,
  };

  axios
    .post("http://localhost:3000/medieval_songs", songData)
    .then((res) => {
      console.log(res.data);
      $toast.success("Song Added Successfully!");

      title.value = "";
      artist.value = "";
      year.value = "";
      genre.value = "";
      duration.value = "";

      window.location.href = "/songs";
    })
    .catch((error) => {
      $toast.error("Error adding a song!");
    });
};
</script>
