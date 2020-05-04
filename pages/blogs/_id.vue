<template>
  <v-container id="_id">
    <div>
      <div id="blogHeader">
        <div>
          <img id="myImage" src="~/assets/myImage.png" />
        </div>
        <h2>もぎのブログ</h2>
      </div>
      <div id="blogContent">
        <h1 id="blogTitle">{{ post.fields.myWebTitle }}</h1>
        <p id="blogSummary">{{ post.fields.summary }}</p>
        <a id="createdAt">Updated: {{ post.sys.updatedAt }}</a>
        <div id="sharebuttons">
          <a
            class="LINE_share"
            :href="
              `https://social-plugins.line.me/lineit/share?url=https://manattan.me/blogs/${post.fields.myWebSlug}&text=${post.fields.myWebTitle}`
            "
            target="_blank"
          >
            <img src="~/assets/LINE.png" class="sharebutton" />
          </a>
          <a
            class="FB_share"
            :href="
              `https://www.facebook.com/sharer/sharer.php?u=https://manattan.me/blogs/${post.fields.myWebSlug}`
            "
            target="_blank"
          >
            <img src="~/assets/Facebook.png" class="sharebutton" />
          </a>
          <a
            class="Twitter_share"
            :href="
              `https://twitter.com/share?url=https://manattan.me/blogs/${post.fields.myWebSlug}&text=${post.fields.myWebTitle}`
            "
            target="_blank"
          >
            <img src="~/assets/Twitter.png" class="sharebutton" />
          </a>
        </div>
        <vue-markdown id="body">{{ post.fields.body }}</vue-markdown>
      </div>
      <nuxt-link to="/" class="toHome">
        <p>Home</p>
      </nuxt-link>
      <Footer />
    </div>
  </v-container>
</template>

<script>
import Footer from "~/components/Footer.vue";
import contentful from "~/plugins/contentful.js";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    Footer,
    VueMarkdown
  },

  // head() {
  //   return {
  //     title: this.post.fields.myWebTitle,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.post.fields.summary
  //       },
  //       {
  //         hid: "og:title",
  //         property: "og:title",
  //         content: this.post.fields.myWebTitle
  //       },
  //       {
  //         hid: "og:image",
  //         property: "og:image",
  //         content: this.post.fields.thumbnail.fields.file.url
  //       },
  //       {
  //         hid: "og:description",
  //         property: "og:description",
  //         content: this.post.fields.summary
  //       }
  //     ]
  //   };
  // },

  async asyncData({ params }) {
    return await contentful
      .getEntries({
        content_type: "myWebBlog",
        "fields.myWebSlug": params.id
      })
      .then(e => {
        console.log(e.items[0]);
        return {
          post: e.items[0]
        };
      });
  }
};
</script>

<style scoped>
#_id {
  width: 80%;
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

#body {
  width: 70%;
  margin: 0 auto;
}

.toHome {
  text-decoration: none;
}

p {
  text-align: center;
  margin: 20px 0;
}

@media (max-width: 500px) {
  #_id {
    width: 90%;
  }
  #body {
    width: 100%;
  }
}
</style>
