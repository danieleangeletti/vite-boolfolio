import { createRouter, createWebHistory } from "vue-router";
import IndexPageVue from "./pages/IndexPage.vue";
import PostsPageVue from "./pages/PostsPage.vue";
import SinglePostPageVue from "./pages/SinglePostPage.vue";
import NotFoundPageVue from "./pages/NotFoundPage.vue";
import ContactPageVue from "./pages/ContactPage.vue";

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
    {
      path: "/contact",
      name: "contact",
      component: ContactPageVue,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPageVue,
    },
  ],
});

export { router };
