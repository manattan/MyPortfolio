<template>
  <v-col id="Me">
    <pageTitle title="About Me" />
    <div>
      <div class="list">
        <ul>
          <li>
            <p>2015.04 - 2018.03</p>
            <div class="el">
              <span>🏫</span>
              <span>札幌南高校</span>
            </div>
          </li>
          <li>
            <p>2018.04 - 2019.04 -</p>
            <div class="el">
              <span>🏫</span>
              <span>北海道大学工学部情報エレクトロニクス学科生体情報コース</span>
            </div>
          </li>
          <li>
            <p>2018.04 -</p>
            <div class="el">
              <span>🏐</span>
              <span>MATCH BOX</span>
            </div>
          </li>
          <li>
            <p>2019.12 - 2020.01</p>
            <div class="el">
              <span>🇰🇭</span>
              <span>海外ラーニングプログラム「breath」</span>
            </div>
          </li>
          <li>
            <p>2020.04 -</p>
            <div class="el">
              <span>👨‍💻</span>
              <span>北大IT研究会 HUIT</span>
            </div>
          </li>
          <li>
            <p>2020.07 -</p>
            <div class="el">
              <span>🏢</span>
              <span>Sapporo Incubation Hub DRIVE 学生staff</span>
            </div>
          </li>
          <li>
            <p>2020.08 -</p>
            <div class="el">
              <span>👨‍💻</span>
              <span>Contrea株式会社インターンシップ(フロントエンドエンジニア)
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </v-col>
</template>
<script>
import pageTitle from "@/components/templates/pageTitle";
export default {
  name: "Me",
  components: {
    pageTitle
  }
};
</script>

<style scoped>
section {
  margin: 0 auto;
}
.list {
  max-width: 500px;
  margin: 0 auto;
}

ul {
  padding: 0 10px;
  margin: 0;
}
li {
  list-style: none;
  margin-bottom: 10px;
}

p {
  font-size: 80%;
}
.el {
  padding-left: 1rem;
}
</style>
