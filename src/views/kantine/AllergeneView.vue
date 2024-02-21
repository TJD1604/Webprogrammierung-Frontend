<script lang="ts">
import { defineComponent } from "vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";

export default defineComponent({
  name: "AllergeneView",
  components: {
    HeaderLineComponent,
    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/Allergene.jpg',
      title: 'Allgergene'
    };
  }
});
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0"/>
    </div>
    <div class="position-relative">
      <PicBackgroundComponent :imagePath='imagePath' :title='title' />
    </div>
    
  </div>
</template>