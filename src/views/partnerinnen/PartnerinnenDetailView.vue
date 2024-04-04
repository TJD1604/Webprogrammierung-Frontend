<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "PartnerinnenDetailView",
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
        anchors:['Header','Porsche','BerlinerStadtwerke','SAP','Gucci','Footer'],
        navigationTooltips: ['1', '2', '3', '4','5','6']
      },
      imagePath: 'images/DetailsPartnerinnen.jpg',
      title: 'Partner:innen im Detail'
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
      <div class="section" anchor="Porsche">
        <div class="content-inner"></div>
      </div>
      <div class="section" anchor="BerlinerStadtwerke">
        <div class="content-inner"></div>
      </div>
      <div class="section" anchor="SAP">
        <div class="content-inner"></div>
      </div>
      <div class="section" anchor="Gucci">
        <div class="content-inner"></div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
