<script>
import axios from "axios";

export default {
  data() {
    return {
      mainTitle: "HI GUYS!",
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

<style lang="scss" scoped>
h1 {
  margin: 100px 0;
}
</style>
