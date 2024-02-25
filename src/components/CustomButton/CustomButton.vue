<template>
  <div class="custom-button" @click="navigate" @mouseover="zoomIn" @mouseleave="zoomOut">
    <div class="button-content">
      <img :src="imagePath" class="button-image" />
    <div class="shadow">
      <div class="button-text">{{ buttonText }}</div>
      <div class="arrow" @mouseover="changeBackground" @mouseleave="resetBackground">&#10140;</div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    buttonText: String,
    imagePath: String,
    destination: String 
  },
  methods: {
    zoomIn(event) {
      event.currentTarget.querySelector('.button-image').style.transform = 'scale(1.1)';
    },
    zoomOut(event) {
      event.currentTarget.querySelector('.button-image').style.transform = 'scale(1)';
    },
    navigate() {
      if (this.destination) {
        this.$router.push(this.destination);
      } else {
        console.error('Zielseite nicht definiert');
      }
    },
    changeBackground(event) {
      event.target.classList.add('hovered');
    },
    resetBackground(event) {
      event.target.classList.remove('hovered');
    }
  }
}
</script>

<style scoped>
.custom-button {
  border-radius: 20px;
  overflow: hidden;
  height: 250px;
  width: 250px;
  cursor: pointer;
}

.button-content {
  position: relative;
  height: 100%;
}

.button-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

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

.arrow {
  position: absolute;
  bottom: 10px; /* Verschiebung nach oben */
  right: 10px; /* Verschiebung nach links */
  padding: 10px;
  box-sizing: border-box;
  color: white;
  font-family: Lucida Sans;
  cursor: pointer;
}

.arrow:hover {
  background-color: rgba(210, 184, 157, 0.5);
  border-radius: 10px;
}
.shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px; /* Höhe des Schattens */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* Gradient von Schwarz nach transparent */
}
</style>
