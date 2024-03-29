<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import './MitarbeitendeView.css'
export default defineComponent({
  name: "MitarbeitendeView",
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
      imagePath: 'images/Mitarbeitende.JPG',
      title: 'Mitarbeitende'
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
        <div class="content-inner">

          <div class="image-container">
            <div class="image">
              <img src="/images/MitarbeitendeIconH.png" alt="Image 1">
              <ul class="underline">
                <li>Hackebeil</li>
                <router-link to="/mitarbeitende-detail" class="link">erfahre mehr</router-link>
              </ul>
            </div>
            <div class="image">
              <img src="/images/MitarbeitendeIconP.png" alt="Image 2">
              <ul class="underline">
                <li>Padmoon</li>
                <router-link to="/mitarbeitende-detail" class="link">erfahre mehr</router-link>
              </ul>
            </div>
            <div class="image">
              <img src="/images/MitarbeitendeIconJ.png" alt="Image 3">
              <ul class="underline">
                <li>Janana</li>
                <router-link to="/mitarbeitende-detail" class="link">erfahre mehr</router-link>
              </ul>
            </div>
          </div>


        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
