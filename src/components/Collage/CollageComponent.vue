<template>
  <div class="collage">
    <div v-for="(image, index) in images" :key="index" class="image" :style="{ 'background-image': 'url(' + image + ')' }"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      images: [
        '/public/images/Produkte.JPG',
        '/public/images/Produkte.JPG',
        '/public/images/Produkte.JPG',
        '/public/images/Produkte.JPG'
      ] as string[]
    };
  },
  mounted() {
    this.shuffleImages();
  },
  methods: {
    // Eine Methode zum Mischen der Bilder
    shuffleImages() {
      // Fisher-Yates Shuffle Algorithmus
      for (let i = this.images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.images[i], this.images[j]] = [this.images[j], this.images[i]];
      }
    }
  }
}
</script>

<style scoped>
.collage {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Automatische Spaltenanpassung */
  gap: 10px; /* Abstand zwischen den Bildern */
}

.image {
  height: 200px; /* Höhe der Bilder */
  background-size: cover;
  background-position: center;
}
</style>
