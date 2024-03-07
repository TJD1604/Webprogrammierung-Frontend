<script lang="ts">
import { defineComponent } from "vue";
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import '../view.css'
export default defineComponent({
  name: "WeiterbildungenView",
  components: {
    FooterComponent,
    PicBackgroundComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Weiterbildung.jpg',
      title: 'Weiterbildungen'
    };
  }
});
</script>

<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner"></div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
