<!-- This template contains a form for submitting contact information and a message. -->
<template>
  <div
    class="m-5 rounded border p-2 w-75 self-center mx-auto"
    style="border-color: lightslategray; background-color: rgba(250, 235, 215, 0.384)"
  >
    <!-- Form for submitting contact information -->
    <form @submit.prevent="submitForm">
      <!-- Email input field -->
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
          >This email will not be shared with third parties.</small
        >
      </div>
      <!-- Name input field -->
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
      <!-- Message textarea -->
      <div class="form-group mb-3">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          v-model="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <!-- Privacy checkbox -->
      <div class="form-group form-check mb-3">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="privacyAccepted"
          required
        />
        <label class="form-check-label" for="exampleCheck1">Accept Privacy Policy</label>
      </div>
      <!-- Submit button -->
      <button type="submit" class="btn btn-outline-dark">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    // Method to handle form submission
    submitForm() {
      // Add logic to handle form submission here ...
      alert('Anfrage erfolgreich übermittelt.')
    }
  },
  data() {
    // Data properties for form fields
    return {
      email: '',
      name: '',
      message: '',
      privacyAccepted: false
    };
  }
}
</script>

