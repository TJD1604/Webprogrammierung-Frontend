<!-- oOriginal source that has been modified: https://www.w3schools.com/howto/howto_css_image_overlay.asp -->

<template>
  <!-- Container for the image and text overlay -->
    <div class="container">
      <!-- Image with dynamic source binding -->
  <img :src="imagePath" alt="Avatar" class="image" style="width:100%">
  <!-- Text overlay -->
  <div class="middle">
    <!-- Dynamic text content -->
    <div class="text">{{ imageText }}</div>
  </div>
</div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      imageText: String, // Text to display on the image overlay
      imagePath: String  // Path for the image source
    },
  }
  </script>
  
  <style scoped>
.container {
  position: relative;
  padding: 0;
  width: 50%;
}

.image {
  opacity: 1;
  width: 150px;
  height: auto;
  object-fit: cover; 
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.8;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #ffffffa9;
  color: rgba(0, 0, 0, 0.785);
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 4px;
}
  </style>