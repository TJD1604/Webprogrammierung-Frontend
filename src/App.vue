<script>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";


export default defineComponent({
  name: "App",
  components: {
    RouterView
  }
});
</script>


<template>
  <div>
    <RouterView />
  </div>
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