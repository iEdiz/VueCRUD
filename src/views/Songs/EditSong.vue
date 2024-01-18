<template>
  <div class="container mt-5" style="max-width: 900px">
    <div class="card bg-light">
      <div class="card-header bg-secondary text-white">
        <h4>Edit Song</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="title" class="form-label">Title:</label>
          <input type="text" v-model="title" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="artist" class="form-label">Artist:</label>
          <input type="text" v-model="artist" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="year" class="form-label">Year:</label>
          <input type="text" v-model="year" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="genre" class="form-label">Genre:</label>
          <input type="text" v-model="genre" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="duration" class="form-label">Duration:</label>
          <input type="text" v-model="duration" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Image URL:</label>
          <input type="text" v-model="image" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="button" @click="updateSong" class="btn btn-success">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";
import $toast from "@/components/toast";

const title = ref("");
const artist = ref("");
const year = ref("");
const genre = ref("");
const duration = ref("");
const image = ref("");
const songData = ref(null);
let songId: string | string[] | null = null;

const getSongData = () => {
  axios
    .get(`http://localhost:3000/medieval_songs/${songId}`)
    .then((res) => {
      songData.value = res.data;
      title.value = res.data.title;
      artist.value = res.data.artist;
      year.value = res.data.year;
      genre.value = res.data.genre;
      duration.value = res.data.duration;
      image.value = res.data.image;
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 404) {
          alert("Invalid Song ID");
        }
      }
    });
};

const updateSong = () => {
  const updatedSongData = {
    title: title.value,
    artist: artist.value,
    year: year.value,
    genre: genre.value,
    duration: duration.value,
    image: image.value,
  };

  axios
    .put(`http://localhost:3000/medieval_songs/${songId}`, updatedSongData)
    .then((res) => {
      $toast.success("Song Edited!");

      setTimeout(() => {
        window.location.href = "/songs";
      }, 800);
    })
    .catch((error) => {
      $toast.error("Something went wrong while editing!");
    });
};

// Pielaiž klāt iekšējai komponenetes instancei (vertibai)
const instance = getCurrentInstance();

onMounted(() => {
  songId = instance!.proxy!.$route.params.id;
  getSongData();
});
</script>
