<script lang="ts">
import { defineComponent } from 'vue'
import VideoBackgroundComponent from '@/components/VideoBackground/VideoBackgroundComponent.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import FooterComponent from "@/components/Footer/FooterComponent.vue";


import '../view.css'
export default defineComponent({
  name: 'HomeView',
  components: {
    VideoBackgroundComponent,
    FooterComponent,
    CustomButton
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
    <div>
      <div class="position-relative">
        <HeaderLineComponent class="position-absolute top-0" />
      </div>
      <full-page :options="options">
        <div class="section">
          <div class="position-relative">
            <VideoBackgroundComponent />
          </div>
        </div>
        <div class="section">
          <div class="content-inner">
            <div class="button-container">
              <div>
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
            <div class="button-container">
              <div>
                <img
                  src="/slogan.png"
                  alt="Description of your image"
                  class="right-image"
                />
              </div>
              <div class="circle-background">
                <div class="circle-content">
                  
                  <p><em>"Wir wollen durch inspirierende Kunstwerke Menschen dazu ermutigen, ihre Kreativität zu entfalten und gleichzeitig eine Gemeinschaft zu schaffen, die sich für das Wohl anderer einsetzt." </em><br><br>- Kristina Rubin, Head of Marketing </p>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="section">
        
          <FooterComponent />
        </div>
      </full-page>
    </div>
  </div>
</template>
<style scoped>

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
