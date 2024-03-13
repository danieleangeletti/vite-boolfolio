<script>
import axios from "axios";

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
        <div
          v-for="project in projects"
          :key="project.id"
          class="card m-3 col-3"
        >
          <div class="card-body">
            <h5 class="card-title">{{ project.id }}) {{ project.title }}</h5>
            <p class="card-text">
              {{ project.content }}
            </p>
            <div v-if="project.cover_img != null">
              <img
                :src="'http://127.0.0.1:8000/storage/' + project.cover_img"
                :alt="project.title"
                class="card-img-top"
              />
            </div>
            <hr />
            <p>Type:</p>
            <p class="card-text">{{ project.type.title }}</p>
            <hr />
            <p>Technologies:</p>
            <ul>
              <li
                v-for="technology in project.technologies"
                :key="technology.id"
              >
                {{ technology.title }}
              </li>
            </ul>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
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
