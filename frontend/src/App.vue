<template>
  <div id="app">
    <Header />
    <FixedButtons />

    <Banner />

    <Highlights />
    <Recommendation />

    <div class="offset" id="blog"></div>
    <Blog />

    <div class="offset" id="shop"></div>
    <Shop />

    <div class="offset" id="courses"></div>
    <Courses />

    <div class="offset" id="podcasts"></div>
    <Podcasts />
    <Concepts />

    <div class="offset" id="contact"></div>
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";

import Header from "@/components/Header";
import FixedButtons from "@/components/FixedButtons";
import Banner from "@/components/Banner";
import Highlights from "@/components/Highlights";
import Recommendation from "@/components/Recommendation";
import Blog from "@/components/Blog";
import Shop from "@/components/Shop";
import Courses from "@/components/Courses";
import Podcasts from "@/components/Podcasts";
import Concepts from "@/components/Concepts";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    FixedButtons,
    Banner,
    Highlights,
    Recommendation,
    Blog,
    Shop,
    Courses,
    Podcasts,
    Concepts,
    Footer
  }
};
</script>

<style>
#app {
  margin-top: 160px;
}

.offset:before {
  display: block;
  content: " ";
  width: 100%;
  height: 10px;
  margin-top: -10px;
  visibility: hidden;
}

@media screen and (max-width: 790px) {
  #app {
    margin-top: 124px;
  }
}

@media screen and (max-width: 600px) {
  #app {
    margin-top: 94px;
  }
}
</style>
