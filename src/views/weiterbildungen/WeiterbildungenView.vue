<script lang="ts">
import { defineComponent } from 'vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import LearnCardComponent from '@/components/LearnCard/LearnCardComponent.vue'

import '../view.css'
export default defineComponent({
  name: 'WeiterbildungenView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    LearnCardComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Weiterbildung.jpg',
      title: 'Weiterbildungen'
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
            <h2>Kostenlose Weiterbildungen</h2>
            <p>Entdecke unsere vielfältigen kostenlosen künstlerischen Weiterbildungen und erweitere deine kreativen Fähigkeiten ohne Kosten. Tauche ein in die Welt der Malerei, Keramik, Fotografie und Schauspiel und entwickle deine Fertigkeiten unter der Anleitung erfahrener Experten. Nutze diese Gelegenheit, um deine Leidenschaft für Kunst zu entfalten und neue Horizonte zu erkunden.</p>
          </div>
          <div class="button-container">
            <LearnCardComponent
              headline="Malerei"
              description="Entdecke die Welt der Malerei und erweitere deine künstlerischen Fähigkeiten. Lerne verschiedene Techniken, Farbpaletten und Stile kennen, während du in einer inspirierenden Umgebung arbeitest. Dieser Workshop bietet dir die Möglichkeit, deine Kreativität auszudrücken und neue Kunstwerke zu schaffen."
              timeframe="Mo 21.06.2024"
            />
            <LearnCardComponent
              headline="Keramik"
              description="Tauche ein in die Kunst der Keramik und lerne, wie du deine eigenen Kunstwerke gestalten kannst. Erfahre mehr über die verschiedenen Tonarten, Formgebungstechniken und Brennmethoden, um einzigartige Keramikobjekte zu schaffen. Dieser Kurs bietet dir die Möglichkeit, deine handwerklichen Fähigkeiten zu verbessern und dein eigenes Geschirr, Vasen und Skulpturen herzustellen."
              timeframe="Di 22.06.2024"
            />
            <LearnCardComponent
              headline="Fotografie"
              description="Erforsche die Grundlagen der Fotografie und entwickle deine Fertigkeiten in der Bildkomposition. Lerne, wie du mit Licht, Schärfe und Perspektive spielst, um fesselnde Bilder zu erstellen. Dieses Seminar bietet dir die Möglichkeit, die Welt durch die Linse zu betrachten und deine fotografischen Fähigkeiten zu verbessern."
              timeframe="Mi 23.06.2024"
            />
            <LearnCardComponent
              headline="Schauspielkurs"
              description="Entdecke die Welt des Schauspiels und lerne, wie du deine emotionale Bandbreite erweiterst und deine schauspielerischen Fähigkeiten entwickelst. Tauche ein in verschiedene Schauspieltechniken, von der Improvisation bis zur Charakterentwicklung, und arbeite an Szenen und Monologen. Dieser Kurs bietet dir die Möglichkeit, dein Talent auf der Bühne zu entfalten und eine starke Präsenz als Schauspieler zu entwickeln."
              timeframe="Do 24.06.2024"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
