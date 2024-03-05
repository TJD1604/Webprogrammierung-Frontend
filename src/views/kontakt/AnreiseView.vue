<script lang="ts">
import { defineComponent } from "vue";
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import ArrivalComponent from "@/components/Arrival/ArrivalComponent.vue";
import '../view.css'
export default defineComponent({
  name: "AnreiseView",
  components: {
    PicBackgroundComponent,
    ArrivalComponent
  },
  data() {
    return {
      imagePath: 'images/Anreise.JPG',
      title: 'Anreise'
    };
  }
});
</script>

<template>
  <div>
    <div class="position-relative">
      <PicBackgroundComponent :imagePath='imagePath' :title='title' />
    </div>
    <div class="content-inner">
      <ArrivalComponent />
    </div>
    
  </div>
</template>