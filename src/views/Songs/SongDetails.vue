<template>
  <div class="container mt-4" style="max-width: 650px">
    <div class="card" style="box-shadow: 0 0 4px 4px #6a846b; border-radius: 10px">
      <div class="card-header p-3" style="background-color: #b1cfb2">
        <h4 class="mb-0">Song Details</h4>
      </div>
      <div
        class="card-body"
        style="background-color: #d3ead4; border-radius: 0 0 10px 10px"
      >
        <div class="mb-3 text-center">
          <img
            :src="image"
            alt=""
            class="img-fluid"
            style="contain; border-radius: 10px;"
          />
        </div>
        <div class="mb-3">
          <h1 class="display-4">{{ title }}</h1>
        </div>
        <div class="mb-3">
          <h2 class="h4">{{ artist }}</h2>
        </div>
        <div class="mb-3">
          <h4 class="h6">Genre: {{ genre }}</h4>
        </div>
        <div class="mb-3">
          <h5 class="h6">Creation Year: {{ year }}</h5>
        </div>
        <div class="mb-3">
          <h6>Duration: {{ duration }}</h6>
        </div>
        <div class="mb-2">
          <RouterLink
            :to="{ path: `/songs` }"
            class="btn btn-success"
            style="background-color: #97c699; color: black"
            >Back</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";

const title = ref("");
const artist = ref("");
const year = ref("");
const genre = ref("");
const duration = ref("");
const songData = ref(null);
const image = ref("");
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

const instance = getCurrentInstance();

onMounted(() => {
  songId = instance!.proxy!.$route.params.id;
  getSongData();
});
</script>
