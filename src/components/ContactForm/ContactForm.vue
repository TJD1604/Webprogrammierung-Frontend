<template>
    <div
      class="m-5 rounded border p-2 w-75 self-center mx-auto"
      style="border-color: lightslategray; background-color: rgba(250, 235, 215, 0.384)"
    >
      <form @submit.prevent="submitForm">
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            required
          />
          <small id="emailHelp" class="form-text text-muted"
            >Diese Email wird nicht an Dritte weitergegeben.</small
          >
        </div>
        <div class="form-group mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="message">Nachricht</label>
          <textarea
            class="form-control"
            id="message"
            v-model="message"
            placeholder="Nachricht"
            required
          ></textarea>
        </div>
        <div class="form-group form-check mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            v-model="privacyAccepted"
            required
          />
          <label class="form-check-label" for="exampleCheck1">Datenschutz akzeptieren</label>
        </div>
        <button type="submit" class="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  export default {
  }
  </script>
  
  <style scoped>

  </style>
  