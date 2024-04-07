<script lang="ts">
import { defineComponent } from 'vue'
import VideoBackgroundComponent from '@/components/VideoBackground/VideoBackgroundComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";

import '../view.css'

export default defineComponent({
  name: 'HomeView',
  components: {
    VideoBackgroundComponent,
    FooterComponent,
    CustomButton,
    HeaderLineComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      
    }
  },
  
})
</script>

<template>
  <div>
    <div class="position-relative">
      <!-- Header line component positioned at the top -->
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <!-- Utilizes a full-page component with options -->
    <full-page :options="options">
      <!-- First section containing a VideoBackgroundComponent -->
      <div class="section">
        <div class="position-relative">
          <VideoBackgroundComponent />
        </div>
      </div>
      <!-- Second section containing content and buttons -->
      <div class="section">
        <div class="content-inner">
          <!-- Container for buttons and descriptive text -->
          <div class="button-container">
            <div>
              <h2 class="h2">Discover</h2>
              <p class="info-text">
                Discover what makes our team so special! Visit us and enjoy delicious
                <br />
                treats in our cozy cafeteria, participate in exciting competitions<br />
                and expand your knowledge through inspiring further education. <br />There is much
                to discover and enjoy - come by and experience it yourself! <br /><strong
                  >#Discover #StrongTogether</strong
                >
              </p>
            </div>

            <!-- Custom buttons for different destinations -->
            <CustomButton
              buttonText="Competitions"
              imagePath="/images/Competitions.JPG"
              destination="/competitions"
            />
            <CustomButton
              buttonText="Further Education"
              imagePath="/images/Education.jpg"
              destination="/education"
            />
            <CustomButton
              buttonText="Cafeteria"
              imagePath="/images/Cafeteria.jpg"
              destination="/cafeteria"
            />
          </div>
          <!-- Container for additional image and quote -->
          <div class="button-container">
            <div>
              <!-- Image displaying a slogan -->
              <img
                src="/slogan.png"
                alt="Description of your image"
                class="right-image"
              />
            </div>
            <!-- Circular background with quote content -->
            <div class="circle-background">
              <div class="circle-content">
                
                <!-- Quote about creativity and community -->
                <p><em>"We want to encourage people to unleash their creativity through inspiring artworks while also creating a community dedicated to the well-being of others." </em><br><br>- Kristina Rubin, Head of Marketing </p>
                
              </div>
              
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

<style scoped>

/* Styling for circular background */
.circle-background {
  position: relative;
  width: 600px; /* Adjust the size of your circle */
  height: 400px; /* Adjust the size of your circle */
  background-color: rgb(210, 184, 157);
  display:flex;
}

/* Styling for right image */
.right-image {
  position: relative;
  width: 500px;
  height: 400px;
  object-fit: cover; 
}

/* Styling for quote content */
.circle-content {
  display:flex;
  padding: 40px 40px;

  align-self: center;
  justify-self: center;
  text-align: left;
  margin-top: 20px;
  color: #fff;
  text-align: center;
}


</style>
