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
#app {
  font-family: "Lucida Sans", "Lucida Grande", sans-serif; 
}
</style>