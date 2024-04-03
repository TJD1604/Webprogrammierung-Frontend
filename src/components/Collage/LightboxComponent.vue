<template>
  <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox" ref="lightbox">
    <div class="lightbox__content">
      <img :src="images[currentSlide].src" class="lightbox__image" :alt="images[currentSlide].title" />
      <div class="lightbox__text">
        <h3>{{ images[currentSlide].title }}</h3>
        <p><strong>Artist:</strong> {{ images[currentSlide].artist }}</p>
        <p><strong>Location:</strong> {{ images[currentSlide].ort }}</p>
        <p>{{ images[currentSlide].info }}</p>
      </div>
      <button @click="closeLightbox" class="lightbox__close-btn">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LightboxComponent',
  props: {
    showLightbox: Boolean,
    currentSlide: Number,
    images: Array
  },
  mounted() {
    window.addEventListener('keydown', this.handleEscapeKey);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleEscapeKey);
  },
  methods: {
    closeLightbox() {
      this.$emit('close-lightbox');
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      }
    }
  }
}
</script>

<style scoped>
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

.lightbox__image {
  max-height: 80%;
  max-width: 70%;
}

.lightbox__text {
  flex: 1;
  padding-left: 20px;
}

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
