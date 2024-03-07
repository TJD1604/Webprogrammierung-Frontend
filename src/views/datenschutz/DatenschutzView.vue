<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'DatenschutzView',
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
      imagePath: 'images/Datenschutz.jpg',
      title: 'Datenschutzrichlinien'
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
            <h2 class="subheading">Persönliche Daten</h2>
            <p>
              Wir sammeln persönliche Daten, wenn Sie sich für unsere Dienste anmelden. Diese Daten
              können Ihren Namen, Ihre E-Mail-Adresse und andere relevante Informationen beinhalten.
            </p>

            <h2 class="subheading">Nutzung der Daten</h2>
            <p>
              Wir verwenden Ihre Daten, um Ihnen unsere Dienste bereitzustellen, unsere Dienste zu
              verbessern und mit Ihnen zu kommunizieren.
            </p>

            <h2 class="subheading">Weitergabe von Daten</h2>
            <p>
              Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Bereitstellung
              unserer Dienste erforderlich oder gesetzlich vorgeschrieben.
            </p>

            <h2 class="subheading">Cookies</h2>
            <p>
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Sie können
              Cookies in Ihrem Browser deaktivieren, wenn Sie dies wünschen.
            </p>

            <h2 class="subheading">Ihre Rechte</h2>
            <p>
              Sie haben das Recht, Ihre Daten einzusehen, zu korrigieren oder zu löschen. Sie können
              diese Rechte ausüben, indem Sie uns kontaktieren.
            </p>

            <h2 class="subheading">Änderungen dieser Richtlinie</h2>
            <p>
              Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir empfehlen
              Ihnen, diese Seite regelmäßig zu überprüfen.
            </p>

            <h2 class="subheading">Kontakt</h2>
            <p>
              Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns gerne über unser
              Kontaktformular kontaktieren.
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
<style>
.subheading{
font-size: medium !important;
}
</style>