<template>
    <div class="custom-button" @click="navigate" @mouseover="zoomIn" @mouseleave="zoomOut">
      <div class="button-content">
        <img :src="imagePath" class="button-image" />
        <div class="button-text">{{ buttonText }}</div>
        <div class="arrow" @mouseover="changeBackground" @mouseleave="resetBackground">&#10140;</div>
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
      zoomIn() {
        document.querySelector('.button-image').style.transform = 'scale(1.1)';
      },
      zoomOut() {
        document.querySelector('.button-image').style.transform = 'scale(1)';
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
    height: 200px;
    width: 200px;
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
    bottom: 7px;
    left: 10px;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    color: white;
    font-family: Lucida Sans;
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
 
  </style>
  