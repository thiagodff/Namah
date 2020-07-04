<template>
  <div class="product">
    <div class="image">
      <div class="coracao" :class="{ active: isActive }" @click.prevent="isActive = !isActive">
        <img :src="CoracaoImg" />
      </div>
      <img :src="product.img" alt />
    </div>

    <h4>{{ product.title }}</h4>
    <p>{{ product.description }}</p>
    <span>{{ product.price | formatPrice }}</span>
  </div>
</template>

<script>
import CoracaoImg from "@/assets/coracao.svg";

export default {
  name: "Product",
  props: ["product"],
  data() {
    return {
      CoracaoImg,
      isActive: false
    };
  }
};
</script>

<style scoped>
.product {
  flex: 1 0 100px;
  cursor: pointer;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  display: flex;
  flex-direction: column;
}

.coracao {
  z-index: 5;
  margin: 0 10px -45px 0;
  height: 35px;
  width: 35px;
  align-self: flex-end;
  padding: 9px 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  background-color: #778073;
}

.product img {
  width: 100%;
  height: 100%;
}

.product h4 {
  margin-top: 23px;
  font-size: 18px;
}

.product p {
  margin-top: 8px;
  font-size: 14px;
  color: #666666;
}

.product span {
  margin-top: 23px;
  font-size: 18px;
  color: #333333;
}

@media screen and (max-width: 750px) {
  .product {
    margin: 24px 7px 0 7px;
    flex: 1 0 220px;
  }
}

@media screen and (max-width: 510px) {
  .product {
    flex: 1 0 150px;
  }
}

@media screen and (max-width: 360px) {
  .product {
    flex: 1 0 130px;
  }
}
</style>