<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { RouterLink } from 'vue-router'
import './MenuComponent.css';

export default defineComponent({
  name: 'MenuComponent',
  props: {
    isOpen: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  methods: {
    toggleMenu(): void {
      this.$emit('update:isOpen', !this.isOpen);
    },
    closeMenu(): void {
      this.$emit('update:isOpen', false);
    }
  },
  components: {
    RouterLink
  }
});
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="overlay" v-if="isOpen" @click="closeMenu"></div>
      <div class="sidebar" :class="{ 'open': isOpen }">
        <button class="close-button" @click="closeMenu">X</button>
        <ul class="list-group w-75">
          <li class="list-group-item bg-transparent border-0 text-dark"><RouterLink to="/">home</RouterLink></li>
          <li class="list-group-item bg-transparent border-0 text-dark"><RouterLink to="/kontakt">kontakt</RouterLink></li>
          <li class="list-group-item bg-transparent border-0 text-dark"><RouterLink to="/">home</RouterLink></li>
          <!-- Weitere Menüpunkte hier -->
        </ul>
      </div>
    </nav>
  </div>
</template>