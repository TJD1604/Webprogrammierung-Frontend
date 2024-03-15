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
            <div class="button-container2">
              <div class="circle-background">
                <div class="circle-content">
                  <h1 class="circle-title">Your Circle Title</h1>
                  <p class="circle-info-text">Your Circle Info Text</p>
                </div>
              </div>
              <div>
                <img
                  src="/images/Weiterbildung.jpg"
                  alt="Description of your image"
                  class="right-image"
                />
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
  position: absolute;
  margin-left: 0px;
  justify-self: flex-start;

  padding-top: 20px;
  width: 500px; /* Adjust the size of your circle */
  height: 500px; /* Adjust the size of your circle */
  background-color: rgb(210, 184, 157);
  border-radius: 50%;
}

.right-image {
  position: relative;
  width: 500px; /* Adjust the size of your image */
  height: auto; /* Adjust the size of your image */
}

.circle-content {
  position: absolute;

  text-align: center;
  color: #fff; /* Adjust the color of your text */
}

.circle-title {
  font-size: 24px; /* Adjust the font size of your title */
  margin-bottom: 10px;
}

.circle-info-text {
  font-size: 16px; /* Adjust the font size of your info text */
  margin-bottom: 0;
}

</style>
