<template>
  <div>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel__item" alt="Slide" @click="openLightbox">
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="5"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel__thumbnail" alt="Thumbnail" @click="slideTo(index)">
      </Slide>
    </Carousel>

    <lightbox-component
      :show-lightbox="showLightbox"
      :current-slide="currentSlide"
      :images="images"
      @close-lightbox="closeLightbox"
    ></lightbox-component>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import LightboxComponent from './LightboxComponent.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CollageComponent',
  components: {
    Carousel,
    Slide,
    LightboxComponent,
  },
  data: () => ({
    currentSlide: 0,
    images: [
      '/images/Datenschutz.jpg',
      '/images/DetailsJobangebote.jpg',
      '/images/DetailsMitarbeitende.JPG',
      '/images/DetailsPartnerinnen.jpg',
      '/images/DetailWeiterbildung.JPG',
      '/images/DetailsProdukte.jpg',
      '/images/DetailsSpendenprojekte.jpg',
      '/images/Geschichte.jpg',
      '/images/Impressum.jpg',
      '/images/Jobangebote.JPG',
      '/images/Kantine.jpg',
      '/images/Karriere.JPG',
      '/images/Kontakt.JPG',
      '/images/Mitarbeitende.JPG',
      '/images/Partnerinnen.JPG',
      '/images/Produkte_Künstlerin.jpg',
      '/images/Produkte.JPG',
      '/images/Spendenprojekete.jpg',
      '/images/ÜberUnsZiele.JPG',
      '/images/Weiterbildung.jpg',
      '/images/Wettbewerbe.JPG',
      '/images/CookieRichtlinien.JPG'
    ],
    showLightbox: false,
  }),
  methods: {
    slideTo(index) {
      this.currentSlide = index;
    },
    openLightbox() {
      this.showLightbox = true;
    },
    closeLightbox() {
      this.showLightbox = false;
    },
  },
})
</script>

<style>
.carousel {
  width: 100%;
  align-self: center;
}

.carousel__item {
  max-height: 400px;
}

.carousel__thumbnail {
  max-height: 200px;
  width: 90%;
}
</style>
