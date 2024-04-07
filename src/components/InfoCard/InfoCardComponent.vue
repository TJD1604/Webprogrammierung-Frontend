<template>
  <!-- Flip card component -->
  <div class="flip-card" @mouseenter="flipCard(true)" @mouseleave="flipCard(false)">
    <!-- Flip card inner -->
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <!-- Front side of the card -->
      <div class="flip-card-front">
        <div class="content">
          <!-- Slot for front content -->
          <slot name="front"></slot>
        </div>
      </div>
      <!-- Back side of the card -->
      <div class="flip-card-back">
        <div class="content">
          <!-- Slot for back content -->
          <slot name="back"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Data property to track card flip state
    return {
      isFlipped: false
    };
  },
  methods: {
    // Method to toggle card flip state
    flipCard(status) {
      this.isFlipped = status;
    }
  }
};
</script>

<style scoped>
/* Styling for flip card */
.flip-card {
  perspective: 1000px; /* Perspective for 3D effect */
  width: 200px; /* Width of the card */
  height: 300px; /* Height of the card */
}

/* Styling for flip card inner */
.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s; /* Smooth transition */
  transform-style: preserve-3d; /* Preserve 3D effect */
  border: 1px solid #ccc; /* Add border */
  border-radius: 10px; /* Rounded corners */
}

/* Styling for flip card on hover */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg); /* Rotate on hover */
}

/* Styling for front and back sides of the card */
.flip-card-front,
.flip-card-back {
  position: absolute; /* Positioning */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  backface-visibility: hidden; /* Hide back side */
  display: flex; /* Flex display */
  border-radius: 10px; /* Rounded corners */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

/* Styling for content inside the card */
.content {
  text-align: center; /* Center content */
}

/* Styling for front side of the card */
.flip-card-front {
  background-color: #fff; /* White background */
}

/* Styling for back side of the card */
.flip-card-back {
  background-color: rgb(224, 204, 180); /* Background color */
  color: white; /* Text color */
  transform: rotateY(180deg); /* Initial rotation */
}
</style>
