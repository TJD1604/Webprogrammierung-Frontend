<script lang="ts">
import { defineComponent } from 'vue';
import MenuComponent from '@/components/Menu/MenuComponent.vue';
import './HeaderLineComponent.css';

export default defineComponent({
  data() {
    // Initialize state variables for header and menu
    return {
      isHeaderHidden: false,
      isMenuOpen: false,
    };
  },
  methods: {
    // Toggle the menu
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // Close the menu
    closeMenu(): void {
      this.isMenuOpen = false;
    },
    // Navigate to the home page
    homelink(): void {
      this.$router.push('/');
    },
    // Handle scroll event
    handleScroll(event: { deltaY: number; }) {
      // Check scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        this.isHeaderHidden = true;
      } else {
        // Scrolling up
        this.isHeaderHidden = false;
      }
    },
  },
  mounted() {
    // Attach wheel event listener on component mount
    window.addEventListener('wheel', this.handleScroll);
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  destroyed() {
    // Remove wheel event listener on component destroy
    window.removeEventListener('wheel', this.handleScroll);
  },
  components: {
    MenuComponent,
  },
});
</script>

<template>
  <!-- Header component -->
  <div>
    <header class="header" :class="{ 'header-hidden': isHeaderHidden }">
      <div>
        <div class="row justify-content-center align-items-center">
          <!-- Menu button -->
          <div class="col-2">
            <button class="menu-button" @click="toggleMenu">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
          </div>
          <!-- Logo -->
          <div class="col-8 text-center">
            <img src="../../../public/logo.png" alt="Logo" class="logo img-fluid" @click="homelink">
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </header>
    <!-- Menu component -->
    <MenuComponent :isOpen="isMenuOpen" @update:isOpen="isMenuOpen = $event" />
  </div>
</template>
