<template>
    <div class="collage">
      
      <div v-for="(image, index) in images" :key="index" class="image" :style="{ backgroundImage: image }"></div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        images: [ 'images/Produkte.JPG', 'images/Produkte.JPG', 'images/Produkte.JPG', 'images/Produkte.JPG',  ]
      };
    },
    mounted() {
      this.shuffleImages();
    },
    methods: {
      // Eine Methode zum Mischen der Bilder
      shuffleImages() {
        this.images.sort(() => Math.random() - 0.5);
      }
    }
  }
  </script>
  
  <style scoped>
  .collage {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Automatische Spaltenanpassung */
    gap: 10px; /* Abstand zwischen den Bildern */
  }
  
  .image {
    height: 200px; /* Höhe der Bilder */
    background-size: cover;
    background-position: center;
  }
  </style>