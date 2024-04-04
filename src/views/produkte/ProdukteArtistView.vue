<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import HoverImageComponent from '@/components/hoverImage/HoverImageComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "ProdukteArtistView",
  components: {
    FooterComponent,
    HoverImageComponent,
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
      imagePath: 'images/Produkte_Künstlerin.jpg',
      title: 'Aktuelle Künstlerin'
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
            <div class="artist-text">
              <h2 class="h2">Janana</h2>
              <p><b>Janana, eine leidenschaftliche Fotografin aus Berlin, ist bekannt für ihre fesselnden
                  Streetfotografien.</b> Schon seit ihrer Kindheit ist sie von der Kunst der Fotografie fasziniert und
                hat sich im Laufe der Jahre zu einer talentierten Künstlerin entwickelt. Mit nur 20 Jahren hat sie
                bereits einen beeindruckenden Stil entwickelt und ihre Arbeit wurde von vielen bewundert. Janana liebt
                es, die pulsierende Energie der Straßen Berlins einzufangen und ihre Fotos erzählen oft fesselnde
                Geschichten über das städtische Leben. Ihre Bilder sind geprägt von kraftvollen Kontrasten und
                einfühlsamen Momentaufnahmen, die den Betrachter dazu einladen, in die Welt der Straßen einzutauchen.
              </p>
            </div>
            <div>
              <img class="artist-image3" src="/images/Janana.jpg" alt="Janana">
            </div>
          </div>
          <div class="button-container">
            <HoverImageComponent imageText="Die Kleinstadt" imagePath="/images/HohenNeuendorf.jpg" />
            <HoverImageComponent imageText="Wege Lübecks" imagePath="/images/Luebeck.jpg" />
            <HoverImageComponent imageText="Berliner Getummel" imagePath="/images/Berlin.jpg" />
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
  .artist-image3{
    width: 500px;
    height: 333px;
    object-fit: cover;
  }
</style>