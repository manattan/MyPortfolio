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
  position: relative;
  padding: 40px 0 20px 0;
}
.title:before {
  content: ""; /* 空白の要素を作る */
  background-color: violet; /* 背景色指定 */
  opacity: 0.2;
  display: block; /* ブロック要素にする */
  position: absolute; /* 位置調整 */
  left: 0; /* 位置調整 */
  height: 90px; /* 高さ指定 */
  width: 90px; /* 幅指定 */
  border-radius: 50%; /* 丸くする */
  top: 0; /* 位置調整 */
  z-index: -1;
}
</style>