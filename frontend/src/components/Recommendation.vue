<template>
  <div class="recommendation-wrapper">
    <div class="recommendation-text">
      <p>nossos especialisas</p>
      <strong>recomendam</strong>
    </div>

    <RecommendProduct :product="book" />
    <RecommendProduct :product="shirt" />
    <RecommendProduct :product="carpet" />

    <RecommendProduct :product="book" />
    <RecommendProduct :product="shirt" />
    <RecommendProduct :product="carpet" />
  </div>
</template>

<script>
import RecommendProduct from "@/components/RecommendProduct";
import livroSuaLuz from "@/assets/livroSuaLuz.png";
import camiseta from "@/assets/camiseta.png";
import tapete from "@/assets/tapete.png";

export default {
  name: "Recommendation",
  components: {
    RecommendProduct
  },
  data() {
    return {
      book: {
        img: livroSuaLuz,
        title: "Livro Acenda a Sua Luz",
        detail: "Carol Rache",
        price: 54
      },
      shirt: {
        img: camiseta,
        title: "Camiseta Solidária",
        detail: "Tamanho único",
        price: 149
      },
      carpet: {
        img: tapete,
        title: "Tapete Viagem Passáro",
        detail: "",
        price: 237
      }
    };
  }
};
</script>

<style>
.recommendation-wrapper {
  max-width: 1200px;
  margin: 24px auto;
  padding: 10px 0;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;

  display: flex;
  align-items: center;
}

@media screen and (max-width: 1400px) {
  .recommendation-wrapper {
    margin: 24px 140px;
  }
}

.recommendation-text {
  font-family: "Alice", serif;
  margin: 0 15px;
}

.recommendation-text p {
  font-size: 16.5px;
  margin-bottom: 4px;
}

.recommendation-text strong {
  font-size: 24px;
}
</style>