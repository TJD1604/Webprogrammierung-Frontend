<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLineComponent from '@/components/HeaderLine/HeaderLineComponent.vue'
import VideoBackgroundComponent from '@/components/VideoBackground/VideoBackgroundComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderLineComponent,
    VideoBackgroundComponent,
    CustomButton
  }
})
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <div class="position-relative">
      <VideoBackgroundComponent />
    </div>
   
      <div class="content-inner">
        <h1>Hello, Webseite!</h1>
        <div class="blocker"></div>
        <!-- Weitere Inhalte -->
        <CustomButton buttonText="Kontakt" imagePath="/images/Kontakt.JPG" destination="/kontakt"/>
      
    </div>
  </div>
</template>

<style>
.content {
  position: relative;
  z-index: 1;
  padding-top: 100vh;
}

.content-inner {
  padding: 20px;
  height: 100vh;
  background-color: rgb(210, 184, 157);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ccc;
}

/* Anpassen der Scrollleiste */
.content-inner::-webkit-scrollbar {
  width: 10px;
}

.content-inner::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

.content-inner::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.blocker {
  height: 400px;
  width: 100vh;
}
</style>
