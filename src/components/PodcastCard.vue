<template>
  <div class="card">
    <img class="imagem" :src="podcast.img" alt />
    <span class="reference">{{ podcast.reference}}</span>
    <h4>{{ podcast.title }}</h4>

    <div class="description">
      <p>{{ podcast.description }}</p>

      <img :src="Play" alt />
    </div>
  </div>
</template>

<script>
import Play from "@/assets/play.svg";

export default {
  name: "PodcastCard",
  props: ["podcast"],
  data() {
    return {
      Play
    };
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-top: 24px;
}

.card img.imagem {
  width: 100%;
}

.card span {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14px;
  color: #73a8a0;
}

.card h4 {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
}

.description {
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.description p {
  font-size: 14px;
  margin-right: 15px;
  color: #333333;
}

@media screen and (max-width: 790px) {
  .card span {
    margin-left: 12px;
    margin-right: 12px;
  }

  .card h4 {
    font-size: 15px;
    margin-right: 12px;
    margin-left: 12px;
  }

  .description {
    margin: 20px 12px;
  }
}
</style>