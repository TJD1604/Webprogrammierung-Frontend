<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imagePath: String,
    title: String
  },
  data() {
    return {
      showArrow: false,
      timeoutId: null
    };
  },
  mounted() {
    this.timeoutId = setTimeout(() => {
      this.showArrow = true;
    }, 2000);
  },
 
})
</script>

<template>
  <div class="pic-background-wrapper">
    <div class="pic-background">
      <img
        :src="imagePath"
        class="background-image"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1"
      />
      <div class="pic-bottom">
        <h1 class="title">{{ title }}</h1>
        <a href="/produkte" class="transparent-button">→</a>
        <a v-if="showArrow" class="scroll-down-arrow">↓</a>
      </div>
    </div>
  </div>
</template>

<style>
.pic-background-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.pic-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title {
  position: absolute;
  margin-left: 30px;
  margin-bottom: 30px;
  bottom: 0;
  left: 0;
  font-size: 60px;
  color: rgb(255, 255, 255);
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5); 
}

.info {
  font: sans-serif;
  position: absolute;
  margin-right: 30px;
  margin-bottom: 30px;
  bottom: 0;
  right: 0;
  font-size: 20px;
  color: rgb(255, 255, 255);
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5); 
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.transparent-button {
  position: absolute;
  margin-left: 30px;
  margin-bottom: 20px;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border: 2px solid #fff; 
  background-color: transparent; 
  color: #fff; 
  border-radius: 10px; 
  text-decoration: none; 
  font-size: 20px;
  font-family: Dubai;
  transition: background-color 0.3s ease; 
}

/* Hover effect */
.transparent-button:hover {
  background-color: rgba(210, 184, 157, 0.5);
}

.pic-bottom {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px; 
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.0) 100%);
}

.scroll-down-arrow {
  position: absolute;
  font-family: Dubai;

  bottom: 20px;
  left: 50%; 
  font-size: 20px;
  color: #fff; 
  text-decoration: none; 
  padding: 5px 10px;
  border-radius: 10px;
  animation: bounce 0.5s infinite alternate; /* Hinzufügen der Animation */
}

@keyframes bounce {
  0% {
      transform: translateY(0); 
  }
  50% {
      transform: translateY(6px); 
  }
  100% {
      transform: translateY(0); 
  }
}
</style>
