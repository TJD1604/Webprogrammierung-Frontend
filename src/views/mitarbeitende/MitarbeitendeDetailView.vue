<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "MitarbeitendeDetailView",
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
        anchors:['Header','Tina','Jana','Tim','Footer'],
        navigationTooltips: ['1', '2', '3', '4','5']
      },
      imagePath: 'images/DetailsMitarbeitende.JPG',
      title: 'Mitarbeitende im Detail'
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
      <div class="section" anchor="Tina">
        <div class="content-inner"></div>
      </div>
      <div class="section" anchor="Jana">
        <div class="content-inner"></div>
      </div>
      <div class="section" anchor="Tim">
        <div class="content-inner"></div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
