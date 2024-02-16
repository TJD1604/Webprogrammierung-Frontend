<template>
    <div class="video-background-wrapper">
      <div class="video-background">
        <video-background 
          :src="videoPath"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;"
        ></video-background>
        <h1 class="slogan"> Inspire. Create. Unite.</h1>
      </div>
      <div class="content">
        <div class="content-inner">
          <h1>Hello, Webseite!</h1>
          <div class="blocker"></div> 
          <!-- Weitere Inhalte -->
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import './VideoBackgroundComponent.css';
  import { defineComponent } from 'vue'
  import VideoBackground from 'vue-responsive-video-background-player'
  
  export default defineComponent({
    components: {
      VideoBackground
    },
    data() {
      return {
        videoPath: "/webvideoFinal.mp4"
      }
    }
  })
  </script>
  