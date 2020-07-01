<template>
  <div class="shop-wrapper">
    <SectionTitle title="Namah Shop" />

    <div class="products">
      <img class="arrow-left" :src="ArrowLeft" alt />
      <Product v-for="(product, index) in products" :product="product" :key="index" />
      <img class="arrow-right" :src="ArrowRight" alt />
    </div>

    <div class="carousel-wrapper">
      <span v-for="(item, index) in corouselTotal" :class="{active: item.isActive}" :key="index"></span>
    </div>

    <ActionButton>
      <p>VEJA TODOS OS PRODUTOS</p>
    </ActionButton>
  </div>
</template>

<script>
import PascoaImg from "@/assets/pascoa.png";
import WasabiImg from "@/assets/wasabi.png";
import ShampooImg from "@/assets/shampoo.png";
import CondicionadorImg from "@/assets/condicionadorShop.png";
import ArrowLeft from "@/assets/carrosel-arrow-left.svg";
import ArrowRight from "@/assets/carrosel-arrow-right.svg";

import SectionTitle from "@/components/SectionTitle";
import ActionButton from "@/components/ActionButton";
import Product from "@/components/Product";

export default {
  name: "Shop",
  components: {
    SectionTitle,
    ActionButton,
    Product
  },
  data() {
    return {
      ArrowLeft,
      ArrowRight,
      corouselTotal: [
        {
          isActive: true
        },
        {
          isActive: false
        }
      ],
      products: [
        {
          img: PascoaImg,
          title: "Ovo de Páscoa de Paçoca",
          description: "Lorem ipsum dolor",
          price: 65
        },
        {
          img: WasabiImg,
          title: "Chantighee com Wasabi 200g",
          description: "Lorem ipsum dolor",
          price: 32
        },
        {
          img: ShampooImg,
          title: "Shampoo Sólido Namah",
          description: "Lorem ipsum dolor",
          price: 49
        },
        {
          img: CondicionadorImg,
          title: "Condicionador Namah",
          description: "Lorem ipsum dolor",
          price: 69
        }
      ]
    };
  }
};
</script>

<style scopedd>
.shop-wrapper {
  margin: 120px auto 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1400px) {
  .shop-wrapper {
    margin: 120px 140px 0 140px;
  }
}

.products {
  display: flex;
  flex-direction: row;
  margin: 70px -58px 40px -58px;
}

.arrow-left {
  margin-right: 28px;
  cursor: pointer;
}

.arrow-right {
  margin-left: 28px;
  cursor: pointer;
}

.carousel-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.carousel-wrapper span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c4c4c4;
  margin: 0 5px;
}

.carousel-wrapper span.active {
  background: #73a8a0;
}
</style>