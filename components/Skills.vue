<template>
  <section id="Skills">
    <pageTitle title="Skills" />
    <div class="Skills">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">{{ skill.name }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import pageTitle from "@/components/templates/pageTitle";
export default {
  name: "Skills",
  components: {
    pageTitle
  },
  data() {
    return {
      skills: [
        { name: "JavaScript (ES6)" },
        { name: "Node.js/Express" },
        { name: "Vue.js / Nuxt.js" },
        { name: "GitHub" },
        { name: "vagrant" },
        { name: "heroku" },
        { name: "Circle CI" },
        { name: "hubot" },
        { name: "postgresSQL" }
      ]
    };
  }
};
</script>

<style scoped>
.Skills {
  width: 600px;
  margin: 0 auto;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 200px);
}

li {
  padding: 8px 0;
}

@media (max-width: 780px) {
  .Skills {
    width: 360px;
  }

  ul {
    grid-template-columns: repeat(2, 180px);
  }
}
</style>
