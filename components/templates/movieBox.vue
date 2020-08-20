<template>
  <div class="movieBox">
    <div class="movieImg">
      <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" />
    </div>
    <div class="movieTitle">
      <h3>{{ movie.title }}</h3>
    </div>
    <div class="movieRelease">
      <p>release: {{ formatDate(movie.release_date) }}</p>
    </div>
    <div class="movieComment" v-if="comments[num]">
      <p>{{ comments[num].comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieCard",
  props: {
    movie: {
      type: Object
    },
    num: {
      type: Number
    }
  },
  data() {
    return {
      comments: [
        {
          comment: ""
        },
        {
          comment:
            "パーカー君がオススメしてたので観た。スラム街の怖さを感じた（一昔前だけど）。"
        },
        {
          comment: "ガチでどんな話かわからなかったので誰か見て"
        },
        {
          comment: "こんな恋愛したい"
        },
        {
          comment: ""
        },
        {
          comment: "主人公イケメン"
        },

        {
          comment:
            "齋藤飛鳥可愛いので2回見ました。正直最後は急展開するとこ否めなかったけど、よし。日本の恋愛映画とは結構違っていて、環境によって恋愛の感性は変化するんだろうなと感じた。"
        },

        {
          comment: "盲目になっても生きれそう()"

        },
        {
          comment:"21歳で初めてみていろいろ思うところがあった。"
        }
      ]
    };
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      return `${yyyy}`;
    }
  }
};
</script>

<style scoped>
.movieBox {
  max-width: 300px;
  margin: 5px auto;
  border: 2px solid #aaa;
  border-radius: 10px;
}
.movieImg {
  margin-top: 15px;
  text-align: center;
}

.movieTitle {
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
}

.movieRelease {
  margin-left: 20px;
}

.movieComment {
  margin: 10px;
  font-size: 80%;
}
</style>
