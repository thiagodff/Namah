<template>
  <div class="image-wrapper">
    <div class="image">
      <div class="image-content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet</p>
        <button @click.prevent>LOREM IPSUM</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.image {
  max-width: 1200px;
  height: 250px;
  background: url("../assets/banner.png");
  border: 1px solid #c4c4c4;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 140px;
}

@media screen and (max-width: 1400px) {
  .image {
    margin: 60px 140px;
  }
}

.image-content {
  background-color: transparent;
  text-align: center;
  width: 320px;
}

.image-content h3 {
  font-size: 34px;
  font-family: "DM Serif Display", serif;
  color: #000000;
}

.image-content p {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
}

.image-content button {
  background-color: #73a8a0;
  font-family: "Roboto", sans-serif;
  color: #fff;
  padding: 10px 44px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  border: none;
}

button:hover {
  background: #6bc0b5;
}
</style>