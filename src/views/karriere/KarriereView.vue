<template>
  <div>
    <!-- Full-page component with options -->
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <!-- Background image component with dynamic image path and title -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner" style="width: 90% !important">
          <!-- Section title -->
          <h2 style="align-self: self-start">Wir als Arbeitgeber</h2>
          <!-- Render cards -->
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <!-- Loop through cards and render InfoCardComponent -->
                <div class="col-md-4 mt-5" v-for="(item, index) in cards" :key="index">
                  <InfoCardComponent>
                    <template v-slot:front>
                      <div>
                        <!-- Display front content of the card -->
                        {{ item.front }}
                      </div>
                    </template>
                    <template v-slot:back>
                      <div>
                        <!-- Display back content of the card -->
                        {{ item.back }}
                      </div>
                    </template>
                  </InfoCardComponent>
                </div>
              </div>
            </div>
            <div class="col-md-4" style="align-self: center">
              <!-- Contact component with image and text -->
              <ContactComponent
                imageText="Click the heart to become an employee"
                imagePath="/heart.png"
                style="width: 78%; margin-right: 0; margin-left: auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <!-- Footer component -->
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import InfoCardComponent from '@/components/InfoCard/InfoCardComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ContactComponent from '@/components/ContactComponent/ContactComponent.vue'
import '../view.css'
export default defineComponent({
  name: 'KarriereView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    InfoCardComponent,
    ContactComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Karriere.JPG',
      title: 'Karriere',
      cards: [
        {
          front: 'Mobiles Arbeiten',
          back: 'Flexibility, productivity: work from anywhere, anytime.'
        },
        {
          front: 'Obst am Arbeitsplatz',
          back: 'Health, energy: fresh snacks for creative minds.'
        },
        {
          front: 'Weiterbildungsmöglichkeiten',
          back: 'Learning, growing: opportunities for professional development and further education.'
        },
        {
          front: 'Flexible Arbeitszeiten',
          back: 'Balance, freedom: work according to individual rhythm.'
        },
        {
          front: 'Betriebliche Gesundheitsförderung',
          back: 'Well-being, prevention: programs for healthy employees.'
        },
        {
          front: 'Mitarbeiter-Events',
          back: 'Team spirit, fun: shared experiences, strengthening bonds.'
        }
      ]
    }
  }
})
</script>
