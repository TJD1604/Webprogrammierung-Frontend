<script lang="ts">
import { defineComponent } from 'vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import InfoCardComponent from '@/components/InfoCard/InfoCardComponent.vue'

import '../view.css'
export default defineComponent({
  name: 'WettbewerbeView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    InfoCardComponent
  },
  data() {
    return {
      x: 0,
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Wettbewerbe.JPG',
      title: 'Wettbewerbe',
      cards: [
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
    onMousemove(e: { clientX: number }) {
      this.x = e.clientX
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
              <div class="row" style="align-self: self-start;">
            <div class="button-container col mt-5"  v-for="(item, index) in cards" :key="index">
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
            <div class="mt-3" style="align-self: self-start;">
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
