<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ImageAccordionComponent from '@/components/ImageAccordion/ImageAccordionComponent.vue'

import '../view.css'
export default defineComponent({
  name: 'SpendenprojekteView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    ImageAccordionComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Spendenprojekete.jpg',
      title: 'Unsere Spendenprojekte'
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
          <div class="button-container">
            <div>
              <h2 class="h2">Gemeinsam für eine bessere Welt!</h2>
              <p class="info-text">
                Mit <b> Lebensbogen - unserem Spendenplan</b> verfolgt unsere Solidarity Studio Galerie das Ziel, einen harmonischen Bogen über lebenswichtige Themen zu spannen. Jede Spende unterstützt Projekte zur Förderung von Bildung, Gesundheit, Umweltschutz und Gemeinschaftswachstum weltweit. Zusammen formen wir den Bogen des Lebens, um eine vielfältige und nachhaltige Zukunft für alle zu gestalten.
                </p>
            </div>
            
          </div>
          <ImageAccordionComponent />
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
