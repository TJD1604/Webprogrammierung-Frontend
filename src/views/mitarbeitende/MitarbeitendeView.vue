<script lang="ts">
// Import necessary components
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";

// Define the MitarbeitendeView component
export default defineComponent({
  name: "MitarbeitendeView",
  components: {
    FooterComponent,
    PicBackgroundComponent
  },
  data() {
    // Data properties for the MitarbeitendeView component
    return {
      // Configuration options for full-page component
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      // Path to the background image
      imagePath: 'images/Mitarbeitende.JPG',
      // Title of the MitarbeitendeView component
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
          <!-- Display the background image with PicBackgroundComponent -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <!-- Display the Mitarbeitende images with links -->
          <div class="image-container">
            <div class="image">
              <img src="/images/MitarbeitendeIconH.png" alt="Image 1">
              <ul class="underline">
                <li>Hackebeil</li>
                <!-- Link to Mitarbeitende detail -->
                <router-link to="/mitarbeitende-detail#Hackebeil" class="link">Erfahre mehr</router-link>
              </ul>
            </div>
            <div class="image">
              <img src="/images/MitarbeitendeIconP.png" alt="Image 2">
              <ul class="underline">
                <li>Padmoon</li>
                <!-- Link to Mitarbeitende detail -->
                <router-link to="/mitarbeitende-detail#Padmoon" class="link">Erfahre mehr</router-link>
              </ul>
            </div>
            <div class="image">
              <img src="/images/MitarbeitendeIconJ.png" alt="Image 3">
              <ul class="underline">
                <li>Janana</li>
                <!-- Link to Mitarbeitende detail -->
                <router-link to="/mitarbeitende-detail#Janana" class="link">Erfahre mehr</router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <!-- Display the FooterComponent -->
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>


<style>
/* Define styles for MitarbeitendeView component */
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}

.image-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    
}

.image {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    
}

.image img {
    max-width: 50%; 
    height: auto;
    border: 2px solid rgb(210, 184, 157);
    padding: 2px;
    border-radius: 5px;
}

.underline {
    font-family: 'Lucida Sans';
    text-align: center;
    list-style-type: none;
    padding: 0;
    margin-top: 40px;
    font-size: 20px;
    
}

.link{
    font-size: 16px;
    text-decoration: none;
    color: black;
}
</style>

