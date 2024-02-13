<script>
  import './MenuComponent.css';
  export default {
    name: 'MenuComponent',
    props: {
      isOpen: Boolean // Definiere die Prop isOpen vom Typ Boolean
    },
    methods: {
      toggleMenu() {
        this.$emit('update:isOpen', !this.isOpen); // Emitiere das Event mit dem aktualisierten Wert
      },
      closeMenu() {
        this.$emit('update:isOpen', false); // Emitiere das Event, um das Menü zu schließen
      }
    }
  };
</script>


<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="sidebar" :class="{ 'open': isOpen }">
        <button class="close-button" @click="closeMenu">X</button>
        <ul class="list-group w-75">
          <li class="list-group-item bg-transparent border-0"><a href="#" class="text-dark">Menüpunkt 1</a></li>
          <li class="list-group-item bg-transparent border-0"><a href="#" class="text-dark">Menüpunkt 2</a></li>
          <li class="list-group-item bg-transparent border-0"><a href="#" class="text-dark">Menüpunkt 3</a></li>
          <!-- Weitere Menüpunkte hier -->
        </ul>
      </div>
    </nav>
  </div>
</template>