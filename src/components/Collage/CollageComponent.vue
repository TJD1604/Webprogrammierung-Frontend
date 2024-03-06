<template>
  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="image" class="carousel__item" alt="Slide">
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
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CollageComponent',
  components: {
    Carousel,
    Slide,
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
  }),
  methods: {
    slideTo(index) {
      this.currentSlide = index;
    },
  },
})
</script>

<style>
.carousel{
  width: 80%;
  align-self: center;
}
.carousel__item {
  max-height: 500px;
}

.carousel__thumbnail {
  max-height: 200px; /* Set the maximum height for the thumbnails */
  
  width: 90%;
}
</style>