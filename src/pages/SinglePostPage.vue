<script>
import axios from "axios";
import AppProjectCard from "../components/AppProjectCard.vue";

export default {
  data() {
    return {
      project: null,
    };
  },
  created() {
    this.getProject();
  },
  components: { AppProjectCard },
  methods: {
    getProject() {
      axios
        .get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
        .then((res) => {
          if (res.data.success) {
            this.project = res.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 v-if="project != null" class="text-center">{{ project.title }}</h1>
      <div class="row justify-content-center">
        <AppProjectCard :product="project" class="card m-3 col-3" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
