<script lang="ts">
import { defineComponent } from 'vue';
import MenuComponent from '@/components/Menu/MenuComponent.vue';

export default defineComponent({
  data() {
    // Data properties to manage header visibility and menu state
    return {
      isHeaderHidden: false, // Flag to control header visibility
      isMenuOpen: false, // Flag to control menu state
    };
  },
  methods: {
    // Method to toggle menu state
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // Method to close menu
    closeMenu(): void {
      this.isMenuOpen = false;
    },
    // Method to navigate to home page
    homelink(): void {
      this.$router.push('/');
    },
    // Method to handle scroll event
    handleScroll(event: { deltaY: number; }) {
      // Check the direction of scroll
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
    // Attach wheel event listener when component is mounted
    window.addEventListener('wheel', this.handleScroll);
  },
  // Lifecycle hook to remove event listener when component is destroyed
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  destroyed() {
    window.removeEventListener('wheel', this.handleScroll);
  },
  components: {
    MenuComponent,
  },
});
</script>

<template>
  <!-- Header section -->
  <div>
    <header class="header" :class="{ 'header-hidden': isHeaderHidden }">
      <div>
        <div class="row justify-content-center align-items-center">
          <div class="col-2">
            <!-- Button to toggle menu -->
            <button class="menu-button" @click="toggleMenu">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
          </div>
          <div class="col-8 text-center">
            <!-- Logo with click event to navigate to home page -->
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

<style>
/* Styling for header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0); /* Transparent background */
  padding: 10px 0;
  transition: top 0.3s; /* Smooth transition for header */
  z-index: 9997; /* Ensure header is on top */
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%); /* Gradient background */
}

/* Styling for hidden header */
.header-hidden {
  top: -200px; /* Move header off-screen */
}

/* Styling for menu button */
.menu-button {
  background-color: transparent; /* Transparent background */
  border: none; /* No border */
  color: #fff; /* White text color */
  font-size: 1.5em; /* Font size */
  cursor: pointer; /* Cursor style */
  margin-left: 15px; /* Left margin */
}

/* Styling for logo */
.logo {
  width: 40%; /* Set logo width */
  height: auto; /* Maintain aspect ratio */
  filter: brightness(0) invert(1); /* Apply invert effect */
}

/* Styling for logo with cursor pointer */
.logo.img-fluid {
  cursor: pointer; /* Cursor style */
}

/* Styling for menu button bars */
.bar1, .bar2, .bar3 {
  width: 20px; /* Bar width */
  height: 2px; /* Bar height */
  background-color: white; /* White background */
  margin: 6px 0; /* Bar margin */
  transition: 0.4s; /* Smooth transition */
}
</style>
