<script lang="ts">
// Importing necessary components and styles
import { defineComponent } from 'vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import InfoCardComponent from '@/components/InfoCard/InfoCardComponent.vue'
import '../view.css'

// Exporting the component definition
export default defineComponent({
  name: 'WettbewerbeView', // Component name
  components: {
    FooterComponent,
    PicBackgroundComponent,
    InfoCardComponent
  },
  // Data properties and methods
  data() {
    return {
      x: 0, // Variable for mouse position
      options: {
        // Options for full-page component
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Wettbewerbe.JPG', // Path to the background image
      title: 'Wettbewerbe', // Title of the section
      cards: [
        // Data for information cards
        {
          front: 'Malerei',
          back: 'Farben, Pinsel, Leinwand: Kunst der visuellen Meisterwerke.'
        },
        {
          front: 'Fotografie',
          back: 'Erfasse Momente, erzähle Geschichten: Kreativität durch Linsen.'
        },
        {
          front: 'Skulptur',
          back: 'Formen formen: Kunst in dreidimensionaler Schönheit.'
        },
        {
          front: 'Digitale Kunst',
          back: 'Pixel malen, Klicks kreativ: Virtuelle Kreativität entfesseln.'
        }
      ]
    }
  },
  methods: {
    // Method to track mouse position
    onMousemove(e: { clientX: number }) {
      this.x = e.clientX
    }
  }
})
</script>

<template>
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
              <h2 class="h2">Einladung zum Charity-Kunstwettbewerb</h2>
              <p>
                Sei Teil einer inspirierenden Bewegung für den Wandel! Unsere Charity-Galerie lädt
                Künstlerinnen und Künstler weltweit dazu ein, ihre kreativen Werke einzureichen und
                gemeinsam eine positive Veränderung zu bewirken. Zeige uns deine Vision von
                Hoffnung, Solidarität und Gemeinschaft und trage dazu bei, durch Kunst ein Licht in
                die Welt zu bringen. Alle Einnahmen aus dem Wettbewerb fließen direkt in
                unterstützenswerte Projekte. Sei dabei und lass uns zusammen Kunst für eine bessere
                Zukunft schaffen
              </p>
              <!-- Information cards -->
              <div class="row" style="align-self: self-start">
                <div class="button-container col mt-5" v-for="(item, index) in cards" :key="index">
                  <InfoCardComponent>
                    <template v-slot:front>
                      <div>
                        {{ item.front }}
                      </div>
                    </template>
                    <template v-slot:back>
                      <div>
                        {{ item.back }}
                      </div>
                    </template>
                  </InfoCardComponent>
                </div>
              </div>
            </div>
            <!-- Hover area -->
            <div class="mt-3" style="align-self: self-start">
              <div
                @mousemove="onMousemove"
                :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
                class="movearea"
              >
                <p class="stay-tuned">Mehr Wettbewerbe</p>
                <h3 class="coming-soon">COMING SOON</h3>
                <p class="stay-tuned">Hover Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Section 3: Footer -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
<style>
.movearea {
  width: 250px;
  height: 250px;
  border: 2px solid black;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s background-color ease;
}

.coming-soon {
  text-align: center;
}

.info,
.stay-tuned {
  color: white;
}
</style>
