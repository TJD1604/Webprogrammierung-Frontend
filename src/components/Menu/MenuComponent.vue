<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="overlay" v-if="isOpen" @click="changeMenu"></div>
      <div class="sidebar" :class="{ open: isOpen }">
        <button class="close-button" @click="changeMenu">X</button>
        <ul class="list-group w-75">
          <li v-for="(item, index) in menuItems" :key="index" @mouseenter="toggleSubMenu(index)">
            <h5 :class="{ 'main-title': !item.subItems, 'sub-menu-title': item.subItems }">
              <RouterLink :to="item.link">{{ item.title }}</RouterLink>
            </h5>
            <ul v-if="item.subItems && openSubMenu === index" class="sub-menu">
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" :class="'sub-item-' + subIndex">
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
import { defineComponent, type PropType, ref } from 'vue'
import { RouterLink } from 'vue-router'
import './MenuComponent.css'

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
