<template>
  <section id="Works" class="works-wrapper">
    <pageTitle title="Works" />
    <v-row justify="center">
      <v-col v-for="work in works" :key="work.link">
        <workBox :item="work" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import pageTitle from "@/components/templates/pageTitle";
import workBox from "@/components/templates/workBox";
export default {
  name: "Works",
  components: {
    pageTitle,
    workBox
  },
  data() {
    return {
      works: [
        {
          name: "My PortFolio Site",
          time: "2020-05",
          content:
            "このWebサイトです。Vueの知識を身につけるために色々やってみました(反映されていない可能性あり)。contentfulからブログ情報をjson形式で取り込んでいます。",
          subContents: [
            { name: "Vue.js" },
            { name: "Nuxt.js" },
            { name: "Contentful" }
          ],
          link: "",
          github: ""
        },
        {
          name: "Mr. Schedule Adjustor",
          time: "2020-04",
          content:
            "イベントを作成して日程調整できるアプリケーションです。全然使い物にならないので今後使えるようにしたいです。N予備校のプログラミング教材を進めながら作りました。サーバーやExpressの勉強になりました。Herokuで公開しています。",
          subContents: [{ name: "Node.js" }, { name: "Express" }],
          link: "https://afternoon-inlet-59661.herokuapp.com/",
          github: "https://github.com/manattan/Mr.-Schedule-Adjuster"
        }
      ]
    };
  }
};
</script>

<style scoped>
#Works {
  margin: 0 auto;
}
</style>
