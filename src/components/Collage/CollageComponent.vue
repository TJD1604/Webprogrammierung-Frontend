<template>
  <div class="collage">
    <p class="slide-info"> <b>Slide Me!</b></p>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" class="carousel__item" alt="Slide" @click="openLightbox">
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
        <img :src="image.src" class="carousel__thumbnail" alt="Thumbnail" @click="slideTo(index)">
      </Slide>
    </Carousel>

    <lightbox-component
      :show-lightbox="showLightbox"
      :current-slide="currentSlide"
      :images="images"
      @close-lightbox="closeLightbox"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import LightboxComponent from './LightboxComponent.vue'

import imagesData from './images.json';
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CollageComponent',
  components: {
    Carousel,
    Slide,
    LightboxComponent
  },
  data: () => ({
    currentSlide: 0,
    images: imagesData ,
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
.collage{
 padding-bottom: 20px;
}
.slide-info{
  text-align: center;
}
</style>
