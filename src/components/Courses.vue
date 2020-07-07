<template>
  <div class="courses-wrapper">
    <SectionTitle title="Cursos" />

    <div class="courses">
      <CourseCard v-for="(course, index) in courses" :key="index" :course="course" />
    </div>

    <ActionButton>
      <p>VEJA TODOS OS CURSOS</p>
    </ActionButton>
  </div>
</template>

<script>
import YogaImg from "@/assets/yogaCourse.png";

import SectionTitle from "@/components/SectionTitle";
import ActionButton from "@/components/ActionButton";
import CourseCard from "@/components/CourseCard";

export default {
  name: "Courses",
  components: {
    SectionTitle,
    ActionButton,
    CourseCard
  },
  data() {
    return {
      courses: [
        {
          img: YogaImg,
          date: "4 Abr - 5 Abr",
          title: "Imersão Vinyasa Flow",
          author: "Por Fernando Cunha",
          duration: "2 dias de curso"
        },
        {
          img: YogaImg,
          date: "4 Abr - 5 Abr",
          title: "Imersão Vinyasa Flow",
          author: "Por Fernando Cunha",
          duration: "2 dias de curso"
        },
        {
          img: YogaImg,
          date: "4 Abr - 5 Abr",
          title: "Imersão Vinyasa Flow",
          author: "Por Fernando Cunha",
          duration: "2 dias de curso"
        }
      ]
    };
  }
};
</script>

<style scoped>
.courses-wrapper {
  margin: 120px auto 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.courses {
  display: flex;
  margin: 36px -12px 0 -12px;
}

@media screen and (max-width: 1400px) {
  .courses-wrapper {
    margin: 120px 140px 0 140px;
  }
}

@media screen and (max-width: 1230px) {
  .courses-wrapper {
    margin: 120px 60px 0 60px;
  }
}

@media screen and (max-width: 1080px) {
  .courses-wrapper {
    margin: 120px 60px 0 60px;
  }

  .courses {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 790px) {
  .courses-wrapper {
    margin: 60px 15px 0 15px;
  }

  .courses {
    margin-top: 12px;
  }
}
</style>