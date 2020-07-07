<template>
  <button class="button">
    <slot></slot>
    <img :src="arrow" alt="arrow" />
  </button>
</template>

<script>
import arrowRight from "@/assets/arrow-right.svg";

export default {
  name: "ActionButton",
  data() {
    return {
      arrow: arrowRight
    };
  }
};
</script>

<style scoped>
.button {
  height: 52px;
  color: #ffffff;
  background: #73a8a0;
  border: none;
  margin-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  align-self: center;
}

.button:hover {
  background: #6bc0b5;
}

.button p {
  font-family: "Robot", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap;
}

@media screen and (max-width: 790px) {
  .button {
    width: 100%;
    margin-top: 36px;
  }

  .button p {
    font-size: 14px;
  }
}
</style>