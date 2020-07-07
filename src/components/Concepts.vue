<template>
  <div class="concept-wrapper">
    <SectionTitle title="@namah.concept" />

    <div class="concepts">
      <div class="concept" v-for="(concept, index) in concepts" :key="index">
        <img :src="concept" />
      </div>
    </div>
  </div>
</template>

<script>
import Concept1Img from "@/assets/concept1.png";
import Concept2Img from "@/assets/concept2.png";
import Concept3Img from "@/assets/concept3.png";
import Concept4Img from "@/assets/concept4.png";
import Concept5Img from "@/assets/concept5.png";
import Concept6Img from "@/assets/concept6.png";

import SectionTitle from "@/components/SectionTitle";

export default {
  name: "Concepts",
  components: {
    SectionTitle
  },
  data() {
    return {
      concepts: [
        Concept1Img,
        Concept2Img,
        Concept3Img,
        Concept4Img,
        Concept5Img,
        Concept6Img
      ]
    };
  }
};
</script>

<style scoped>
.concept-wrapper {
  margin: 120px auto 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.concepts {
  display: flex;
  margin: 60px -12px 0 -12px;
}

.concept {
  margin: 0 12px;
}

.concept img {
  width: 100%;
}

@media screen and (max-width: 1400px) {
  .concept-wrapper {
    margin: 120px 140px 0 140px;
  }
}

@media screen and (max-width: 1230px) {
  .concept-wrapper {
    margin: 120px 60px 0 60px;
  }
}

@media screen and (max-width: 1080px) {
  .concepts {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 790px) {
  .concept-wrapper {
    margin: 60px 15px 0 15px;
  }

  .concepts {
    margin-top: 24px;
  }

  .concept {
    margin-top: 12px;
  }
}

@media screen and (max-width: 635px) {
  .concept {
    flex: 1 0 130px;
  }
}

@media screen and (max-width: 485px) {
  .concept {
    flex: 1 0 95px;
  }
}

@media screen and (max-width: 380px) {
  .concept {
    flex: 1 0 80px;
  }
}
</style>