<template>
  <div class="blog-banner-wrapper">
    <img :src="content.img" :alt="content.alt" />
    <h3 :style="h3Style" @click.prevent>{{ content.title }}</h3>
    <p :style="pStyle">
      <a href="#">{{ content.category }}</a>
      por
      <a href="#">{{ content.author }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "BlogBanner",
  props: ["content"],
  computed: {
    h3Style() {
      return `font-size: ${this.content.h3}`;
    },
    pStyle() {
      return `font-size: ${this.content.p}`;
    }
  }
};
</script>

<style scoped>
.blog-banner-wrapper {
  position: relative;
  color: #fff;
}

.blog-banner-wrapper img {
  width: 100%;
}

.blog-banner-wrapper h3 {
  position: absolute;
  top: 67%;
  font-family: "Alice", serif;
  font-size: 37px;
  margin: 0 20px;
  cursor: pointer;
}

.blog-banner-wrapper p {
  position: absolute;
  font-family: "Roboto", sans-serif;
  top: 90%;
  font-size: 18px;
  margin: 0 20px;
}

.blog-banner-wrapper p a {
  margin-right: 50px;
  text-decoration: underline;
  color: #fff;
}
</style>