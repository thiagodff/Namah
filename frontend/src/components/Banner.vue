<template>
  <div class="image-wrapper">
    <div class="image">
      <img src="../assets/banner.png" alt />
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet</p>
      <button @click.prevent>LOREM IPSUM</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.image-wrapper {
  max-width: 1200px;
  min-height: 100px;
  margin: 60px auto;
}

.image-wrapper img {
  height: 100%;
  min-height: 100px;
  border: 1px solid #666666;
}

@media screen and (max-width: 1400px) {
  .image-wrapper {
    margin: 60px 140px;
  }
}

@media screen and (max-width: 1230px) {
  .image-wrapper {
    margin: 60px 60px;
  }
}

.image {
  position: relative;
  color: #fff;
}

.image img {
  width: 100%;
}

.image h3 {
  position: absolute;
  text-align: center;
  width: 380px;
  font-size: 34px;
  font-family: "Alice", serif;
  color: #000000;
  top: 15%;
  right: 10%;
}

.image p {
  position: absolute;
  text-align: center;
  width: 380px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #666666;
  top: 52%;
  right: 10%;
}

.image button {
  position: absolute;
  text-align: center;
  bottom: 15%;
  right: 10%;
  width: 380px;
  background-color: #73a8a0;
  font-family: "Roboto", sans-serif;
  color: #fff;
  padding: 10px 44px;
  font-size: 14px;
  font-weight: 500;
  border: none;
}

button:hover {
  background: #6bc0b5;
}

@media screen and (max-width: 1080px) {
  .image h3 {
    width: 320px;
    font-size: 26px;
    top: 15%;
    right: 10%;
  }

  .image p {
    width: 320px;
    font-size: 14px;
    top: 52%;
    right: 10%;
  }

  .image button {
    bottom: 15%;
    right: 10%;
    width: 320px;
    padding: 8px 40px;
    font-size: 11px;
  }
}

@media screen and (max-width: 790px) {
  .image-wrapper {
    margin: 0 15px 25px 15px;
  }

  .image h3 {
    width: 180px;
    font-size: 16px;
    top: 20%;
    right: 10%;
  }

  .image p {
    width: 180px;
    font-size: 11px;
    right: 10%;
    top: 60%;
  }

  .image button {
    display: none;
  }
}
</style>