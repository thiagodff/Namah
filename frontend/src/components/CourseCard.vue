<template>
  <div class="card">
    <img class="imagem" :src="course.img" alt />
    <span class="date">{{ course.date}}</span>
    <h4>{{ course.title }}</h4>

    <div class="description">
      <div>
        <p>{{ course.author }}</p>
        <p>{{ course.duration }}</p>
      </div>

      <img :src="Arrow" alt />
    </div>
  </div>
</template>

<script>
import Arrow from "@/assets/arrow-green.svg";

export default {
  name: "CourseCard",
  props: ["course"],
  data() {
    return {
      Arrow
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
  margin-right: 20px;
  margin-left: 20px;
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
  color: #333333;
}

.description div {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 790px) {
  .card span {
    margin-left: 12px;
    margin-right: 12px;
  }

  .card h4 {
    margin-right: 12px;
    margin-left: 12px;
  }

  .description {
    margin: 20px 12px;
  }
}
</style>