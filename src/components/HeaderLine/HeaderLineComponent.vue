<script>
import "./HeaderLineComponent.css";
import MenuComponent from '../Menu/MenuComponent.vue';

export default {
  name: "HeaderLine",
  data() {
    return {
      isHeaderHidden: false,
      isMenuOpen: false 
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; 
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  mounted() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      this.isHeaderHidden = currentScroll > lastScrollTop && currentScroll > 50;
      lastScrollTop = currentScroll;
    });
  },
  components: {
    MenuComponent
  }
};
</script>

<template>
  <div>
    <header class="header" :class="{ 'header-hidden': isHeaderHidden }">
      <div >
        <div  class="row justify-content-center align-items-center">
          <div class="col-2">
            <button class="menu-button" @click="toggleMenu">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
            </div>
            <div class="col-8 text-center">
              <img src="../../assets/logo.png" alt="Logo" class="logo img-fluid">
            </div>
            <div class="col-2"></div>
        </div>
      </div>
    </header>
    <MenuComponent :isOpen="isMenuOpen" @update:isOpen="isMenuOpen = $event" />
  </div>
</template>
