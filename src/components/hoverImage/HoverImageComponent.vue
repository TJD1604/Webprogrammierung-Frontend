<template>
    <div class="container">
  <img :src="imagePath" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">{{ imageText }}</div>
  </div>
</div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      imageText: String,
      imagePath: String  
    },
    methods: {
    }
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
  display: block;
  width: 100%;
  height: auto;
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