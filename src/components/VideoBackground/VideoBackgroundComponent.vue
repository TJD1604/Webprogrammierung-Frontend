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

<style>
.video-background-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slogan{
  position: absolute;
  margin-left: 30px;
  margin-bottom: 30px;
  bottom: 0;
  left: 0;
  font-size: 60px;
  color:white;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5); 
}
.slogan .dot {
  color: rgb(210, 184, 157);
}
.video-background video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}


.vid-bottom{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px; 
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.0) 100%);
}

.scroll-down-arrow {
  position: absolute;
  font-family: Dubai;

  bottom: 20px;
  left: 50%; 
  font-size: 20px;
  color: #fff; 
  text-decoration: none; 
  padding: 5px 10px;
  animation: bounce 0.5s infinite alternate; /* Hinzufügen der Animation */
}

@keyframes bounce {
  0% {
      transform: translateY(0); 
  }
  50% {
      transform: translateY(6px); 
  }
  100% {
      transform: translateY(0); 
  }
}
</style>
