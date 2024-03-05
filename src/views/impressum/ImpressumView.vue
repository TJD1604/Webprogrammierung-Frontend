<script lang="ts">
import { defineComponent } from "vue";

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import './ImpressumView.css'

export default defineComponent({
  name: "ImpressumView",
  components: {

    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/Impressum.jpg',
      title: 'Impressum'
    };
  }
});
</script>

<template>
  <div>

    <div class="position-relative">
      <PicBackgroundComponent :imagePath='imagePath' :title='title' />
    </div>
    <div class="textdev">
     <h2 class="subheading">Angaben gemäß § 5 TMG: <br></h2> 
    <p> Solidarity Studio <br> Alt-Friedrichsfelde 60 <br>10315 Berlin</p>
    <h2 class="subheading">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
    <p>Solidarity Studio<br>Alt-Friedrichsfelde 60, 10315 Berlin</p>
    <h2 class="subheading">Kontakt:</h2>
    <p>Telefon: +49 1234 56789<br>E-Mail: <a href="mailtos_bruckmoser22@hwr-berlin.de:" class="maillink"> s_bruckmoser22@hwr-berlin.de</a></p>
   </div>
  </div>
</template>