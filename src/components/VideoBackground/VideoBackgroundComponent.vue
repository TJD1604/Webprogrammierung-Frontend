<template>
  <div class="video-background-wrapper">
    <div class="video-background">
      <video-background
        :src="videoPath"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1"
      ></video-background>
      <div class="vid-bottom">
        <h1 class="slogan">Inspire<span class="dot">.</span> Create<span class="dot">.</span> Unite<span class="dot">.</span></h1>
        <a v-if="showArrow" class="scroll-down-arrow">↓</a>
      </div>
    </div>

  
    </div>
  
</template>

<script lang="ts">
import './VideoBackgroundComponent.css'
import { defineComponent } from 'vue'
import VideoBackground from 'vue-responsive-video-background-player'

export default defineComponent({
  components: {
    VideoBackground
  },
  data() {
    return {
      videoPath: '/webvideoFinal.mp4',
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
