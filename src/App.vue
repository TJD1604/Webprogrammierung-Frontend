<script>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";


export default defineComponent({
  name: "App",
  components: {
    HeaderLineComponent,
    RouterView,
    FooterComponent
  }
});
</script>


<template>
  <div class="position-relative">
    <HeaderLineComponent class="position-absolute top-0"/>
  </div>
  <RouterView />
  <FooterComponent />
</template>

<style>

@font-face {
  font-family: Dubai;
  src: url('./fonts/Dubai-Font/DubaiW23-Regular.woff2') format('woff2'),
       url('./fonts/Dubai-Font/DubaiW23-Regular.woff') format('woff'),
       url('./fonts/Dubai-Font/DubaiW23-Regular.tte') format('truetype');
}

#app {
  font-family: Dubai, sans-serif; 
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
}
</style>