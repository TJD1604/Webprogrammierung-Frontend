<template>
  <!-- Custom button component -->
  <div class="custom-button" @click="navigate" @mouseover="zoomIn" @mouseleave="zoomOut">
    <div class="button-content">
      <!-- Button image -->
      <img :src="imagePath" class="button-image" />
      <div class="shadow"></div>
      <!-- Button text and arrow -->
      <div class="button-text">{{ buttonText }}</div>
      <div class="arrow" @mouseover="changeBackground" @mouseleave="resetBackground">&#10140;</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    // Text displayed on the button
    buttonText: String,
    // Path to the button image
    imagePath: String,
    // Destination URL when button is clicked
    destination: String 
  },
  methods: {
    // Method to zoom in on button image on mouseover
    zoomIn(event) {
      event.currentTarget.querySelector('.button-image').style.transform = 'scale(1.1)';
    },
    // Method to zoom out on button image on mouseleave
    zoomOut(event) {
      event.currentTarget.querySelector('.button-image').style.transform = 'scale(1)';
    },
    // Method to navigate to destination URL
    navigate() {
      if (this.destination) {
        this.$router.push(this.destination);
      } else {
        console.error('Destination page not defined');
      }
    },
    // Method to change background color of arrow on mouseover
    changeBackground(event) {
      event.target.classList.add('hovered');
    },
    // Method to reset background color of arrow on mouseleave
    resetBackground(event) {
      event.target.classList.remove('hovered');
    }
  }
}
</script>

<style scoped>
/* Styling for the custom button */
.custom-button {
  border-radius: 20px;
  overflow: hidden;
  height: 250px;
  width: 250px;
  cursor: pointer;
}

/* Styling for the content within the button */
.button-content {
  position: relative;
  height: 100%;
}

/* Styling for the button image */
.button-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Styling for the button text */
.button-text {
  position: absolute;
  bottom: 5px;
  left: 10px;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
}

/* Styling for the arrow icon */
.arrow {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  font-family: Lucida Sans;
  cursor: pointer;
}

/* Styling for the arrow on hover */
.arrow:hover {
  background-color: rgba(210, 184, 157, 0.5);
  border-radius: 10px;
}

/* Styling for the shadow below the button */
.shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px; /* Height of the shadow */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* Gradient from black to transparent */
}
</style>
