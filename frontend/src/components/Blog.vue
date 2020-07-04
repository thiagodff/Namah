<template>
  <div class="blog-wrapper">
    <SectionTitle title="Blog" />

    <div class="banner">
      <BlogBanner class="meditation" :content="firstElement" />
      <BlogBanner class="exercice" :content="secondElement" />
    </div>

    <div class="section-news">
      <div class="news">
        <div class="first-post">
          <img :src="RunningImg" alt />
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <a href="#">VIAGEM</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
        </div>

        <div class="second-post">
          <img :src="DumbbellNoticeImg" alt />
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <a href="#">VIAGEM</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
        </div>
      </div>

      <div class="newsletter">
        <h4>
          Namah
          <br />no seu e-mail
        </h4>
        <p>Assine nossa newsletter</p>

        <form>
          <input placeholder="Seu e-mail" type="text" />

          <button @click.prevent>ASSINAR</button>
        </form>

        <span>
          Ao clicar em “assinar”, você concorda em receber
          e-mails do Espaço Namah a aceita nossos
          <a>Termos de Uso</a>
          e nossas
          <a>Políticas de Privacidade</a>.
        </span>
      </div>
    </div>

    <ActionButton>
      <p>VEJA TODOS OS POSTS</p>
    </ActionButton>
  </div>
</template>

<script>
import MeditationImg from "@/assets/meditationBlog.png";
import DubbemllImg from "@/assets/dumbbell.png";
import DumbbellNoticeImg from "@/assets/dumbbellNotice.png";
import RunningImg from "@/assets/running.png";

import SectionTitle from "@/components/SectionTitle";
import ActionButton from "@/components/ActionButton";
import BlogBanner from "@/components/BlogBanner";

export default {
  name: "Blog",
  components: {
    SectionTitle,
    ActionButton,
    BlogBanner
  },
  data() {
    return {
      windowWidth: "",
      DumbbellNoticeImg,
      RunningImg,
      firstElement: {
        img: MeditationImg,
        alt: "meditação",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        category: "VIAGEM",
        author: "Fulano de Tal",
        h3: "32px",
        p: "14px"
      },
      secondElement: {
        img: DubbemllImg,
        alt: "meditação",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        category: "DESENVOLVIMENTO PESSOAL",
        author: "Fulano de Tal",
        h3: "32px",
        p: "14px"
      }
    };
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth <= 790) {
        this.firstElement.h3 = "20px";
        this.firstElement.p = "11px";
        this.secondElement.h3 = "20px";
        this.secondElement.p = "11px";
      } else {
        this.firstElement.h3 = "32px";
        this.firstElement.p = "14px";
        this.secondElement.h3 = "32px";
        this.secondElement.p = "14px";
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
};
</script>

<style scoped>
.blog-wrapper {
  margin: 120px auto 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.banner {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  max-height: 588px;
  max-width: 100%;
  justify-content: space-between;
}

.meditation {
  margin-right: 12px;
}

.blog-banner-wrapper .meditation h3 {
  font-size: 3px;
}

.exercice {
  margin-left: 12px;
}

img {
  max-width: 100%;
}

.section-news {
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  flex: 1;
}

.news {
  display: flex;
}

.first-post {
  margin-right: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #333333;
}

.second-post {
  margin-left: 12px;
  margin-right: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #333333;
}

.first-post h3,
.second-post h3 {
  font-family: "Alcie", serif;
  margin-top: 26px;
  font-size: 32px;
}

.first-post a,
.second-post a {
  margin-top: 10px;
  align-self: flex-start;
  text-decoration: underline;
  font-size: 14px;
}

.first-post a:visited,
.second-post a:visited {
  color: #333333;
}

.first-post p,
.second-post p {
  margin-top: 25px;
  font-size: 16px;
}

.newsletter {
  margin-left: 12px;
  border: 1px solid #000;
  text-align: center;
  padding: 50px 25px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter h4 {
  font-family: "Alcie", serif;
  font-size: 36px;
}

.newsletter p {
  margin-top: 20px;
  font-size: 18px;
  color: #666666;
}

.newsletter input {
  width: calc(100% - 30px);
  margin-top: 50px;
  border: 1px solid #666666;
  padding: 16px;
  font-size: 18px;
  color: #666666;
}

.newsletter input::placeholder {
  color: #666666;
}

.newsletter button {
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  background: none;
  padding: 16px 32px;
  color: #000000;
}

.newsletter span {
  font-size: 12px;
  color: #666666;
  margin-top: auto;
}

.newsletter span a {
  font-size: 12px;
  color: #666666;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 1400px) {
  .blog-wrapper {
    margin: 120px 140px 0 140px;
  }

  .newsletter {
    padding: 40px 25px;
  }
}

@media screen and (max-width: 1230px) {
  .blog-wrapper {
    margin: 120px 60px 0 60px;
  }
}

@media screen and (max-width: 1080px) {
  .banner {
    flex-wrap: wrap;
    max-height: 1300px;
    max-width: 1200px;
  }

  .meditation,
  .exercice {
    width: 100%;
    margin: 0;
  }

  .exercice {
    margin-top: 24px;
  }

  .section-news {
    margin-top: 24px;
    flex-direction: column;
  }

  .second-post {
    margin-right: 0;
  }

  .newsletter {
    margin: 0;
    margin-top: 24px;
  }

  .newsletter form {
    display: flex;
  }

  .newsletter h4 br {
    display: none;
  }

  .newsletter form input {
    margin-top: 30px;
  }

  .newsletter form button {
    padding: 8px 16px;
    margin-left: 12px;
  }

  .newsletter span {
    margin-top: 24px;
  }
}

@media screen and (max-width: 790px) {
  .blog-wrapper {
    margin: 60px 15px 0 15px;
  }

  .banner {
    margin-top: 30px;
  }

  .first-post h3,
  .second-post h3 {
    margin-top: 12px;
    font-size: 16px;
  }

  .first-post a,
  .second-post a {
    margin-top: 12px;
    font-size: 12px;
  }

  .first-post p,
  .second-post p {
    margin-top: 12px;
    font-size: 12px;
    line-height: 16px;
  }

  .newsletter {
    padding: 24px 12px;
  }

  .newsletter h4 {
    font-size: 28px;
  }

  .newsletter p {
    margin-top: 12px;
    font-size: 18px;
  }

  .newsletter form input {
    margin-top: 24px;
    height: 46px;
    font-size: 14px;
  }

  .newsletter form button {
    margin-top: 24px;
    padding: 12px 14px;
    font-size: 14px;
    margin-left: 12px;
  }

  .newsletter span {
    margin-top: 24px;
  }
}
</style>