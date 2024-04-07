<template>
  <!-- The container for the entire component -->
  <div class="button-container">
    <!-- Left section containing text information -->
    <div>
      <!-- Title of the component -->
      <h2 class="h2">{{ title }}</h2>
      <!-- Information about the charity -->
      <p>{{ info }}</p>
      <!-- Section for displaying the donation amount -->
      <div class="number-section">
        <!-- Big and bold donation amount -->
        <p class="big-number">{{ amount }} €</p>
      </div>
    </div>
    <!-- Right section containing the charity image -->
    <div>
      <!-- Image representing the charity -->
      <img class="charity-img" :src="imageP">
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // The title of the charity
    title: String,
    // The amount of donation
    amount: Number,
    // Information about the charity
    info: String,
    // URL of the charity image
    imageP: String
  }  
})
</script>
<style>
/* Styling for the big donation amount */
.big-number {
  font-weight: bold;
  font-size: 120px;
  color: rgb(210, 184, 157);
}

/* Styling for the charity image */
.charity-img{
    width: 600px;
    height: 500px;
    object-fit: cover;
}

/* Alignment for the number section */
.number-section{
    text-align: left;
}
</style>
