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
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Partnerinnen.JPG',
      title: 'Partner:innen'
    };
  }
  
});

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
            <div class="partners-text">
              <h2 class="h2">Partner:innen</h2>
              <p> <b>Entdecken Sie unsere Partner! </b> <br> Gemeinsam machen wir uns stark für soziale Veränderungen. Erfahren Sie
                  mehr über die Organisationen und Unternehmen, die Solidarity Studio unterstützen und dazu
                  beitragen, positive Impulse in unserer Gemeinschaft zu setzen. Jeder Partner bringt seine einzigartige
                  Perspektive und Expertise ein, um eine bessere Welt zu gestalten. </p>
            </div>
            <div class="herz">
              <ContactComponent imageText=" Klicke das Herz um selbst ein*e Partner*in zu werden" imagePath="/heart.png"/>
            </div>
          </div>
          <div class="button-container">
            <CustomButton buttonText="Porsche" imagePath="/images/Porsche.jpg"
              destination="/partnerinnen-detail#Porsche" />
            <CustomButton buttonText="Berliner Stadtwerke" imagePath="/images/BerlinerStadtwerke.jpg"
              destination="/partnerinnen-detail#BerlinerStadtwerke" />
            <CustomButton buttonText="SAP" imagePath="/images/SAP.jpg" destination="/partnerinnen-detail#SAP" />
            <CustomButton buttonText="Gucci" imagePath="/images/Gucci.jpg" destination="/partnerinnen-detail#Gucci" />


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
.herz{
  width: 25%;
}
.partners-text{
  width: 60%;
}

</style>