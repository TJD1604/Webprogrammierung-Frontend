<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLineComponent from '@/components/HeaderLine/HeaderLineComponent.vue'
import VideoBackgroundComponent from '@/components/VideoBackground/VideoBackgroundComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import ReviewCaoursel from '@/components/ReviewCarousel/ReviewCarousel.vue'
import '../view.css'
export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderLineComponent,
    VideoBackgroundComponent,
    CustomButton,
    ReviewCaoursel
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

      <ReviewCaoursel/>
        <div class="button-container"> 
          <div>
        <h2 class="h2">Entdecken</h2>
        <p class="info-text">
          Entdecke, was unser Team so besonders macht! Besuche uns und gönn dir köstliche <br> Leckereien
          in unserer gemütlichen Kantine, nimm an spannenden Wettbewerben teil<br>  und erweitere dein
          Wissen durch inspirierende Weiterbildungen. <br>Es gibt viel zu entdecken und zu genießen –
          komm vorbei und erlebe es selbst! <br /><strong>#Entdecken #GemeinsamStark</strong>
        </p>
      </div>

          <CustomButton
            buttonText="Wettbewerbe"
            imagePath="/images/Wettbewerbe.JPG"
            destination="/wettbewerbe"
          />
          <CustomButton
            buttonText="Weiterbildungen"
            imagePath="/images/Weiterbildung.jpg"
            destination="/weiterbildungen"
          />
          <CustomButton
            buttonText="Kantine"
            imagePath="/images/Kantine.jpg"
            destination="/kantine"
          />
        
      </div>
    </div>
  </div>
</template>
