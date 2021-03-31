<template>
  <section class="link">
    <div class="list">
      <ul>
        <li>
          <nuxt-link class="tab" v-scroll-to="'#Works'" to>Works</nuxt-link>
        </li>
        <li>
          <nuxt-link class="tab" v-scroll-to="'#Blogs'" to>Blogs</nuxt-link>
        </li>
        <li>
          <a href="https://twitter.com/manattan_me" target="_blank" class="tab"
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="https://www.facebook.com/takanori.mogi"
            target="_blank"
            class="tab"
            >Facebook</a
          >
        </li>
        <li>
          <a href="https://github.com/manattan" target="_blank" class="tab"
            >Github</a
          >
        </li>
        <li>
          <a
            href="https://www.wantedly.com/id/takanori_mogi"
            target="_blank"
            class="tab"
            >Wantedly</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tabmenu",
};
</script>
<style scoped>
section {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.list {
  margin: 0 auto;
}

ul {
  margin-top: 3px;
  list-style: none;
  padding: 0 20px;
}

li {
  line-height: 1.8;
  margin-bottom: 4px;
  display: inline-block;
}

.tab {
  text-decoration: none;
}
</style>
