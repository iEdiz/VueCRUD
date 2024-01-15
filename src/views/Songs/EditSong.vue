<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Song</h4>
      </div>
      <div class="card-body">
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
          <button type="button" @click="updateSong" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";

export default {
  name: "songEdit",

  setup() {
    // Using ref to create reactive properties
    const title = ref("");
    const artist = ref("");
    const year = ref("");
    const genre = ref("");
    const duration = ref("");
    const songData = ref(null);
    let songId = null;

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
      };

      axios
        .put(`http://localhost:3000/medieval_songs/${songId}`, updatedSongData)
        .then((res) => {
          console.log(res.data);
          alert("Song Edited!");
        })
        .catch((error) => {
          alert("Something went wrong while editing!");
        });
    };

    const instance = getCurrentInstance();

    onMounted(() => {
      songId = instance.proxy.$route.params.id;
      getSongData(songId);
    });

    return {
      title,
      artist,
      year,
      genre,
      duration,
      songData,
      updateSong,
    };
  },
};
</script>
