<template>
  <!-- Lightbox component displayed when showLightbox is true -->
  <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox" ref="lightbox">
    <!-- Lightbox content -->
    <div class="lightbox__content">
      <!-- Full-size image -->
      <img :src="images[currentSlide].src" class="lightbox__image" :alt="images[currentSlide].title" />
      <!-- Information about the image -->
      <div class="lightbox__text">
        <h3>{{ images[currentSlide].title }}</h3>
        <p><strong>Artist:</strong> {{ images[currentSlide].artist }}</p>
        <p><strong>Location:</strong> {{ images[currentSlide].ort }}</p>
        <p>{{ images[currentSlide].info }}</p>
      </div>
      <!-- Close button -->
      <button @click="closeLightbox" class="lightbox__close-btn">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LightboxComponent',
  props: {
    // Prop to control the visibility of the lightbox
    showLightbox: Boolean,
    // Index of the current slide being displayed
    currentSlide: Number,
    // Array containing image data
    images: Array
  },
  mounted() {
    // Event listener to handle pressing the escape key to close the lightbox
    window.addEventListener('keydown', this.handleEscapeKey);
  },
  beforeUnmount() {
    // Removing event listener when component is about to be unmounted
    window.removeEventListener('keydown', this.handleEscapeKey);
  },
  methods: {
    // Method to close the lightbox
    closeLightbox() {
      this.$emit('close-lightbox');
    },
    // Method to handle pressing the escape key
    handleEscapeKey(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      }
    }
  }
}
</script>

<style scoped>
/* Styling for the lightbox */
.lightbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styling for the lightbox content */
.lightbox__content {
  position: relative; 
  max-width: 95%;
  max-height: 95%;
  overflow: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

/* Styling for the full-size image in the lightbox */
.lightbox__image {
  max-height: 80%;
  max-width: 70%;
}

/* Styling for the text information in the lightbox */
.lightbox__text {
  flex: 1;
  padding-left: 20px;
}

/* Styling for the close button */
.lightbox__close-btn {
  position: absolute; 
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  font-size: 18px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}
</style>
