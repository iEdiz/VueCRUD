<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Songs
          <RouterLink to="/songs/create" class="btn btn-primary float-end"
            >Add song</RouterLink
          >
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(song, index) in songs" :key="index">
              <td>{{ song.title }}</td>
              <td>{{ song.artist }}</td>
              <td>{{ song.year }}</td>
              <td>{{ song.genre }}</td>
              <td>{{ song.duration }}</td>
              <td>
                <RouterLink
                  :to="{ path: `/songs/${song.id}/edit` }"
                  class="btn btn-success mx-2"
                  >Edit</RouterLink
                >
                <button
                  type="button"
                  @click="deleteSong(song.id)"
                  class="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";

export default {
  name: "songs",
  setup() {
    const songs = ref([]);
    let songId = null;

    const getSongs = () => {
      axios.get("http://localhost:3000/medieval_songs").then((res) => {
        songs.value = res.data;
      });
    };

    const deleteSong = (songId) => {
      if (confirm("Are you sure?"))
        axios.delete(`http://localhost:3000/medieval_songs/${songId}`).then((res) => {
          alert("Song Deleted!");
          getSongs();
        });
    };

    const instance = getCurrentInstance();

    onMounted(() => {
      songId = instance.proxy.$route.params.id;
      getSongs();
    });

    return {
      songs,
      getSongs,
      deleteSong,
    };
  },
};
</script>
