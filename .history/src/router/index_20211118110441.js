import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/map",
    name: "Map",
    component: () => import(/* webpackChunkName: "map" */ "../views/Map.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
