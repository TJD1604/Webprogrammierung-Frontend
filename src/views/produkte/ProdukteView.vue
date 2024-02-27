<script lang="ts">
import { defineComponent } from "vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "ProdukteView",
  components: {
    HeaderLineComponent,
    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/Produkte.JPG',
      title: 'Produkte'
    };
  }
});
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0"/>
    </div>
    <div class="position-relative">
      <PicBackgroundComponent :imagePath='imagePath' :title='title' />
    </div>
    <div class="content-inner">
      
      <div class="button-container"> 
        <div>
      <h2 class="h2">Entdecken</h2>
      <p class="info-text">
        Entdecke, was unser Team so besonders macht! Besuche uns und gönn dir köstliche <br> Leckereien
        in unserer gemütlichen Kantine, nimm an spannenden Wettbewerben teil<br>  und erweitere dein
        Wissen durch inspirierende Weiterbildungen. <br>Es gibt viel zu entdecken und zu genießen –
        komm vorbei und erlebe es selbst! <br /><strong>#Entdecken #GemeinsamStark</strong>
      </p>
    </div>
     
      
    </div>
  </div>
    
  </div>
</template>