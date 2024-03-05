<script lang="ts">
import { defineComponent } from "vue";
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "ProdukteDetailView",
  components: {
    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/DetailsProdukte.jpg',
      title: 'Unsere Produkte im Detail'
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