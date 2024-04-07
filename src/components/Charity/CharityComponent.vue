<template>
  <div class="button-container">
    <div>
      <h2 class="h2">{{ title }}</h2>
      <p>{{ info }}
      </p>
      <div class="number-section">
        <p class="big-number">{{ amount }} €</p>
      </div>
    </div>
    <div>
        <img class="charity-img" :src="imageP">
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    
    title: String,
    amount: Number,
    info: String,
    imageP: String

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
