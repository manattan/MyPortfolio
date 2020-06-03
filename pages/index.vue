<template>
  <v-container>
    <Top />
    <Tabmenu />
    <Me />
    <Skills />
    <Works />
    <Blogs :posts="postsData" />
    <Movies :movies="moviesData" />

    <Footer />
  </v-container>
</template>

<script>
import Top from "~/components/Top.vue";
import Tabmenu from "~/components/Tabmenu.vue";
import Me from "~/components/Me.vue";
import Skills from "~/components/Skills.vue";
import Works from "~/components/Works.vue";
import Blogs from "~/components/Blogs.vue";
import Movies from "~/components/Movies.vue";
import Footer from "~/components/Footer.vue";

import contentful from "~/plugins/contentful.js";

export default {
  components: {
    Top,
    Tabmenu,
    Me,
    Skills,
    Works,
    Blogs,
    Movies,
    Footer
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
  async asyncData({ params, $axios }) {
    const resMovies = await $axios.get(
      "https://api.themoviedb.org/3/list/144506?api_key=832201126ea079d6282ce2a44edd623e&language=ja"
    );
    const resPosts = await contentful.getEntries({ order: "-sys.createdAt" });

    return {
      postsData: resPosts.items,
      moviesData: resMovies.data.items
    };
  }
};
</script>

<style>
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
