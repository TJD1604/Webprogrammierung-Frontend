<template>
  <!-- Container component for the image and bubble -->
    <div class="container">
      <!-- Router link to the contact page -->
      <router-link to="/kontakt" class="heart-link">
        <!-- Image with dynamic source binding -->
      <img :src="imagePath" alt="Bild" class="image" >
      </router-link>
      <!-- Bubble element for displaying text -->
      <div class="bubble" ref="bubble">
         <!-- Dynamic text content -->
        <p>{{ imageText }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      imageText: String, // Text to display in the bubble
      imagePath: String // Path for the image source
    },
    mounted() {
      // Functionality to show the bubble after a delay
  setTimeout(() => {
    (this.$refs.bubble as HTMLElement).classList.add('show-bubble');
  }, 5000); // 5-second delay
}
  }
  </script>
  
  <style scoped>
  .container {
    position: relative;
  padding: 0;
  }
  .image {
  max-height: 100%;
  width: auto; 
}
  
.bubble {
  position: absolute;
  bottom: 10px; 
  left: 10px;
  transform: translate(-50%, -50%) scale(0); 
  background-color: rgb(224, 204, 180);
  padding: 10px;
  border-radius: 20px;
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; 
}

.show-bubble {
  transform: translate(-50%, -50%) scale(1); /* Bubble pop-up effect */
  opacity: 1;
}
  @keyframes bubbleAnimation {
    0% {
      opacity: 0;
      transform: translateY(-50%) translateX(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-50%) translateX(-100px); /* Movement to the left */
      opacity: 1;
    }
  }
  
  .bubble p {
    margin: 0;
    color: #000000;
    font-size: 14px;
  }
  </style>
  