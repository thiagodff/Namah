<template>
  <div class="highlights-wrapper">
    <div class="first-element">
      <BlogBanner :content="firstElement" />
    </div>

    <div class="col-2">
      <div class="second-element">
        <img src="../assets/women.png" alt="mulheres" />
        <p>Namahcast #122</p>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>

      <div class="third-element">
        <div class="yoga">
          <img src="../assets/alongamento.png" alt="mulheres" />
          <p>CURSO - 04 ABR</p>
          <h3>Imersão Vinyasa Flow</h3>
        </div>

        <div class="product">
          <img src="../assets/condicionador.png" alt="mulheres" />
          <h3>Condicioandor Namah</h3>
          <p>COMPRE AGORA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MeditationImg from "@/assets/meditation.png";

import BlogBanner from "@/components/BlogBanner";

export default {
  name: "Highlights",
  data() {
    return {
      firstElement: {
        img: MeditationImg,
        alt: "meditação",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        category: "VIAGEM",
        author: "Fulano de Tal"
      }
    };
  },
  components: {
    BlogBanner
  }
};
</script>

<style scoped>
.highlights-wrapper {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  max-height: 528px;
  margin: 0 auto;
}

img {
  width: 100%;
}

h3 {
  position: absolute;
  font-family: "Alice", serif;
  cursor: pointer;
}

p {
  position: absolute;
  font-family: "Roboto", sans-serif;
}

.first-element {
  width: 68%;
  height: 100%;
  margin-right: 2%;
}

.first-element img {
  height: 100%;
}

.col-2 {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 33.4%;
}

.second-element {
  width: 100%;
  height: 52%;
  position: relative;
  color: #fff;
  margin-bottom: 4%;
}

.second-element h3 {
  top: 75%;
  font-size: 18px;
  margin: 0 10px;
}

.second-element p {
  top: 68%;
  font-size: 11px;
  margin: 0 10px;
}

.third-element {
  color: #fff;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48%;
}

.yoga {
  margin-right: 6.25%;
}

.yoga,
.product {
  position: relative;
  height: 100%;
}

.yoga p {
  font-size: 12px;
  width: 100%;
  padding: 10px;
  top: 63%;
  font-weight: bold;
}

.yoga h3 {
  font-size: 20px;
  width: 100%;
  padding: 10px;
  top: 71%;
}

.product h3 {
  font-size: 20px;
  width: 100%;
  padding: 10px;
  top: 60%;
}

.product p {
  font-size: 12px;
  width: 100%;
  padding: 10px;
  top: 84%;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 1400px) {
  .highlights-wrapper {
    margin: 0 140px;
  }

  .col-2 {
    width: 33.25%;
  }
}
</style>