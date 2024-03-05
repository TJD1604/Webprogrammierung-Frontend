<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLineComponent from '@/components/HeaderLine/HeaderLineComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ReviewCaourselComponent from '@/components/ReviewCarousel/ReviewCarouselComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'AboutUsView',
  components: {

    PicBackgroundComponent,
    ReviewCaourselComponent
  },
  data() {
    return {
      imagePath: 'images/ÜberUnsZiele.JPG',
      title: 'Über Uns'
    }
  }
})
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <div class="position-relative">
      <PicBackgroundComponent :imagePath="imagePath" :title="title" />
    </div>
    <div class="content-inner">
      <ReviewCaourselComponent />
    </div>
  </div>
</template>
