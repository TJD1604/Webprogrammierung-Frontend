<template>
  <!-- Navigation bar -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Overlay div -->
      <div class="overlay" v-if="isOpen" @click="changeMenu"></div>
      <!-- Sidebar -->
      <div class="sidebar" :class="{ open: isOpen }">
        <!-- Close button -->
        <button class="close-button" @click="changeMenu">X</button>
        <!-- Menu items -->
        <ul class="list-group w-75">
          <!-- Main menu items -->
          <li v-for="(item, index) in menuItems" :key="index" @mouseenter="toggleSubMenu(index)">
            <h5 :class="{ 'main-title': !item.subItems, 'sub-menu-title': item.subItems }">
              <!-- Router link -->
              <RouterLink :to="item.link">{{ item.title }}</RouterLink>
            </h5>
            <!-- Submenu -->
            <ul v-if="item.subItems && openSubMenu === index" class="sub-menu">
              <!-- Submenu items -->
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" :class="'sub-item-' + subIndex">
                <!-- Router link for submenu items -->
                <RouterLink :to="subItem.link">
                  <!-- Submenu item title -->
                  <p style="font-family: 'Lucida Sans'; margin: 0;">{{ subItem.title }}</p>
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue'
import { RouterLink } from 'vue-router'

interface MenuItem {
  title: string;
  link: string;
  subItems?: SubItem[];
}

interface SubItem {
  title: string;
  link: string;
}

export default defineComponent({
  name: 'MenuComponent',
  props: {
    isOpen: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  methods: {
    changeMenu(){
      this.$emit('update:isOpen', !this.isOpen)
    },
  },
  setup() {
    const menuItems: MenuItem[] = [
      { title: 'Home', link: '/' },
      { title: 'Über uns', link: '/aboutUs', subItems: [
        { title: 'Auszeichnungen', link: '/auszeichnungen' },
        { title: 'Geschichte', link: '/geschichte' },
        { title: 'FAQ', link: '/faq' }
      ]},
      { title: 'Mitarbeitende', link: '/mitarbeitende', subItems: [
        { title: 'Mitarbeitende im Detail', link: '/mitarbeitende-detail' }
      ]},
      { title: 'Unsere Spendenprojekte', link: '/spendenprojekte', subItems: [
        { title: 'Unsere Spendenprojekte im Detail', link: '/spendenprojekte-detail' }
      ]},
      { title: 'Produkte', link: '/produkte', subItems: [
        { title: 'Aktuelle Künstlerin', link: '/produkte-artist' }        
      ]},
      { title: 'Partner:innen', link: '/partnerinnen', subItems: [
        { title: 'Partner:innen im Detail', link: '/partnerinnen-detail' }
      ]},
      { title: 'Karriere', link: '/karriere', subItems: [
        { title: 'Jobangebote', link: '/job' }
      ]},
      { title: 'Weiterbildungen', link: '/weiterbildungen'},
      { title: 'Wettbewerbe', link: '/wettbewerbe' },
      { title: 'Kantine', link: '/kantine', subItems: [
        { title: 'Allergene', link: '/allergene' }
      ]},
      { title: 'Kontakt', link: '/kontakt' },
      { title: 'Anreise', link: '/anreise' },
      { title: 'Datenschutzrichtlinien', link: '/datenschutz' },
      { title: 'Impressum', link: '/impressum' },
    ]

    const openSubMenu = ref<number | null>(null)

    const toggleSubMenu = (index: number) => {
      openSubMenu.value = openSubMenu.value === index ? null : index
    }

    const closeMenu = () => {
      openSubMenu.value = null
      // Emit event to close menu if needed
    }

    return {
      menuItems,
      openSubMenu,
      toggleSubMenu,
      closeMenu
    }
  },
  components: {
    RouterLink
  }
})
</script>

<style>
/* Custom styles for sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -600px;
  width: 470px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: left 0.3s ease;
  z-index: 9999;
  overflow-y: scroll;
}

/* Hide scrollbar */
.sidebar::-webkit-scrollbar {
  width: 0;
}

/* Styling for sidebar when hovered */
.sidebar:hover {
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
}

/* Styling for open sidebar */
.sidebar.open {
  z-index: 9999;
  left: 0;
}

/* Overlay styling */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 13, 13, 0.756);
  z-index: 9998;
  pointer-events: auto;
}

/* Styling for close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  font-size: 18px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}

/* Styling for list group */
.list-group.w-75 {
  margin-top: 50px;
}

/* Styling for list group links */
.list-group.w-75 a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

/* Styling for main title */
.main-title {
  margin-left: 30px;
  margin-top: 3px;
  list-style-type: none;
  font-family: Lucida Sans;
  transition: transform 0.3s ease;
}

/* Hover effect for main title */
.main-title:hover {
  transform: scale(1.05);
}

/* Styling for submenu title */
.sub-menu-title {
  margin-left: 30px;
  margin-top: 3px;
  list-style-type: none;
  font-family: Lucida Sans;
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Hover effect for submenu title */
.sub-menu-title:hover {
  transform: scale(1.05);
}

/* Styling for submenu */
.sub-menu {
  margin-left: 40px;
  font-weight: normal;
  list-style-type: none;
}

/* Hover effect for submenu items */
.sub-item-0:hover,
.sub-item-1:hover,
.sub-item-2:hover {
  transform: scale(1.05);
}
</style>
