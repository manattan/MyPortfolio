<template>
  <section id="Skills">
    <pageTitle title="Skills" />
    <div class="Skills">
      <v-row>
        <v-col
          justify="center"
          class="skill"
          v-for="(skill, index) in skills"
          :key="index"
          xs="2"
          sm="6"
          md="4"
        >{{ skill.name }}</v-col>
      </v-row>
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
        { name: "heroku" },
        { name: "hubot" },
        { name: "postgreSQL" }
      ]
    };
  }
};
</script>

<style scoped>
.Skills {
  margin: 0 auto;
  font-size: 110%;
}
.skill {
  text-align: center;
}
</style>
