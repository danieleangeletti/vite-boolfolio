<script>
import axios from "axios";
import AppProjectCard from "../components/AppProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: 1,
    };
  },
  created() {
    this.getProjects(this.currentPage);
  },
  components: { AppProjectCard },
  methods: {
    getProjects(page) {
      axios
        .get("http://127.0.0.1:8000/api/projects", {
          params: {
            page: page,
          },
        })
        .then((res) => {
          this.projects = res.data.results.data;

          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.getProjects(this.currentPage + 1);
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.getProjects(this.currentPage - 1);
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-center">ALL PROJECTS</h1>
      <h3>Current page: {{ currentPage }} - Last page: {{ lastPage }}</h3>
      <div class="row justify-content-center">
        <AppProjectCard
          v-for="(project, i) in projects"
          :key="i"
          :product="project"
          class="card m-3 col-3"
        />
        <div class="d-flex justify-content-between">
          <button @click="previousPage()" type="button" class="btn btn-warning">
            PREVIOUS PAGE
          </button>
          <button @click="nextPage()" type="button" class="btn btn-warning">
            NEXT PAGE
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
