<script>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "https://fonts.googleapis.com/css2?family=Dubai:wght@400;700&display=swap";




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
#app {
  font-family: sans-serif; 
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
}



body{
  background-color: rgb(247, 216, 169);
}
</style>