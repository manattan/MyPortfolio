require("dotenv").config();

const client = require("./plugins/contentful.js");

module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "もぎたかのりのポートフォリオサイトです。",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "blog.manattan.me",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "もぎたかのりのポートフォリオサイトです。",
      },
      { name: "twitter:card", content: "summary" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "orchid" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vueScrollTo", "~/plugins/markdownit"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv", "@nuxtjs/vuetify", "@nuxtjs/axios"],

  generate: {
    routes() {
      return client.getEntries({ content_type: "myWebBlog" }).then((posts) => {
        return posts.items.map((post) => {
          return {
            route: `blogs/${post.fields.myWebSlug}`,
            payload: post,
          };
        });
      });
    },
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    TMDB_APIKEY: process.env.TMDB_APIKEY,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
