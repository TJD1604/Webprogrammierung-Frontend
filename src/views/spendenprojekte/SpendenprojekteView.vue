<script lang="ts">
// Importing necessary components and styles
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ImageAccordionComponent from '@/components/ImageAccordion/ImageAccordionComponent.vue'
import '../view.css'

// Exporting the component definition
export default defineComponent({
  name: 'SpendenprojekteView', // Component name
  components: {
    FooterComponent,
    PicBackgroundComponent,
    ImageAccordionComponent
  },
  // Data properties
  data() {
    return {
      options: { // Options for full-page component
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Spendenprojekete.jpg', // Path to the background image
      title: 'Unsere Spendenprojekte' // Title of the section
    }
  }
})
</script>

<template>
  <!-- Main template -->
  <div>
    <!-- Full-page component with options -->
    <full-page :options="options">
      <!-- Section 1: Background image -->
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Section 2: Content -->
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <!-- Heading and information -->
            <div>
              <h2 class="h2">Gemeinsam für eine bessere Welt!</h2>
              <p class="info-text">
                Mit <b>Lebensbogen - unserem Spendenplan</b> verfolgt unsere Solidarity Studio Galerie das Ziel, einen harmonischen Bogen über lebenswichtige Themen zu spannen. Jede Spende unterstützt Projekte zur Förderung von Bildung, Gesundheit, Umweltschutz und Gemeinschaftswachstum weltweit. Zusammen formen wir den Bogen des Lebens, um eine vielfältige und nachhaltige Zukunft für alle zu gestalten.
              </p>
            </div>
          </div>
          <!-- Component to display image accordion -->
          <ImageAccordionComponent />
        </div>
      </div>
      <!-- Section 3: Footer -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
