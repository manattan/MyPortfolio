import Vue from "vue";
import vueScrollTo from "vue-scrollto";

Vue.use(vueScrollTo, {
  duration: 1500,
  easing: [0, 0, 0.1, 1],
  offset: -100
});
