<script>
import axios from "axios";

export default {
  data() {
    return {
      mainTitle: "This is the index page!",
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-center">{{ mainTitle }}</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
