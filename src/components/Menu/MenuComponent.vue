<script>
  import './MenuComponent.css';
  export default {
    name: 'MenuComponent', // Name der Komponente
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      }
    }
  };
</script>


<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Menüschalter -->
    <div class="navbar-toggler" @click="toggleMenu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
      
      <!-- Seitliches Menü -->
      <div class="sidebar " :class="{ 'open': isOpen }">
        <button class="close-button" @click="closeMenu">X</button>
      </div>
    </nav>
  </div>
</template>