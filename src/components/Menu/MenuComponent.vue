<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { RouterLink } from 'vue-router'
import './MenuComponent.css'

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
      this.$emit('update:isOpen', !this.isOpen)
    },
    closeMenu(): void {
      this.$emit('update:isOpen', false)
    }
  },
  components: {
    RouterLink
  }
})
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="overlay" v-if="isOpen" @click="closeMenu"></div>
      <div class="sidebar" :class="{ open: isOpen }">
        <button class="close-button" @click="closeMenu">X</button>
        <ul class="list-group w-75">
          <li class="main-title">
            <RouterLink to="/"><h5>Home</h5></RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/kontakt"><h5>Kontakt</h5></RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/impressum"><h5>Impressum</h5></RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/aboutUs">
              <h5>Über uns</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/auszeichnungen">
              <h5>Auszeichnungen</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/geschichte">
              <h5>Geschichte</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/cookie">
              <h5>Cookie Richtlinien</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/datenschutz">
              <h5>Datenschutzrichtlinien</h5>
            </RouterLink>
          </li>
          
          <li class="main-title">
            <RouterLink to="/kantine">
              <h5>Kantine</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/allergene">
              <h5>Allergene</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/karriere">
              <h5>Karriere</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/job">
              <h5>Jobangebote</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/job-details">
              <h5>Jobangebote im Detail</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/anreise">
              <h5>Anreise</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/mitarbeitende">
              <h5>Mitarbeitende</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/mitarbeitende-detail">
              <h5>Mitarbeitende im Detail</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/partnerinnen">
              <h5>Partner:innen</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/partnerinnen-detail">
              <h5>Partner:innen im Detail</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/produkte">
              <h5>Produkte</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/produkte-artist">
              <h5>Produkte - Künstler:innen</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/produkte-detail">
              <h5>Unsere Produkte im Detail</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/spendenprojekte">
              <h5>Unsere Spendenprojekte</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/spendenprojekte-detail">
              <h5>Unsere Spendenprojekte im Detail</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/weiterbildungen">
              <h5>Weiterbildungen</h5>
            </RouterLink>
          </li>
          <li class="sub-menu">
            <RouterLink to="/weiterbildungen-detail">
              <h5>Weiterbildungen im Detail</h5>
            </RouterLink>
          </li>
          <li class="main-title">
            <RouterLink to="/wettbewerbe">
              <h5>Wettbewerbe</h5>
            </RouterLink>
          </li>
          <!-- Weitere Menüpunkte hier -->
        </ul>
      </div>
    </nav>

  </div>
</template>
