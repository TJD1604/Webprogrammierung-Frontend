<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLineComponent from '@/components/HeaderLine/HeaderLineComponent.vue'
import VideoBackgroundComponent from '@/components/VideoBackground/VideoBackgroundComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import '../view.css'
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
        <P>Hello, </P>
        <!-- Weitere Inhalte -->
        <CustomButton buttonText="Kontakt" imagePath="/images/Kontakt.JPG" destination="/kontakt"/>
      
    </div>
  </div>
</template>