<template>
  <main>
    <h1 class="title">Wise Capybara</h1>
    <div class="container">
      <RouterLink to="/songs"><img :src="capybaraImage" alt="" class="image" /></RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import capybaraImage from "@/assets/capybara.png";
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 700px;
  margin-top: 10px;
  border-radius: 20px;
  box-shadow: 0 0 3px 3px rgb(255, 216, 153);

    &:hover {
      opacity: 0.8;
    }
}
</style>
