import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/main",
    name: "Main",
    component: () => import(/* webpackChunkName: "map" */ "../views/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
