<script lang="ts">
// Importing necessary components and styles
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import FAQComponent from '@/components/FAQ/FAQComponent.vue'
import '../view.css'

// Exporting the component definition
export default defineComponent({
  name: 'FAQView', // Component name
  components: {
    PicBackgroundComponent,
    FooterComponent,
    FAQComponent
  },
  // Data properties
  data() {
    return {
      imagePath: 'images/FAQ.jpg', // Path to the background image
      title: 'FAQ', // Title of the section
      questions: [ // Array of FAQ questions and answers
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
      options: { // Options for full-page component
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
  <!-- Main template -->
  <div>
    <!-- Header line component -->
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
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
            <h2 class="h2">Häufig gestellte Fragen</h2>
          </div>
          <!-- FAQ component with questions prop -->
          <FAQComponent :questions="questions"  />
        </div>
      </div>
      <!-- Section 3 with footer -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>