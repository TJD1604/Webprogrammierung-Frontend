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
        <h2 class="h2">Entdecken</h2>
        <div class="button-container">
        <CustomButton buttonText="Wettbewerbe" imagePath="/images/Wettbewerbe.JPG" destination="/wettbewerbe"/>
        <CustomButton buttonText="Button 2" imagePath="/images/Kontakt.JPG" destination="/kontakt"/>
        <CustomButton buttonText="Button 3" imagePath="/images/Kontakt.JPG" destination="/kontakt"/>
      </div>
    </div>
  </div>
</template>