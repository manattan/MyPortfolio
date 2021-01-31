<template>
  <section id="Works" class="works-wrapper">
    <pageTitle title="Works" />
    <v-row justify="center">
      <v-col v-for="work in works" :key="work.link" cols="12" sm="6">
        <workBox :item="work" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import imgArcana from '../assets/imgArcana.png'
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
      imgArcana: imgArcana,
      works: [
        {
          name: "NPBscraper",
          time: "2021-01",
          content: "背番号の歴史をスクレイピング -> いい感じの文字列に変更 -> postgreSQL に保存",
          subContents: [{ name: "Python"}],
          github: [
            {
              url: "https://github.com/manattan/scraper-npb",
              name: "Entire Code"
            }
          ],
        },
        {
          name: "arcana",
          time: "2020-11",
          content: "JPhacks にて、牛乳などの残量を可視化できるデバイス&アプリケーションを作成しました。フロントエンドのロジック部分を担当しました。",
          subContents: [{ name: "Vue"},{name: "(FastAPI)"},{name: "(ESP32)"}],
          link: 'https://objective-ptolemy-33394b.netlify.app',
          github: [
            {
              url: "https://github.com/jphacks/A_2016",
              name: "Entire Code"
            }
          ],
          // img: '../../assets/imgArcana.png'
        },
        {
          name: "宇宙のつぶやき",
          time: "2020-10",
          content: "NASA 公式ハッカソン NASA International Space Apps Challengeにて、ISS を身近に感じることができるモバイルアプリを作成。仕様設計とフロントエンド少しに携わった。twitter 認証などの機能を実装した。完成しなかった。けど2つの賞を受賞した。swift 難しい。web 版も作成中。",
          subContents: [{ name: "React"},{ name: "Swift"},{name: "Express"}],
          link: "https://space.manattan.me",
          github: [
            {
              url: "https://github.com/manattan/tweet-from-space-web",
              name: "Web"
            },
            {
              url: "https://github.com/saco-2020/tweetfromspace-front",
              name: "IOS"
            },
            {
              url: "https://github.com/manattan/tweet-from-space-server",
              name: "Server"
            },
          ]
        },
        {
          name: "Rainhate",
          time: "2020-09",
          content:
            "OpenWeatherMapのAPIを定期的に叩いて、天気や風速のデータに基づいてTwitterの名前を変えていくやつです。APIの情報があまりあたらないのはご愛嬌()",
          subContents: [{ name: "Python" }],
          github: [
            {
              url: "https://github.com/manattan/Rainhate",
              name: "Server"
            }
          ]
        },
        {
          name: "TodoApp",
          time: "2020-07",
          content:
            "簡単なtodoアプリを作成しました（バグとか多いのでまだデプロイしてないです）。SPAでのログイン認証がまあまあ難しかった。レイアウトはまあまあよくできた。",
          subContents: [{ name: "Vue" }, { name: "Express" }],
          github: [
            {
              url: "https://github.com/manattan/todo-app/tree/master/frontend",
              name: "Client"
            },
            {
              url: "https://github.com/manattan/todo-app/tree/master/backend",
              name: "Server"
            }
          ]
        },
        {
          name: "My PortFolio Site",
          time: "2020-05",
          content:
            "このWebサイトです。Vueの知識を身につけるために色々やってみました。contentfulからブログ情報をjson形式で取り込んでいます。",
          subContents: [
            { name: "Nuxt" },
            { name: "Contentful" }
          ],
          link: "",
          github: [
            {
              url: "https://github.com/manattan/MyPortfolio",
              name: "Client"
            }
          ]
        },
        {
          name: "Mr. Schedule Adjustor",
          time: "2020-04",
          content:
            "イベントを作成して日程調整できるアプリケーションです。全然使い物にならないので今後使えるようにしたいです。N予備校のプログラミング教材を進めながら作りました。Herokuで公開しています。",
          subContents: [{ name: "Express" }],
          link: "https://afternoon-inlet-59661.herokuapp.com/",
          github: [
            {
              url: "https://github.com/manattan/Mr.-Schedule-Adjuster",
              name: "Server"
            }
          ]
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
