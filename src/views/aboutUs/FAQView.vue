<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import FAQComponent from '@/components/FAQ/FAQComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'FAQView',
  components: {
    PicBackgroundComponent,
    FooterComponent,
    FAQComponent
  },
  data() {
    return {
      imagePath: 'images/FAQ.jpg',
      title: 'FAQ',
      questions: [
        {
          id: 1,
          title: 'Was ist Solidarity Studio?',
          info: 'Solidarity Studio ist eine gemeinnützige Online-Galerie, die Kunstwerke von Künstlern aus der ganzen Welt präsentiert, um Spenden für wohltätige Zwecke zu sammeln.'
        },
        {
          id: 2,
          title: 'Wie funktioniert Solidarity Studio?',
          info: 'Künstler können ihre Werke kostenlos auf Solidarity Studio hochladen. Die Werke werden dann zum Verkauf angeboten, und die Erlöse gehen an ausgewählte gemeinnützige Organisationen, die sich für verschiedene soziale und Umweltthemen einsetzen.'
        },
        {
          id: 3,
          title: 'Welche Arten von Kunst werden auf Solidarity Studio präsentiert?',
          info: 'Wir präsentieren eine vielfältige Auswahl an Kunstwerken, darunter Gemälde, Fotografien, Skulpturen, digitale Kunst und mehr. Unser Ziel ist es, eine breite Palette kreativer Ausdrucksformen zu unterstützen.'
        },
        {
          id: 4,
          title: 'Wie kann ich Solidarity Studio unterstützen?',
          info: 'Es gibt mehrere Möglichkeiten, Solidarity Studio zu unterstützen. Sie können Kunstwerke kaufen, Spenden tätigen, die Galerie auf Ihren sozialen Medien teilen oder sogar als Künstler beitreten und Ihre eigenen Werke hochladen.'
        },
        {
          id: 5,
          title: 'Welche Organisationen werden durch Solidarity Studio unterstützt?',
          info: 'Wir unterstützen eine Vielzahl von Organisationen, die sich für Menschenrechte, Umweltschutz, Bildung, Gesundheitsversorgung und andere wichtige Anliegen einsetzen. Die unterstützten Organisationen variieren je nach den aktuellen Bedürfnissen und Anliegen.'
        }
      ],
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      }
    }
  }
})
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <h2 class="h2">Häufig gestellte Fragen</h2>
          </div>
          <FAQComponent :questions="questions"  />
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
<style>

</style>
