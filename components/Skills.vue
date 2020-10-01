<template>
  <section id="Skills">
    <pageTitle title="Skills" />
    <div class="Skills">
      <v-row justify="center"
          class="skill"
          v-for="(skill, index) in skills"
          :key="index">
  {{ skill.name }}: {{skill.text}}
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
        {name:"html/css",text:"cssのアニメーションはよく分かりません"},
        {name:"Vue/Nuxt",text:"基礎的な部分はほぼ実装できます。"},
        {name:"React",text:"チュートリアルを触ったことがあるぐらいです。"},
        {name:"Node.js",text:"postgreSQLとつなげて簡単なアプリケーションを制作しました。"},
        {name:"TypeScript",text:"Nuxtと共に使っています。"},
        {name:"Python",text:"数値計算&グラフ化に用いたり、TwitterAPIを用いて簡単なアプリケーションを制作しました。"},
        {name:"Firebase",text:"Firestoreとstorageは使えます。デプロイとかしたことない."}
      ]
    };
  }
};
</script>

<style scoped>
.Skills {
  margin: 0 auto;
  max-width:750px
}
.skill {
  margin:0 auto;
  padding-top:10px
}
</style>
