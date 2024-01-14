import type { log } from 'console'; import type { log } from 'console'; import type {
model } from 'mongoose'; import type { textChangeRangeIsUnchanged } from 'typescript';
import type { Axios } from 'axios'; import type SongVue from './Song.vue'; import type {
model } from 'mongoose';
<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Songs</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Title</label>
          <input type="text" v-model="model.song.title" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Artist</label>
          <input type="text" v-model="model.song.artist" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Year</label>
          <input type="text" v-model="model.song.year" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Genre</label>
          <input type="text" v-model="model.song.genre" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Duration</label>
          <input type="text" v-model="model.song.duration" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="button" @click="saveSong" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "songCreate",

  data() {
    return {
      model: {
        song: {
          title: "",
          artist: "",
          year: "",
          genre: "",
          duration: "",
        },
      },
    };
  },
  methods: {
    saveSong() {
      axios
        .post("http://localhost:3000/medieval_songs", this.model.song)
        .then((res) => {
          console.log(res.data);
          alert("Song Added Successfully!");

          this.model.song = {
            title: "",
            artist: "",
            year: "",
            genre: "",
            duration: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
