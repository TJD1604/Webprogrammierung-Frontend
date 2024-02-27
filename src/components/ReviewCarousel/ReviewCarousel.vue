<template>
  <div class="carousel-container">
    <div class="carousel" ref="carousel">
      <div v-for="(review, index) in reviews" :key="index" class="review" :style="{ transform: `translateX(-${currentSlide * 320}px)` }">
        <div class="stars">{{ review.stars }}</div>
        <div class="username">{{ review.username }}</div>
        <div class="text">{{ review.text }}</div>
      </div>
    </div>
    <button class="prev" @click="prevSlide">←</button>
    <button class="next" @click="nextSlide">→</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentSlide: 0,
      reviews: [
        {
          stars: '★★★★★',
          username: 'Elena von Hohenstein',
          text: 'Die Charity-Galerie war ein traumhaftes Erlebnis! Die Kunstwerke waren inspirierend und die Atmosphäre war wirklich einzigartig. Die Kantine bot außerdem eine herrliche Auswahl an Speisen.'
        },
        {
          stars: '★★★★☆',
          username: 'Liam Patel',
          text: 'I had a fantastic time at the charity gallery! The artwork was breathtaking, and the canteen had some delicious treats. Highly recommended!'
        },
        {
          stars: '★★★★☆',
          username: 'Isabella Yamamoto',
          text: 'A experiência na galeria de caridade foi incrível! As obras de arte eram impressionantes e a comida na cantina estava deliciosa.'
        },
        {
          stars: '★★★★★',
          username: 'Antonio Gutiérrez',
          text: 'La galería de caridad fue una experiencia maravillosa. Las obras de arte eran impresionantes y la comida en la cafetería era deliciosa.'
        },
        {
          stars: '★★★★☆',
          username: 'Sophie Becker',
          text: 'Die Charity-Galerie war eine fantastische Erfahrung! Die Kunstwerke waren beeindruckend, und die Atmosphäre war sehr einladend. Die Kantine bot eine Vielzahl von köstlichen Speisen an.'
        },
        {
          stars: '★★★★★',
          username: 'Emma Wong',
          text: 'I had an amazing time at the charity gallery! The artwork was exceptional, and the canteen provided excellent options for refreshments.'
        },
        {
          stars: '★★★★☆',
          username: 'Luisa Mendez',
          text: 'La galería de caridad fue una experiencia increíble! Las obras de arte eran impresionantes, y la comida en la cafetería estaba deliciosa. Definitivamente volveré pronto.'
        }
      ]
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.reviews.length - 1;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.reviews.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    }
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.carousel {
  display: flex;
  overflow: hidden;
}

.review {
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  transition: transform 0.5s ease; /* Füge eine Transition für eine sanfte Animation hinzu */
}

.stars {
  font-size: 24px;
  margin-bottom: 10px;
}

.username {
  font-weight: bold;
  margin-bottom: 10px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

</style>
