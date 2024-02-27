<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLineComponent from '@/components/HeaderLine/HeaderLineComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ReviewCaoursel from '@/components/ReviewCarousel/ReviewCarousel.vue'
import '../view.css'

export default defineComponent({
  name: 'AboutUsView',
  components: {
    HeaderLineComponent,
    PicBackgroundComponent,
    ReviewCaoursel
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
      <ReviewCaoursel />
    </div>
  </div>
</template>
