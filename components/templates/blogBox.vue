<template>
  <div id="blogBox">
    <v-card max-width="400" class="mx-auto card">
      <nuxt-link :to="href" class="text">
        <v-card-title
          ><p>{{ title }}</p></v-card-title
        >
      </nuxt-link>
      <v-card-subtitle
        ><p>created: {{ formatDate(date) }}</p></v-card-subtitle
      >

      <v-card-text class="summary"
        ><p>{{ summary }}</p></v-card-text
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "blogBox",
  data() {
    return {
      href: `/blogs/${this.slug}`,
    };
  },
  props: {
    slug: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}.${mm}.${dd}`;
    },
  },
};
</script>

<style scoped>
#blogBox {
  font-weight: normal;
  text-decoration: none !important;
}
.card {
  margin: 0 auto;
  text-decoration: none !important;
}

.text {
  text-decoration: none;
}
</style>
