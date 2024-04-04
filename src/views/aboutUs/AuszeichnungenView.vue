<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import HoverImageComponent from '@/components/hoverImage/HoverImageComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'AuszeichnungenView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    HoverImageComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Auszeichnungen.JPG',
      title: 'Auszeichnungen'
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
            <h2 class="h2">Unsere Awards</h2>
          </div>
          <div class="button-container">
            <p>
              Wir sind unendlich dankbar für die Anerkennungen und Auszeichnungen, die Solidarity
              Studio im Laufe der Jahre erhalten hat. Diese Ehrungen sind nicht nur eine Bestätigung
              unserer Bemühungen, sondern auch eine Ermutigung, unseren Weg fortzusetzen und unsere
              Ziele zu verfolgen. Wir möchten unseren tiefen Dank an all jene aussprechen, die uns
              unterstützt, inspiriert und ermutigt haben. Es ist durch Ihre Unterstützung und
              Engagement, dass wir in der Lage waren, so bedeutende Auszeichnungen zu erreichen.
            </p>
          </div>
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
          

          <p class="award"><b>♥ Danke ♥</b></p>
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
<style>
.award {
  font-size: 110px;
  font-family: 'Lucida Sans';

  background-image: url('/awards.jpg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
}
</style>
