<template>
    <div class="flip-card" @mouseenter="flipCard(true)" @mouseleave="flipCard(false)">
      <div class="flip-card-inner" :class="{ flipped: isFlipped }">
        <div class="flip-card-front">
          <div class="content">
            <slot name="front"></slot>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="content">
            <slot name="back"></slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFlipped: false
      };
    },
    methods: {
      flipCard(status) {
        this.isFlipped = status;
      }
    }
  };
  </script>
  
  <style scoped>
  .flip-card {
    perspective: 1000px;
    width: 200px; /* Breite der Karte */
    height: 300px; /* Höhe der Karte */
  }
  
  .flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border: 1px solid #ccc; /* Rand hinzufügen */
    border-radius: 10px; /* Abgerundete Ecken */
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    border-radius: 10px; /* Abgerundete Ecken */
    justify-content: center; /* Horizontal zentrieren */
    align-items: center; /* Vertikal zentrieren */
  }
  
  .content {
    text-align: center; /* Inhalt zentrieren */
  }
  
  .flip-card-front {
    background-color: #fff;
  }
  
  .flip-card-back {
    background-color: rgb(224, 204, 180);
    color: white;
    transform: rotateY(180deg);
  }
  </style>
  