<template>
  <div class="carousel-container">
    <div class="carousel" ref="carousel">
      <div class="review" v-for="(review, index) in reviews" :key="index" :class="{ 'active': index === currentSlide }">
        <div class="stars">{{ review.stars }}</div>
        <div class="username">{{ review.username }}</div>
        <div class="text">{{ review.text }}</div>
      </div>
    </div>
    <div class="navigation">
      <button class="prev" @click="prevSlide">←</button>
      <div class="dots">
        <span class="dot" v-for="(review, index) in reviews" :key="index" :class="{ 'active': index === currentSlide }" @click="jumpToSlide(index)"></span>
      </div>
      <button class="next" @click="nextSlide">→</button>
    </div>
  </div>
</template>

<script>
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
      this.currentSlide = (this.currentSlide - 1 + this.reviews.length) % this.reviews.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.reviews.length;
    },
    jumpToSlide(index) {
  this.currentSlide = index;
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('wide');
    } else {
      dot.classList.remove('wide');
    }
  });
}
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  height: 350px;
  place-items: center;
  align-self: center;
  display: grid;
}

.carousel {
  width: 300px;
  overflow: hidden;
  position: relative;
  justify-items: center;
}

.review {
  justify-self: center;
  display: none;
  width: 300px;
  padding: 20px;
  border: 1px solid rgb(210, 184, 157);
  transition: transform 0.5s ease;
}

.review.active {
  display: grid;
  justify-self: center;
}

.stars {
  font-size: 24px;
  margin-bottom: 10px;
  color: rgb(210, 184, 157);
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
  border-radius: 5px;
}

.prev {
  left: 5px; 
}

.next {
  right: 5px; 
}

.prev:hover, .next:hover {
  background-color: rgba(210, 184, 157, 0.5);
}

.navigation {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dots {
  display: flex;
  margin: 0 10px;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease; 
}

.dot.active {
  background-color:  rgb(210, 184, 157);
  border-radius: 10px; 
  width: 16px; 
}
</style>
