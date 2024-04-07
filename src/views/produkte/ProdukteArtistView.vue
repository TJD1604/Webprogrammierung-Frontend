<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import HoverImageComponent from '@/components/hoverImage/HoverImageComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
    // Defines the name of the component
  name: "ProdukteArtistView",
  components: {
    // Importing necessary components
    FooterComponent,
    HoverImageComponent,
    PicBackgroundComponent
  },
  data() {
    // Data properties
    return {
      options: {
        // Options for full-page component
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Produkte_Künstlerin.jpg', // Path for the background image
      title: 'Aktuelle Künstlerin' // Title for the background image
    };
  }
});
</script>

<template>
  <div>
    <!-- Utilizes a full-page component -->
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <!-- Background image component -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Section for artist information and hover images -->
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <!-- Artist information -->
            <div class="artist-text">
              <h2 class="h2">Janana</h2>
              <p class="age">
               <b>Alter:</b>  20
              </p>
              <!-- Artist description -->
              <p><b>Janana, eine leidenschaftliche Fotografin aus Berlin, ist bekannt für ihre fesselnden
                  Streetfotografien.</b> <br> Schon seit ihrer Kindheit ist sie von der Kunst der Fotografie fasziniert und
                hat sich im Laufe der Jahre zu einer talentierten Künstlerin entwickelt. Mit nur 20 Jahren hat sie
                bereits einen beeindruckenden Stil entwickelt und ihre Arbeit wurde von vielen bewundert. Janana liebt
                es, die pulsierende Energie der Straßen Berlins einzufangen und ihre Fotos erzählen oft fesselnde
                Geschichten über das städtische Leben. Ihre Bilder sind geprägt von kraftvollen Kontrasten und
                einfühlsamen Momentaufnahmen, die den Betrachter dazu einladen, in die Welt der Straßen einzutauchen.
              </p>
            </div>
            <!-- Artist image -->
            <div>
              <img class="artist-image3" src="/images/Janana.jpg" alt="Janana">
            </div>
          </div>
          <!-- Container for hover images with names -->
          <div class="button-container">
            <HoverImageComponent imageText="Die Kleinstadt" imagePath="/images/HohenNeuendorf.jpg" />
            <HoverImageComponent imageText="Wege Lübecks" imagePath="/images/Luebeck.jpg" />
            <HoverImageComponent imageText="Berliner Getummel" imagePath="/images/Berlin.jpg" />
          </div>
        </div>
      </div>
      <div class="section">
        <!-- Footer component -->
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<style>
  .artist-image3{
    width: 500px;
    height: 333px;
    object-fit: cover;
  }
  .age{
    margin: 0;
  }
</style>