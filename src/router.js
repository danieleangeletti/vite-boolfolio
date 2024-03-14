import { createRouter, createWebHistory } from "vue-router";
import IndexPageVue from "./pages/IndexPage.vue";
import PostsPageVue from "./pages/PostsPage.vue";
import SinglePostPageVue from "./pages/SinglePostPage.vue";

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
    {
      path: "/blog/:slug",
      name: "projects.show",
      component: SinglePostPageVue,
    },
  ],
});

export { router };
