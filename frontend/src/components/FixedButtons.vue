<template>
  <div class="button-wrapper">
    <div>
      <a class="about" href="#about">
        <p>O que é</p>
        <span>Namah?</span>
      </a>

      <a class="arrow-up" href="#">
        <img src="../assets/arrow-up.svg" alt="home" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixedButtons"
};
</script>

<style scoped>
.button-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 0 30px;
  padding-top: 100px;
  z-index: -1;
}

.button-wrapper div {
  display: flex;
  height: 100%;
  max-width: 1820px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

.about {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #73a8a0;
  color: #fff;
  border: none;
}

.about p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.about span {
  font-size: 22px;
  font-family: "DM Serif Display", serif;
}

.arrow-up {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #73a8a0;
  color: #fff;
  border: none;
}

a:hover {
  background: #6bc0b5;
}
</style>