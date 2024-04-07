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
    <!-- Full-page component with options -->
    <full-page :options="options">
      <!-- Section for background image -->
      <div class="section">
        <div class="position-relative">
          <!-- Background image component with dynamic image path and title -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Section for ArrivalComponent -->
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <div>
              <h2 class="h2">Wie wir zu finden sind</h2>
              <p class="info-text">
                Du willst unsere Kunst aus der Nähe anschauen? Dann besuch uns gerne! 
              </p>
            </div>
          </div>
          <!-- ArrivalComponent -->
          <ArrivalComponent />
        </div>
      </div>
      <!-- FooterComponent -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

