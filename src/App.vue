<script setup lang="ts">
import HeaderLineComponent from './components/HeaderLine/HeaderLineComponent.vue';
import VideoBackgroundComponent from './components/VideoBackground/VideoBackgroundComponent.vue';
</script>

<template>
  <div class="position-relative">
    <HeaderLineComponent class="position-absolute top-0"/>
  </div>
  <div class="position-relative">
    <VideoBackgroundComponent/>
  </div>
  
</template>

<style scoped>
</style>
