<template>
    <div class="container">
      <router-link to="/kontakt" class="heart-link">
      <img :src="imagePath" alt="Bild" class="image" >
      </router-link>
      <div class="bubble" ref="bubble">
        <p>{{ imageText }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      imageText: String,
      imagePath: String
    },
    mounted() {
  setTimeout(() => {
    (this.$refs.bubble as HTMLElement).classList.add('show-bubble');
  }, 5000); // 5 Sekunden Verzögerung
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
  transform: translate(-50%, -50%) scale(1); /* Aufpoppen */
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
      transform: translateY(-50%) translateX(-100px); /* Bewegung nach links */
      opacity: 1;
    }
  }
  
  .bubble p {
    margin: 0;
    color: #000000;
    font-size: 14px;
  }
  </style>
  