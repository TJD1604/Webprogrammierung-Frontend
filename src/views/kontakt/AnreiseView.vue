<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ArrivalComponent from '@/components/Arrival/ArrivalComponent.vue'
import '../view.css'
export default defineComponent({
  name: 'AnreiseView',
  components: {
    FooterComponent,

    PicBackgroundComponent,
    ArrivalComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Anreise.JPG',
      title: 'Anreise'
    }
  }
})
</script>

<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <ArrivalComponent />
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
