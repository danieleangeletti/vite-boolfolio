<script>
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
  <div>
    <div class="card-body">
      <h5 class="card-title">{{ product.id }}) {{ product.title }}</h5>
      <p class="card-text">
        {{ product.content }}
      </p>
      <div v-if="product.cover_img != null">
        <img
          :src="'http://127.0.0.1:8000/storage/' + product.cover_img"
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
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
