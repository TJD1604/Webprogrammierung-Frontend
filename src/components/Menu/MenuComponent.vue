<template>
  <!-- This template defines a menu component with a sidebar layout. -->
  <div>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Overlay for closing menu -->
      <div class="overlay" v-if="isOpen" @click="changeMenu"></div>
      <!-- Sidebar menu -->
      <div class="sidebar" :class="{ open: isOpen }">
        <!-- Close button -->
        <button class="close-button" @click="changeMenu">X</button>
        <!-- List of menu items -->
        <ul class="list-group w-75">
          <!-- Loop through menu items -->
          <li v-for="(item, index) in menuItems" :key="index" @mouseenter="toggleSubMenu(index)">
            <!-- Main menu item title with router link -->
            <h5 :class="{ 'main-title': !item.subItems, 'sub-menu-title': item.subItems }">
              <RouterLink :to="item.link">{{ item.title }}</RouterLink>
            </h5>
            <!-- Submenu items if available and submenu is open -->
            <ul v-if="item.subItems && openSubMenu === index" class="sub-menu">
              <!-- Loop through submenu items -->
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" :class="'sub-item-' + subIndex">
                <!-- Submenu item title with router link -->
                <RouterLink :to="subItem.link"><p style="font-family: 'Lucida Sans'; margin: 0;">{{ subItem.title }}</p></RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue';
import { RouterLink } from 'vue-router';
import './MenuComponent.css';

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
    // Control whether the menu is open or closed
    isOpen: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  methods: {
    // Emit event to toggle menu state
    changeMenu() {
      this.$emit('update:isOpen', !this.isOpen);
    },
  },
  setup() {
    // Define menu items
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
        { title: 'Aktuelle Künstlerin', link: '/produkte-artist' },
        { title: 'Unsere Produkte im Detail', link: '/produkte-detail' }
      ]},
      { title: 'Partner:innen', link: '/partnerinnen', subItems: [
        { title: 'Partner:innen im Detail', link: '/partnerinnen-detail' }
      ]},
      { title: 'Karriere', link: '/karriere', subItems: [
        { title: 'Jobangebote', link: '/job' }
      ]},
      { title: 'Weiterbildungen', link: '/weiterbildungen', subItems: [
        { title: 'Weiterbildungen im Detail', link: '/weiterbildungen-detail' }
      ]},
      { title: 'Wettbewerbe', link: '/wettbewerbe' },
      { title: 'Kantine', link: '/kantine', subItems: [
        { title: 'Allergene', link: '/allergene' }
      ]},
      { title: 'Kontakt', link: '/kontakt' },
      { title: 'Anreise', link: '/anreise' },
      { title: 'Datenschutzrichtlinien', link: '/datenschutz' },
      { title: 'Impressum', link: '/impressum' },
    ];

    // Reference to currently open submenu
    const openSubMenu = ref<number | null>(null);

    // Toggle submenu visibility
    const toggleSubMenu = (index: number) => {
      openSubMenu.value = openSubMenu.value === index ? null : index;
    };

    // Close submenu
    const closeMenu = () => {
      openSubMenu.value = null;
      // Emit event to close menu if needed
    };

    return {
      menuItems,
      openSubMenu,
      toggleSubMenu,
      closeMenu
    };
  },
  components: {
    RouterLink
  }
});
</script>

