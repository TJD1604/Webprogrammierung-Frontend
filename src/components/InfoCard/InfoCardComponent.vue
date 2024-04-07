<!-- This template defines a flip card component with a front and back face. -->
<template>
  <div class="flip-card" @mouseenter="flipCard(true)" @mouseleave="flipCard(false)">
    <!-- Inner part of the flip card -->
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <!-- Front face of the flip card -->
      <div class="flip-card-front">
        <div class="content">
          <!-- Slot for front face content -->
          <slot name="front"></slot>
        </div>
      </div>
      <!-- Back face of the flip card -->
      <div class="flip-card-back">
        <div class="content">
          <!-- Slot for back face content -->
          <slot name="back"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './InfoCardComponent.css';
export default {
  data() {
    // State variable to track flip card status
    return {
      isFlipped: false
    };
  },
  methods: {
    // Method to flip the card
    flipCard(status) {
      this.isFlipped = status;
    }
  }
};
</script>
