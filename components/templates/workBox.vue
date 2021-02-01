<template>
  <div class="workBox">
    <div class="title">
      <h2>{{ item.name }}</h2>

      <skillTag
        v-for="subContent in item.subContents"
        class="tag"
        :key="subContent.name"
        :tag="subContent"
      ></skillTag>
    </div>
    <p class="time">Created: {{ item.time }}</p>
    <a class="link" v-if="item.link" :href="item.link" target="_blank"
      >使ってみる</a
    >
    <div class="contents">
      <p class="box-content">{{ item.content }}</p>
      <ul class="github" v-if="item.github">
        <li v-for="(content, i) in item.github" :key="i">
          <a :href="content.url" target="_blank"
            >{{ content.name }} &lt;/&gt; on GitHub</a
          >
        </li>
      </ul>
      <img :ref="item.img" />
    </div>
  </div>
</template>

<script>
import skillTag from "./skillTag.vue";
export default {
  name: "workBox",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    skillTag,
  },
};
</script>

<style scoped>
.workBox {
  max-width: 500px;
  margin: 5px auto;
  border: 2px solid #ddd;
  border-radius: 30px;
  box-shadow: 5px 5px #ddd;
}

h2 {
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 15px;
}

.github {
  list-style: none;
  margin-top: 10px;
}

.github > li > a {
  text-decoration: none;
  border-bottom: 1px dashed black;
  color: black;
}

.time,
.link {
  padding: 5px 15px 0 15px;
}

.contents {
  margin: 0 20px;
  padding-top: 5px;
}

.box-content {
  font-size: 14px;
}

.title {
  display: block;
}

.link {
  color: orchid;
  text-decoration: none;
}
</style>
