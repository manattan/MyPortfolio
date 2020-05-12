<template>
  <v-container>
    <Top />
    <Tabmenu />
    <Me />
    <Blogs :posts="postsData" />
    <Works />
    <Skills />
    <!-- <Photos /> -->
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
// import Photos from "~/components/Photos.vue";
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
    // Photos,
    Footer
  },
  asyncData({ params }) {
    return contentful.getEntries({ order: "-sys.createdAt" }).then(e => {
      return {
        postsData: e.items
      };
    });
  }
};
</script>

<style>
v-container {
  font-size: 14px;
  background-color: #bbb;
  color: #333;
  font-family: Fira Sans, sans-serif;
  max-width: 1410px;
  overflow: hidden;
}
</style>
