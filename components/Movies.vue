<template>
  <section id="Movies">
    <pageTitle title="Movies" />
    <v-row justify="center" class="movie">
      <v-col v-for="(movie, i) in movies" :key="i" sm="6" md="4">
        <movieBox :movie="movie" :num="i" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import pageTitle from "@/components/templates/pageTitle";
import movieBox from "@/components/templates/movieBox";

export default {
  name: "Movies",
  components: {
    pageTitle,
    movieBox
  },
  props: {
    movies: {
      type: Array
    }
  }
};
</script>

<style scoped>
.movie {
  margin: 0 auto;
}
</style>
