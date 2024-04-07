<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import ContactComponent from '@/components/ContactComponent/ContactComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "PartnerinnenView",
  components: {
    FooterComponent,
    PicBackgroundComponent,
    CustomButton,
    ContactComponent
  },
  data() {
     // Data properties 
    return {
      options: {
        // Configuration options for full-page component
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Partnerinnen.JPG', // Path for the background image
      title: 'Partner:innen' // Title for the background image
    };
  }
  
});

</script>

<template>
  <div>
    <!-- Utilizes a full-page component-->
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <!-- Background image component -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <!-- Text and image content for partners -->
            <div class="partners-text">
              <h2 class="h2">Partner:innen</h2>
              <p> <b>Entdecken Sie unsere Partner! </b> <br> Gemeinsam machen wir uns stark für soziale Veränderungen. Erfahren Sie
                  mehr über die Organisationen und Unternehmen, die Solidarity Studio unterstützen und dazu
                  beitragen, positive Impulse in unserer Gemeinschaft zu setzen. Jeder Partner bringt seine einzigartige
                  Perspektive und Expertise ein, um eine bessere Welt zu gestalten. </p>
            </div>
            <!-- ContactComponent for becoming a partner -->
            <div class="herz">
              <ContactComponent imageText=" Klicke das Herz um selbst ein*e Partner*in zu werden" imagePath="/heart.png"/>
            </div>
          </div>
          <div class="button-container">
            <!-- CustomButton components for different partners -->
            <CustomButton buttonText="Porsche" imagePath="/images/Porsche.jpg"
              destination="/partnerinnen-detail#Porsche" />
            <CustomButton buttonText="Berliner Stadtwerke" imagePath="/images/BerlinerStadtwerke.jpg"
              destination="/partnerinnen-detail#BerlinerStadtwerke" />
            <CustomButton buttonText="SAP" imagePath="/images/SAP.jpg" destination="/partnerinnen-detail#SAP" />
            <CustomButton buttonText="Gucci" imagePath="/images/Gucci.jpg" destination="/partnerinnen-detail#Gucci" />


          </div>
        </div>
      </div>
      <!-- Footer component -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<style>
.herz{
  width: 25%;
}
.partners-text{
  width: 60%;
}
</style>