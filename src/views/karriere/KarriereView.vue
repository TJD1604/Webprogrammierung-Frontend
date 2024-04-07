<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner" style="width: 90% !important">
          <h2 style="align-self: self-start">Wir als Arbeitgeber</h2>
          <!-- Karten rendern -->
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-4 mt-5" v-for="(item, index) in cards" :key="index">
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
            <div class="col-md-4" style="align-self: center">
              <ContactComponent
                imageText=" Klicke das Herz um selbst ein*e Mitarbeiter*in zu werden"
                imagePath="/heart.png"
                style="width: 78%; margin-right: 0; margin-left: auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section">
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
          back: 'Flexibilität, Produktivität: Arbeit von überall, jederzeit.'
        },
        {
          front: 'Obst am Arbeitsplatz',
          back: 'Gesundheit, Energie: Frische Snacks für kreative Köpfe.'
        },
        {
          front: 'Weiterbildungsmöglichkeiten',
          back: 'Lernen, Wachsen: Chancen für berufliche Entwicklung und Weiterbildung.'
        },
        {
          front: 'Flexible Arbeitszeiten',
          back: 'Balance, Freiheit: Arbeit nach individuellem Rhythmus.'
        },
        {
          front: 'Betriebliche Gesundheitsförderung',
          back: 'Wohlbefinden, Prävention: Programme für gesunde Mitarbeiter.'
        },
        {
          front: 'Mitarbeiter-Events',
          back: 'Teamgeist, Spaß: Gemeinsame Erlebnisse, Bindung stärken.'
        }
      ]
    }
  }
})
</script>
