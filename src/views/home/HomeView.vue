<template>
  <!-- Main template for the HomeView component -->
  <div>
    <div>
      <!-- HeaderLineComponent within a position-relative container -->
      <div class="position-relative">
        <HeaderLineComponent class="position-absolute top-0" />
      </div>
      <!-- Full-page component with options -->
      <full-page :options="options">
        <!-- First section with VideoBackgroundComponent -->
        <div class="section">
          <div class="position-relative">
            <VideoBackgroundComponent />
          </div>
        </div>
        <!-- Second section with content and buttons -->
        <div class="section">
          <div class="content-inner">
            <!-- Button-container for main content -->
            <div class="button-container">
              <div>
                <!-- Title and info text -->
                <h2 class="h2">Entdecken</h2>
                <p class="info-text">
                  Entdecke, was unser Team so besonders macht! Besuche uns und gönn dir köstliche
                  <br />
                  Leckereien in unserer gemütlichen Kantine, nimm an spannenden Wettbewerben teil<br />
                  und erweitere dein Wissen durch inspirierende Weiterbildungen. <br />Es gibt viel
                  zu entdecken und zu genießen – komm vorbei und erlebe es selbst! <br /><strong
                    >#Entdecken #GemeinsamStark</strong
                  >
                </p>
              </div>
              <!-- Custom buttons for different sections -->
              <CustomButton
                buttonText="Wettbewerbe"
                imagePath="/images/Wettbewerbe.JPG"
                destination="/wettbewerbe"
              />
              <CustomButton
                buttonText="Weiterbildungen"
                imagePath="/images/Weiterbildung.jpg"
                destination="/weiterbildungen"
              />
              <CustomButton
                buttonText="Kantine"
                imagePath="/images/Kantine.jpg"
                destination="/kantine"
              />
            </div>
            <!-- Additional button container -->
            <div class="button-container">
              <div>
                <!-- Image on the right -->
                <img
                  src="/slogan.png"
                  alt="Description of your image"
                  class="right-image"
                />
              </div>
              <!-- Circle background with text content -->
              <div class="circle-background">
                <div class="circle-content">
                  <p><em>"Wir wollen durch inspirierende Kunstwerke Menschen dazu ermutigen, ihre Kreativität zu entfalten und gleichzeitig eine Gemeinschaft zu schaffen, die sich für das Wohl anderer einsetzt." </em><br><br>- Kristina Rubin, Head of Marketing </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Third section with footer -->
        <div class="section">
          <FooterComponent />
        </div>
      </full-page>
    </div>
  </div>
</template>

<script lang="ts">
// Import necessary modules and components
import { defineComponent } from 'vue'
import VideoBackgroundComponent from '@/components/VideoBackground/VideoBackgroundComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import FooterComponent from "@/components/Footer/FooterComponent.vue";

// Import CSS styles
import '../view.css'

export default defineComponent({
  // Component name
  name: 'HomeView',
  // Registering components
  components: {
    VideoBackgroundComponent,
    FooterComponent,
    CustomButton
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
    }
  },
})
</script>

<style scoped>
/* Scoped styles */
.circle-background {
  position: relative;
  width: 600px; /* Adjust the size of your circle */
  height: 400px; /* Adjust the size of your circle */
  background-color: rgb(210, 184, 157);
  display:flex;
}

.right-image {
  position: relative;
  width: 500px;
  height: 400px;
  object-fit: cover; 
}

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
