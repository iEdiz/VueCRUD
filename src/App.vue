<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Bootstrap navbar -->
      <nav class="navbar navbar-expand-lg navbar-bg">
        <div class="container">
          <RouterLink class="navbar-brand" to="/"
            ><img
              src="./assets/Cat staring.jpg"
              alt=""
              style="width: 50px; border-radius: 10px; box-shadow: 0 0 4px 1px rgb(68, 67, 67);"
          /></RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link navButton" to="/" active-class="active"
                  >Home</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link navButton" to="/about" active-class="active"
                  >About</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link navButton" to="/songs" active-class="active"
                  >Songs</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar-bg {
  background-color: #eed0d0;
}
.navButton {
  padding: 6px;
  background-color: #eb9898;
  margin-right: 10px;
  border-radius: 7px;
  font-size: 16px;
  border: 1px solid rgb(41, 40, 40);
}
</style>
