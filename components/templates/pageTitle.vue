<template>
  <div>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
div {
  width: 200px;
  margin: 20px auto;
}
.title {
  text-align: center;
  font-size: 24px;
  font-weight: normal;
}
</style>