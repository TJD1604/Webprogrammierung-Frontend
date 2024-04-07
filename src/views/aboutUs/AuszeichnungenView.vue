<script lang="ts">
// Importing necessary components and styles
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import HoverImageComponent from '@/components/hoverImage/HoverImageComponent.vue'
import '../view.css'

// Exporting the component definition
export default defineComponent({
  name: 'AuszeichnungenView', // Component name
  components: {
    FooterComponent,
    PicBackgroundComponent,
    HoverImageComponent
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
      imagePath: 'images/Auszeichnungen.JPG', // Path to the background image
      title: 'Auszeichnungen' // Title of the section
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
            <h2 class="h2">Unsere Awards</h2>
          </div>
          <div class="button-container">
            <!-- Description of awards -->
            <p>
              Wir sind unendlich dankbar für die Anerkennungen und Auszeichnungen, die Solidarity
              Studio im Laufe der Jahre erhalten hat. Diese Ehrungen sind nicht nur eine Bestätigung
              unserer Bemühungen, sondern auch eine Ermutigung, unseren Weg fortzusetzen und unsere
              Ziele zu verfolgen. Wir möchten unseren tiefen Dank an all jene aussprechen, die uns
              unterstützt, inspiriert und ermutigt haben. Es ist durch Ihre Unterstützung und
              Engagement, dass wir in der Lage waren, so bedeutende Auszeichnungen zu erreichen.
            </p>
          </div>
          <!-- Container for displaying hover images -->
          <div class="button-container">
             <HoverImageComponent
              imageText="Beste Friedensgalerie 2024"
              imagePath="/awards/nobelpreis.jpg"
            />
            <HoverImageComponent
              imageText="Beste Naturschutzorganisation 2024"
              imagePath="/awards/EKFS.jpg"
            />
           
            <HoverImageComponent
              imageText="Beste Fotographie 2024"
              imagePath="/awards/oscar.jpg"
            />
            <HoverImageComponent
              imageText="Beste Zukunftsmanagment 2024"
              imagePath="/awards/Steinbeis.jpg"
            />
          </div>
          <!-- Acknowledgment message -->
          <p class="award"><b>♥ Danke ♥</b></p>
        </div>
      </div>
      <!-- Section 3 with footer -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<style>
/* CSS styles for award text */
.award {
  font-size: 110px;
  font-family: 'Lucida Sans';
  /* Applying image as text background */
  background-image: url('/awards.jpg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
}
</style>
