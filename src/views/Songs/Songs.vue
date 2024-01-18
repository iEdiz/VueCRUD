<template>
  <div class="container mt-3" style="max-width: 900px">
    <div class="card mb-3">
      <div class="card-header p-3" style="background-color: #d6a5ab">
        <h4 style="font-size: 40px" class="mb-0">
          Songs
          <RouterLink
            to="/songs/create"
            class="btn btn-secondary float-end mt-1"
            style="background-color: #fcded7; color: black"
            >Add song</RouterLink
          >
        </h4>
      </div>
      <div class="card-body" style="background-color: #e3c3c8">
        <div class="row">
          <div v-for="(song, index) in songs" :key="index" class="col-md-4 mb-3">
            <div
              class="card"
              style="
                width: 100%;
                background-color: #f7dcd7;
                border-radius: 15px;
                box-shadow: 0 0 5px 2px #8e787b;
              "
            >
              <RouterLink :to="{ path: `/songs/${song.id}` }"
                ><img
                  :src="song.image"
                  alt=""
                  class="card-img-top"
                  :style="{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '13px 13px 0 0',
                  }"
              /></RouterLink>
              <div class="card-body">
                <div class="btn-group" role="group" style="width: 100%; gap: 30px">
                  <RouterLink
                    :to="{ path: `/songs/${song.id}/edit` }"
                    class="btn btn-dark me-auto"
                    style="border-radius: 10px; background-color: #d3ead4; color: black"
                    >Edit</RouterLink
                  >
                  <button
                    @click="deleteSong(song.id)"
                    class="btn btn-dark ms-auto"
                    style="border-radius: 10px; background-color: #f6bcb1; color: black"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";
import $toast from "@/components/toast";

type Song = {
  id: number;
  title: string;
  artist: string;
  year: number;
  genre: string;
  duration: string;
  image: string;
};

const songs = ref<Song[]>([]);

const getSongs = () => {
  axios.get("http://localhost:3000/medieval_songs").then((res) => {
    songs.value = res.data;
  });
};

const deleteSong = (songId: number) => {
  axios.delete(`http://localhost:3000/medieval_songs/${songId}`).then((res) => {
    $toast.success("Song Deleted Successfully!");
    getSongs();
  });
};

const instance = getCurrentInstance();

onMounted(() => {
  const songId = instance!.proxy!.$route.params.id;
  getSongs();
});
</script>
