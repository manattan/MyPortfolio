<template>
  <v-container>
    <Top />
    <Tabmenu />
    <Me />
    <Skills />
    <Works />
    <Posts />
    <Photos />
    <Footer />
  </v-container>
</template>

<script>
import Top from "~/components/Top.vue";
import Tabmenu from "~/components/Tabmenu.vue";
import Me from "~/components/Me.vue";
import Skills from "~/components/Skills.vue";
import Works from "~/components/Works.vue";
import Posts from "~/components/Posts.vue";
import Photos from "~/components/Photos.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Top,
    Tabmenu,
    Me,
    Skills,
    Works,
    Posts,
    Photos,
    Footer
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
