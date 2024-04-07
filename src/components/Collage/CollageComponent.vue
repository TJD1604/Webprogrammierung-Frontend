<template>
  <!-- Container for the entire collage component -->
  <div class="collage">
    <!-- Information for sliding -->
    <p class="slide-info"><b>Slide Me!</b></p>
    
    <!-- Main carousel for large images -->
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <!-- Iterating over images to display in the carousel -->
      <Slide v-for="(image, index) in images" :key="index">
        <!-- Image displayed in the carousel -->
        <img :src="image.src" class="carousel__item" alt="Slide" @click="openLightbox">
      </Slide>
    </Carousel>

    <!-- Carousel for thumbnails -->
    <Carousel
      id="thumbnails"
      :items-to-show="5"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <!-- Iterating over images to display thumbnails -->
      <Slide v-for="(image, index) in images" :key="index">
        <!-- Thumbnail image -->
        <img :src="image.src" class="carousel__thumbnail" alt="Thumbnail" @click="slideTo(index)">
      </Slide>
    </Carousel>

    <!-- Lightbox component to display full-size images -->
    <template v-if="images.length > 0">
      <lightbox-component
        :show-lightbox="showLightbox"
        :current-slide="currentSlide"
        :images="images"
        @close-lightbox="closeLightbox"
      />
    </template>
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
    LightboxComponent
  },
  data() {
    // Data properties for the component
    return {
      currentSlide: 0, // Index of the current slide
      images: [], // Array to store image data
      showLightbox: false // Flag to control lightbox visibility
    };
  },
  mounted() {
    // Fetch images when the component is mounted
    this.fetchImages();
  },
  methods: {
    // Method to fetch images from the API
    async fetchImages() {
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:AJ7FqWLv/images', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        // Mapping fetched data to the images array
        this.images = data.map(image => ({ src: image.src, title: image.title, artist: image.artist, ort: image.ort, info: image.info }));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    // Method to navigate to a specific slide
    slideTo(index) {
      this.currentSlide = index;
    },
    // Method to open the lightbox
    openLightbox() {
      this.showLightbox = true;
    },
    // Method to close the lightbox
    closeLightbox() {
      this.showLightbox = false;
    }
  }
})
</script>

<style>
/* Styling for the collage component */
.collage{
 padding-bottom: 20px;
}

/* Styling for the information about sliding */
.slide-info{
  text-align: center;
}

/* Styling for the main carousel */
.carousel {
  width: 100%;
  align-self: center;
}

/* Styling for the large carousel items */
.carousel__item {
  max-height: 400px;
}

/* Styling for the carousel thumbnails */
.carousel__thumbnail {
  max-height: 200px;
  width: 90%;
}
</style>
