<script lang="ts">
import { defineComponent } from "vue";

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'

export default defineComponent({
  name: "AuszeichnungenView",
  components: {

    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/Auszeichnungen.JPG',
      title: 'Auszeichnungen'
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