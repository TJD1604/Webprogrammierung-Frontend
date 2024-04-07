<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
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
          <div class="button-container">
            <h2 class="h2">Mitarbeitende</h2>
          </div>
          <div class="button-container"><p>
              <b>Lernen Sie unser Team kennen!</b> <br> Unsere Mitarbeitenden sind das Herzstück von Solidarity Studio. Jede*r
              Einzelne bringt ihre/seine einzigartige Perspektive und Expertise ein, um eine bessere Welt zu gestalten. Erfahren
              Sie mehr über die Menschen, die Solidarity Studio zu dem machen, was es ist.
            </p></div>
          <div class="image-container">
            <div class="image">
              <img src="/images/MitarbeitendeIconH.png" alt="Image 1">
              <ul class="underline">
                <li>Hackebeil</li>
                <router-link to="/mitarbeitende-detail#Hackebeil" class="link">Erfahre mehr</router-link>
              </ul>
            </div>
            <div class="image">
              <img src="/images/MitarbeitendeIconP.png" alt="Image 2">
              <ul class="underline">
                <li>Padmoon</li>
                <router-link to="/mitarbeitende-detail#Padmoon" class="link">Erfahre mehr</router-link>
              </ul>
            </div>
            <div class="image">
              <img src="/images/MitarbeitendeIconJ.png" alt="Image 3">
              <ul class="underline">
                <li>Janana</li>
                <router-link to="/mitarbeitende-detail#Janana" class="link">Erfahre mehr</router-link>
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

<style>
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}

.image-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
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
