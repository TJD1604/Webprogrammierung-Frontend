<template>
  <!-- Card component -->
  <div class="card">
    <!-- Card content -->
    <div class="card-content">
      <!-- Headline -->
      <h3 class="card-name">{{ headline }}</h3>
      <!-- Description -->
      <p><i>Was?</i><br> {{ description }}</p>
      <!-- Timeframe -->
      <p class="time"><i>Wann?</i><br> {{ timeframe }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Props for receiving data from parent component
  props: {
    headline: String,
    description: String,
    timeframe: String
  }
};
</script>

<style scoped>
/* Styling for the card */
.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  height: auto;
  border: 2px solid rgb(210, 184, 157);
}

/* Styling for the card content */
.card-content {
  padding: 20px;
  align-self: center;
  justify-self: center;
}
</style>
