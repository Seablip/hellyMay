import VueRouter from "vue-router";
import App from "../App.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "",
          component: (r) => {
            require.ensure(
              [],
              () => {
                r(require("../page/home"));
              },
              "home"
            );
          }
        },
        {
          path: "/item",
          component: (r) => {
            require.ensure(
              [],
              () => {
                r(require("../page/item"));
              },
              "item"
            );
          }
        },
        {
          path: "/score",
          component: (r) => {
            require.ensure(
              [],
              () => {
                r(require("../page/score"));
              },
              "score"
            );
          }
        }
      ]
    }
  ]
});
export default router;
