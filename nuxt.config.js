require("dotenv").config();
import contentful from "~/plugins/contentful.js";
export default {
  mode: "universal",
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
        content: "もぎたかのりのポートフォリオサイトです。"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://manattan.me"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "もぎたかのりのポートフォリオサイトです。"
      },
      { name: "twitter:card", content: "summary" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["plugins/vueScrollTo", "plugins/contentful.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv", "@nuxtjs/vuetify"],

  generate: {
    routes() {
      return contentful
        .getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: `posts/${entry.fields.myWebSlug}`,
              payload: entry
            };
          });
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  }
};
