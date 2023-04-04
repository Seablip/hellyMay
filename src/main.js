import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store/";
// import ajax from "./config/ajax";
import "./style/common";
import "./config/rem";

Vue.use(VueRouter);
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
});
