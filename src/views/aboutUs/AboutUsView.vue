<script lang="ts">
// Importing necessary components and styles
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ReviewCaourselComponent from '@/components/ReviewCarousel/ReviewCarouselComponent.vue'
import '../view.css'
import CustomButton from '@/components/CustomButton/CustomButton.vue'

// Exporting the component definition
export default defineComponent({
  name: 'AboutUsView', // Component name
  components: {
    PicBackgroundComponent,
    FooterComponent,
    ReviewCaourselComponent,
    CustomButton
  },
  // Data properties
  data() {
    return {
      imagePath: 'images/ÜberUnsZiele.JPG', // Path to the background image
      title: 'Über Uns', // Title of the section
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
    <!-- Header -->
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
            <!-- Introduction to the studio -->
            <div>
              <h2 class="h2">Kunst für den Wandel</h2>
              <p class="info-text">
                <b>Willkommen bei Solidarity Studio</b> – einem Ort, an dem Kunst auf Engagement
                trifft und Veränderungen bewirkt werden. Seit unserer Gründung haben wir uns dem
                Ziel verschrieben, durch kreative Ausdrucksformen und gemeinschaftliche Aktionen
                eine positive Wirkung zu erzielen. Unser Studio wurde aus der Überzeugung geboren,
                dass Kunst eine kraftvolle Plattform für soziale Veränderungen ist. Wir glauben
                daran, dass Kunst nicht nur schön sein sollte, sondern auch eine Botschaft tragen
                und eine Gemeinschaft inspirieren kann. Bei Solidarity Studio bringen wir
                Künstlerinnen und Künstler zusammen, um gemeinsam an Projekten zu arbeiten, die
                Themen wie soziale Gerechtigkeit, Umweltschutz und Bildung behandeln.
              </p>
            </div>
            <!-- Review carousel component -->
            <ReviewCaourselComponent />
          </div>
          <!-- Buttons container -->
          <div class="button-container">
            <div>
            <!-- Studio rating -->
            <p class="stars"> ★★★★☆</p>
            <h2 class="h2">Unser Rating</h2>
          </div>
              <!-- Custom buttons for different sections -->
              <CustomButton
                buttonText="Auszeichnungen"
                imagePath="/images/Auszeichnungen.JPG"
                destination="/auszeichnungen"
              /><CustomButton
                buttonText="Geschichte"
                imagePath="/images/Geschichte.jpg"
                destination="/geschichte"
              />
              <CustomButton
                buttonText="FAQ"
                imagePath="/images/FAQ.jpg"
                destination="/faq"
              />
          </div>
        </div>
      </div>
      <!-- Section 3 with footer -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<style>
/* CSS styles for stars rating */
.stars{
  font-size: 100px;
  text-align: center;
  color: rgb(210, 184, 157);
}
</style>
