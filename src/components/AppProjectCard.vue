<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  props: {
    product: Object,
  },
};
</script>

<template>
  <div v-if="product != null">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.content }}
      </p>
      <div v-if="product.full_cover_img != null">
        <img
          :src="product.full_cover_img"
          :alt="product.title"
          class="card-img-top"
        />
      </div>
      <hr />
      <p>Type:</p>
      <p class="card-text">{{ product.type.title }}</p>
      <hr />
      <p>Technologies:</p>
      <ul>
        <li v-for="technology in product.technologies" :key="technology.id">
          {{ technology.title }}
        </li>
      </ul>
      <RouterLink
        :to="{ name: 'projects.show', params: { slug: product.slug } }"
        class="text-decoration-none text-white p-2 bg-primary rounded-pill"
        >SHOW PROJECT</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
