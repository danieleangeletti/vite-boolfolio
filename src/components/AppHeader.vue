<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header class="bg-success bg-opacity-25">
    <div class="container">
      <div class="navbar">
        <ul class="p-0 mb-0">
          <li class="d-inline-block p-2 bg-primary ms-1 me-1 rounded-pill">
            <RouterLink
              :to="{ name: 'home' }"
              class="text-decoration-none text-white p-2"
            >
              HOME
            </RouterLink>
          </li>
          <li class="d-inline-block p-2 bg-primary ms-1 me-1 rounded-pill">
            <RouterLink
              :to="{ name: 'projects.index' }"
              class="text-decoration-none text-white p-2"
            >
              PROJECTS
            </RouterLink>
          </li>
          <li class="d-inline-block p-2 bg-primary ms-1 me-1 rounded-pill">
            <RouterLink
              :to="{ name: 'contact' }"
              class="text-decoration-none text-white p-2"
            >
              CONTACT
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  height: 10vh;
}
</style>
