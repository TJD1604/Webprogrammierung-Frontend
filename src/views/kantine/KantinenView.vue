<!-- This template defines the structure of the KantinenView component. -->
<template>
  <div>
    <!-- Utilizes a full-page component with options -->
    <full-page :options="options">
      <!-- First section containing a PicBackgroundComponent -->
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Second section containing content including MenuCardComponent and an infobox -->
      <div class="section">
        <div class="content-inner">
          <MenuCardComponent/>
          <!-- Infobox for visitor information -->
          <div class="infobox-container" style="width: 100%;">
            <div class="infobox bg-light p-4 rounded mt-5">
              <h3 class="mb-2">Visitor Information</h3>
              <p class="mb-1">Students and volunteers receive a €3 discount.</p>
              <p class="mb-0">Children can get child portions, which cost half the price.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Third section containing the FooterComponent -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import MenuCardComponent from '@/components/menucard/MenuCardComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'

export default defineComponent({
  name: "KantinenView",
  components: {
    FooterComponent,
    MenuCardComponent,
    PicBackgroundComponent
  },
  data() {
    // Data initialization including options for full-page component, image path, and title
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Kantine.jpg',
      title: 'Kantine'
    };
  }
});
</script>

<style scoped>
.infobox {
  font-size: 0.9rem;
}
</style>
