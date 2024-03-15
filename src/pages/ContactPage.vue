<script>
import axios from "axios";

export default {
  data() {
    return {
      mainTitle: "CONTACT PAGE",
      name: "",
      email: "",
      message: "",
      accepted: false,
    };
  },
  methods: {
    sendMessage() {
      axios
        .post("http://127.0.0.1:8000/api/contacts", {
          name: this.name,
          email: this.email,
          message: this.message,
          accepted: this.accepted,
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-center mt-1 mb-1">{{ mainTitle }}</h1>
      <form class="mb-3" method="POST" @submit.prevent="sendMessage()">
        <div class="mb-3">
          <label for="name" class="form-label">Name<span>*</span></label>
          <input
            v-model="name"
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
            v-model="email"
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
            v-model="message"
            class="form-control"
            id="message"
            name="message"
            placeholder="Insert message"
            required
          ></textarea>
        </div>
        <div class="mb-3 form-check">
          <input
            v-model="accepted"
            type="checkbox"
            class="form-check-input"
            id="accept"
            name="accept"
            value="1"
            required
          />
          <label class="form-check-label" for="accept"
            ><span>*</span>I have read and accept the
            <a href="#" target="_blank">terms of use</a> and the
            <a href="#" target="_blank">privacy policy</a></label
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
