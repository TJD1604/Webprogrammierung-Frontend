<script lang="ts">
// Importing necessary components and styles
import { defineComponent } from 'vue'
import CollageComponent from '@/components/Collage/CollageComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import '../view.css'

// Exporting the component definition
export default defineComponent({
  name: 'ProdukteView', // Component name
  components: {
    FooterComponent,
    PicBackgroundComponent,
    CollageComponent
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
      imagePath: 'images/Produkte.JPG', // Path to the background image
      title: 'Produkte' // Title of the section
    }
  }
})
</script>

<template>
  <!-- Main template -->
  <div>
    <!-- Full-page component with options -->
    <full-page :options="options">
      <!-- Section 1 -->
      <div class="section">
        <!-- Background image component -->
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Section 2 -->
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <!-- Title -->
            <h2 class="h2">Duetto cittadino antico</h2>
          </div>
          <div class="text-container">
            <!-- Text content -->
            <p class="text">
              Willkommen in unserer Galerie des antiken städtischen Duettos! Tauchen Sie ein in die
              Vergangenheit und entdecken Sie die harmonische Melodie vergangener Zeiten, als die
              Straßen von Kutschen durchzogen wurden und das städtische Leben im sanften Takt verging.
              Schreiten Sie durch unsere virtuelle Galerie und lassen Sie sich von den künstlerischen
              Meisterwerken vergangener Epochen verzaubern. Swipen Sie durch die Bilder, um die
              Schönheit antiker Städte zu erleben, eingefangen in Momenten des Alltags und der
              Feierlichkeiten.
            </p>
            <!-- Collage component -->
            <CollageComponent />
          </div>
        </div>
      </div>
      <!-- Section 3 with footer -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
