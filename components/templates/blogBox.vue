<template>
  <div id="blogBox">
    <nuxt-link :to="href">
      <v-card class="mx-auto" max-width="400" tile>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle>updated:{{ formatDate(date) }}</v-card-subtitle>

        <v-card-text class="summary">{{ summary }} </v-card-text>
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
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}.${mm}.${dd}`;
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

.summary {
  text-decoration: none;
}
</style>
