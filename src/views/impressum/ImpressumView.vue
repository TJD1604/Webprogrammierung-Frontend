<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import './ImpressumView.css'

export default defineComponent({
  name: 'ImpressumView',
  components: {
    FooterComponent,
    PicBackgroundComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Impressum.jpg',
      title: 'Impressum'
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
          
          <div class="textdev">
            <h2 class="subheading">Angaben gemäß § 5 TMG: <br /></h2>
            <p>
              Solidarity Studio <br />
              Alt-Friedrichsfelde 60 <br />10315 Berlin
            </p>
            <h2 class="subheading">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p>Solidarity Studio<br />Alt-Friedrichsfelde 60, 10315 Berlin</p>
            <h2 class="subheading">Kontakt:</h2>
            <p>
              Telefon: +49 1234 56789<br />E-Mail:
              <a href="mailtos_bruckmoser22@hwr-berlin.de:" class="maillink">
                s_bruckmoser22@hwr-berlin.de</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
