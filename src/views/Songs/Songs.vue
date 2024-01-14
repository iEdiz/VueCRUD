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
            <tr v-for="(song, index) in this.songs" :key="index">
              <td>{{ song.title }}</td>
              <td>{{ song.artist }}</td>
              <td>{{ song.year }}</td>
              <td>{{ song.genre }}</td>
              <td>{{ song.duration }}</td>
              <td>
                <RouterLink to="/" class="btn btn-success">Edit</RouterLink>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "songs",
  data() {
    return {
      songs: [],
    };
  },
  mounted() {
    this.getSongs();
  },
  methods: {
    getSongs() {
      axios.get("http://localhost:3000/medieval_songs").then((res) => {
        this.songs = res.data;
      });
    },
  },
};
</script>
