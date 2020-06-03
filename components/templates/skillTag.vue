<template>
  <a>{{ tag.name }}</a>
</template>

<script>
export default {
  props: ["tag"]
};
</script>

<style scoped>
a {
  margin: 5px 15px;
  font-size: 90%;
  padding: 5px 10px;
  color: white;
  background-color: orchid;
  opacity: 0.8;
  border-radius: 5px;
}
</style>
