<script lang="ts">
import { defineComponent } from "vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";
import CollageComponent from "@/components/Collage/CollageComponent.vue";
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import '../view.css'
export default defineComponent({
  name: "ProdukteView",
  components: {
    HeaderLineComponent,
    PicBackgroundComponent,
    CollageComponent
  },
  data() {
    return {
      imagePath: 'images/Produkte.JPG',
      title: 'Produkte'
    };
  }
});
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <div class="position-relative">
      <PicBackgroundComponent :imagePath="imagePath" :title="title" />
    </div>
    <div class="content-inner">
      <CollageComponent />
    </div>
  </div>
</template>