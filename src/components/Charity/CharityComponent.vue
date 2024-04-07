<template>
  <div class="button-container">
    <div>
      <h2 class="h2">{{ title }}</h2>
      <p>{{ info }}
      </p>
      <div class="number-section">
        <p class="big-number">{{ tweened.toFixed(0) }} €</p>
      </div>
    </div>
    <div>
        <img class="charity-img" :src="imageP">
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    
    title: String,
    amount: Number,
    info: String,
    imageP: String

  },
  data() {
    return {
      number: 0,
      tweened: 0
    }
  },
  watch: {
    amount(n) {
      gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
    }
  },
  mounted() {
    // Starten Sie die Animation für die vorher festgelegte Variable
    gsap.to(this, { duration: 0.5, tweened: this.amount })
  }
})
</script>
<style>
.big-number {
  font-weight: bold;
  font-size: 120px;
  color: rgb(210, 184, 157);
}
.charity-img{
    width: 600px;
    height: 500px;
    object-fit: cover;
}
.number-section{
    text-align: left;
}
</style>
