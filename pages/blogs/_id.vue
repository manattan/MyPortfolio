<template>
  <v-container id="_id">
    <div id="blogHeader">
      <div>
        <nuxt-link to="/">
          <img id="myImage" src="~/assets/myImage.png" />
        </nuxt-link>
      </div>
      <h2>もぎのブログ</h2>
    </div>
    <div id="blogContent">
      <h1 id="blogTitle">{{ post.fields.myWebTitle }}</h1>
      <p id="blogSummary">{{ post.fields.summary }}</p>
      <a id="createdAt">Updated: {{ formatDate(post.sys.updatedAt) }}</a>
      <div id="sharebuttons">
        <a
          class="LINE_share"
          :href="
              `https://social-plugins.line.me/lineit/share?url=https://blog.manattan.me/blogs/${post.fields.myWebSlug}&text=${post.fields.myWebTitle}`
            "
          target="_blank"
        >
          <img src="~/assets/LINE.png" class="sharebutton" />
        </a>
        <a
          class="FB_share"
          :href="
              `https://www.facebook.com/sharer/sharer.php?u=https://blog.manattan.me/blogs/${post.fields.myWebSlug}`
            "
          target="_blank"
        >
          <img src="~/assets/Facebook.png" class="sharebutton" />
        </a>
        <a
          class="Twitter_share"
          :href="
              `https://twitter.com/share?url=https://blog.manattan.me/blogs/${post.fields.myWebSlug}&text=${post.fields.myWebTitle}`
            "
          target="_blank"
        >
          <img src="~/assets/Twitter.png" class="sharebutton" />
        </a>
      </div>
      <div class="postBody" v-html="md.render(post.fields.body)"></div>
    </div>
    <div class="toHome">
      <nuxt-link to="/" style="text-decoration:none">
        <span>Home</span>
      </nuxt-link>
    </div>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "~/components/Footer.vue";
import contentful from "~/plugins/contentful.js";
import md from "~/plugins/markdownit.js";

export default {
  components: {
    Footer
  },
  data() {
    return {
      md: ""
    };
  },
  created() {
    this.md = md;
  },

  async asyncData({ params }) {
    return await contentful
      .getEntries({
        content_type: "myWebBlog",
        "fields.myWebSlug": params.id
      })
      .then(e => {
        return {
          post: e.items[0]
        };
      });
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

<style >
#_id {
  width: 70%;
  font-family: Fira Sans, sans-serif;
  overflow: hidden;
}

#blogHeader {
  text-align: center;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 2px dashed #ddd;
}
#myImage {
  margin-bottom: 10px;
  width: 100px;
  border-radius: 100%;
}

#blogTitle {
  text-align: center;
}

#blogSummary {
  font-weight: normal;
  text-align: center;
}

#sharebuttons {
  text-align: right;
}

.sharebutton {
  width: 30px;
  margin: 5px;
}

.postBody {
  max-width: 800px;
  margin: 1px auto;
}

/* ここからpostBody */
.postBody > h2,
.table-of-contents > h2 {
  background: rgb(248, 247, 244);
  border-left: solid 5px orchid;
  color: black;
  margin: 15px 0;
  padding-left: 10px;
}
.postBody > h3,
.postBody > h4,
.postBody > h5 {
  margin: 15px 0 10px 5px;
  font-weight: bold;
}

.postBody > p {
  line-height: 1.8;
  padding: 0 10px;
}

.postBody > p > a {
  color: black;
  font-size: bold;
  text-decoration: none;
}

.table-of-contents > ul {
  padding-left: -1rem;
}

.table-of-contents > ul > li > a {
  text-decoration: none;
  color: black;
  border-bottom: 2px dotted orchid;
  margin-left: 1rem;
}

.table-of-contents > a:hover {
  color: orchid;
}

.table-of-contents > ul li::before {
  content: "\FF65";
  color: orchid;
  font-weight: bold;
  display: inline-block;
  width: 1rem;
  margin-left: -1rem;
}

.table-of-contents > li li::before {
  content: "\25E6";
  color: orchid;
  display: inline-block;
}

.toHome {
  margin-top: 20px;
  text-align: center;
}

@media (max-width: 500px) {
  #_id {
    width: 95%;
  }
}
</style>
