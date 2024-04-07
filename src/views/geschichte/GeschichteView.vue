<script lang="ts">
// Define a Vue component for the 'GeschichteView'
import { defineComponent } from "vue";

// Import required components
import FooterComponent from '@/components/Footer/FooterComponent.vue';
import TimelineComponent from '@/components/Timeline/TimelineComponent.vue';
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";

// Import CSS styles
import '../view.css'

export default defineComponent({
  // Component name
  name: "GeschichteView",
  
  // Registering components
  components: {
    FooterComponent,
    TimelineComponent,
    PicBackgroundComponent
  },
  
  // Data properties
  data() {
    return {
      // Options for full-page component
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      // Image path for background
      imagePath: 'images/Geschichte.jpg',
      // Title for the section
      title: 'Unsere Geschichte'
    };
  }
});

</script>
<template>
  <!-- Main template for the GeschichteView component -->
  <div>
    <!-- Full-page component with options -->
    <full-page :options="options">
      <!-- First section -->
      <div class="section">
        <div class="position-relative">
          <!-- PicBackgroundComponent with image path and title -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Second section -->
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <!-- Title for the timeline section -->
            <h2 class="h2">Unser Zeitstrahl</h2>
          </div>
          <!-- TimelineComponent to display timeline -->
          <TimelineComponent />
        </div>
      </div>
      <!-- Third section -->
      <div class="section">
        <!-- FooterComponent -->
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
