<template>
  <section id="Me">
    <pageTitle title="About me" />
    <div>
      <div class="list">
        <ul>
          <li>
            <span>🏫</span>
            <span>北海道大学工学部情報エレクトロニクス学科生体情報コース</span>
          </li>
          <li>
            <span>🏐</span>
            <span>MATCH BOX</span>
          </li>
          <li>
            <span>🌎</span>
            <span>🇺🇸🇲🇾🇸🇬🇹🇭🇰🇭</span>
          </li>
          <li>
            <span>♨👨‍💻🏐⚾️🍸🍷🍴🧖‍♂️</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
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
}
</style>
