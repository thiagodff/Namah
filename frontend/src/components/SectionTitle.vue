<template>
  <div class="section">
    <div class="stroke"></div>
    <h2>{{ title }}</h2>
    <div class="stroke"></div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["title"]
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.stroke {
  height: 1px;
  width: 100%;
  background: #c4c4c4;
}

.section h2 {
  font-family: "Alice", serif;
  font-size: 46px;
  margin: 0 10px;
}
</style>