<template>
  <div class="product">
    <img :src="product.img" alt />
    <h3>{{ product.title }}</h3>
    <p>{{ product.detail }}</p>
    <span>{{ product.price | formatPrice }}</span>
  </div>
</template>

<script>
export default {
  name: "RecommendProduct",
  props: ["product"]
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Robot", sans-serif;
  margin-left: 25px;
  overflow-y: auto;
  overflow: hidden;
}

.product h3 {
  font-size: 12px;
  margin-top: 10px;
}

.product p {
  font-size: 11px;
  color: #666666;
}

.product span {
  color: #333333;
  font-size: 12px;
  margin-top: 10px;
}
</style>