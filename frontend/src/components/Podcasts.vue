<template>
  <div class="podcasts-wrapper">
    <SectionTitle title="Podcasts" />

    <div class="podcasts">
      <PodcastCard v-for="(podcast, index) in podcasts" :key="index" :podcast="podcast" />
    </div>

    <ActionButton>
      <p>VEJA TODOS OS PODCASTS</p>
    </ActionButton>
  </div>
</template>

<script>
import Podcast123 from "@/assets/podcast123.png";
import Podcast122 from "@/assets/podcast122.png";
import Podcast121 from "@/assets/podcast121.png";

import SectionTitle from "@/components/SectionTitle";
import ActionButton from "@/components/ActionButton";
import PodcastCard from "@/components/PodcastCard";

export default {
  name: "Podcasts",
  components: {
    SectionTitle,
    ActionButton,
    PodcastCard
  },
  data() {
    return {
      podcasts: [
        {
          img: Podcast123,
          reference: "Namacast #123",
          title:
            "Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore",
          description:
            "Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor"
        },
        {
          img: Podcast122,
          reference: "Namacast #122",
          title:
            "Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore",
          description:
            "Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor"
        },
        {
          img: Podcast121,
          reference: "Namacast #122",
          title:
            "Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore",
          description:
            "Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor"
        }
      ]
    };
  }
};
</script>

<style scoped>
.podcasts-wrapper {
  margin: 120px auto 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1400px) {
  .podcasts-wrapper {
    margin: 120px 140px 0 140px;
  }
}

.podcasts {
  display: flex;
  margin: 60px -12px 0 -12px;
}
</style>