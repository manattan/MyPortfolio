<template>
  <v-container id="Blogs">
    <pageTitle title="Blogs" />
    <v-row justify="center">
      <v-col v-for="(post, index) in posts" :key="index">
        <blogBox
          class="blog"
          :slug="post.fields.myWebSlug"
          :id="post.sys.id"
          :title="post.fields.myWebTitle"
          :summary="post.fields.summary"
          :date="post.sys.updatedAt"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pageTitle from "@/components/templates/pageTitle";
import blogBox from "@/components/templates/blogBox.vue";

export default {
  name: "Blogs",
  components: {
    pageTitle,
    blogBox
  },
  props: ["posts"]
};
</script>

<style scoped></style>
