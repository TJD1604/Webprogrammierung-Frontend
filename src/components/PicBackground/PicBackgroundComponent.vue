<script lang="ts">
import './PicBackgroundComponent.css'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imagePath: String,
    title: String
  },
  data() {
    return {
      showArrow: false,
      timeoutId: null
    };
  },
  mounted() {
    this.timeoutId = setTimeout(() => {
      this.showArrow = true;
    }, 2000);
  },
 
})
</script>

<template>
  <div class="pic-background-wrapper">
    <div class="pic-background">
      <img
        :src="imagePath"
        class="background-image"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1"
      />
      <div class="pic-bottom">
        <h1 class="title">{{ title }}</h1>
        <a href="/produkte" class="transparent-button">→</a>
        <a v-if="showArrow" class="scroll-down-arrow">↓</a>
      </div>
    </div>
  </div>
</template>
