<template>
  <h1 class="title">Have been cat!</h1>
  <div class="container">
    <RouterLink to="/">
      <div class="spinningImage"></div>
    </RouterLink>
  </div>
  <h2 class="returnTitle">Press the image to return to home screen</h2>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinningImage {
  width: 300px;
  height: 300px;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 0 0 3px 4px black;
  background: url("https://media.tenor.com/G0OBtQPRa40AAAAM/cat-funny-looking-camera-cat-smurf.gif")
    center/cover;

  &:hover {
    animation: spin 3s linear infinite;
  }
}

.title {
  text-align: center;
  margin: 20px 0 0 0;
}

.returnTitle {
  text-align: center;
  margin-top: 20px;
}
</style>
