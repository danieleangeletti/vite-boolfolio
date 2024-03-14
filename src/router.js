import { createRouter, createWebHistory } from "vue-router";
import IndexPageVue from "./pages/IndexPage.vue";
import PostsPageVue from "./pages/PostsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexPageVue,
    },
    {
      path: "/blog",
      name: "projects.index",
      component: PostsPageVue,
    },
  ],
});

export { router };
