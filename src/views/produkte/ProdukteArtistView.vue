<script lang="ts">
import { defineComponent } from "vue";
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "ProdukteArtistView",
  components: {
    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/Produkte_Künstlerin.jpg',
      title: 'Produkte - Künstler:innen'
    };
  }
});
</script>

<template>
  <div>
    <div class="position-relative">
      <PicBackgroundComponent :imagePath='imagePath' :title='title' />
    </div>
    
  </div>
</template>