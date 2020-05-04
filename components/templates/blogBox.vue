<template>
  <div id="blogBox">
    <nuxt-link :to="href">
      <v-card class="mx-auto" max-width="400" tile>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle>updated:{{ date }}</v-card-subtitle>

        <v-card-text>{{ summary }} </v-card-text>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "blogBox",
  data() {
    return {
      href: `/blogs/${this.slug}`
    };
  },
  props: {
    slug: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    summary: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.mx-auto {
  margin: 10px auto;
  border-radius: 20px;
}

#blogBox {
  font-weight: normal;
}
</style>
