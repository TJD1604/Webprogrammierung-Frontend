<script lang="ts">
import { defineComponent } from 'vue';
import MenuComponent from '@/components/Menu/MenuComponent.vue';
import './HeaderLineComponent.css'

export default defineComponent({
  data() {
    return {
      isHeaderHidden: false,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu(){
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu(): void {
      this.isMenuOpen = false;
    },
    homelink(): void {
      this.$router.push('/');
    },
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
    // Attach wheel event listener
    window.addEventListener('wheel', this.handleScroll);
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  destroyed() {
    // Remove wheel event listener when component is destroyed
    window.removeEventListener('wheel', this.handleScroll);
  },
  components: {
    MenuComponent,
  },
});
</script>

<template>
  <div>
    <header class="header" :class="{ 'header-hidden': isHeaderHidden }">
      <div>
        <div class="row justify-content-center align-items-center">
          <div class="col-2">
            <button class="menu-button" @click="toggleMenu">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
          </div>
          <div class="col-8 text-center">
            <img src="../../../public/logo.png" alt="Logo" class="logo img-fluid" @click="homelink">
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </header>
    <MenuComponent :isOpen="isMenuOpen" @update:isOpen="isMenuOpen = $event" />
  </div>
</template>