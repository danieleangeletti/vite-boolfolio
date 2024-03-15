<script>
import axios from "axios";

export default {
  data() {
    return {
      mainTitle: "CONTACT PAGE",
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-center mt-1 mb-1">{{ mainTitle }}</h1>
      <form class="mb-3">
        <div class="mb-3">
          <label for="name" class="form-label">Name<span>*</span></label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Insert name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label"
            >Email address<span>*</span></label
          >
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message<span>*</span></label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            placeholder="Insert message"
            required
          ></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out<span>*</span></label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div class="mt-3 mb-3">
          All fields marked with<span> * </span>are mandatory
        </div>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
span {
  color: red;
}
</style>
