<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ReviewCaourselComponent from '@/components/ReviewCarousel/ReviewCarouselComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'AboutUsView',
  components: {

    PicBackgroundComponent,
    FooterComponent,
    ReviewCaourselComponent
  },
  data() {
    
    return {
      imagePath: 'images/ÜberUnsZiele.JPG',
      title: 'Über Uns',
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
    }
  }
})
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <ReviewCaourselComponent />
        </div>
      </div>
      <div class="section">
          <FooterComponent />
        </div>
    </full-page>  
  </div>
  
</template>
