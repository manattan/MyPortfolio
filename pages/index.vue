<template>
  <v-container>
    <Top />
    <Tabmenu />
    <Me />
    <Blogs :posts="postsData" />
    <Works />
    <Footer />
  </v-container>
</template>

<script>
import Top from "~/components/Top.vue";
import Tabmenu from "~/components/Tabmenu.vue";
import Me from "~/components/Me.vue";
import Works from "~/components/Works.vue";
import Blogs from "~/components/Blogs.vue";
import Footer from "~/components/Footer.vue";

import contentful from "~/plugins/contentful.js";

export default {
  components: {
    Top,
    Tabmenu,
    Me,
    Works,
    Blogs,
    Footer
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
  async asyncData({ params, $axios }) {
    const resPosts = await contentful.getEntries({ order: "-sys.createdAt" });
    return {
      postsData: resPosts.items,
    };
  },
};
</script>

<style scoped>
v-container {
  font-size: 14px;
  background-color: #bbb;
  color: #333;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  max-width: 1410px;
  overflow: hidden;
}
</style>
