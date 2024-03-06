<script lang="ts">
import { defineComponent } from "vue";
import CollageComponent from "@/components/Collage/CollageComponent.vue";
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import '../view.css'
export default defineComponent({
  name: "ProdukteView",
  components: {
    PicBackgroundComponent,
    CollageComponent
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
      <PicBackgroundComponent :imagePath="imagePath" :title="title" />
    </div>
    <div class="content-inner">
      <h2 class="h2">Duetto cittadino antico</h2>
      <p class="info-text">Willkommen in unserer Galerie des antiken städtischen Duettos! Tauchen Sie ein in die Vergangenheit und entdecken Sie die harmonische Melodie vergangener Zeiten, als die Straßen von Kutschen durchzogen wurden und das städtische Leben im sanften Takt verging.

Schreiten Sie durch unsere virtuelle Galerie und lassen Sie sich von den künstlerischen Meisterwerken vergangener Epochen verzaubern. Swipen Sie durch die Bilder, um die Schönheit antiker Städte zu erleben, eingefangen in Momenten des Alltags und der Feierlichkeiten.
</p>
      <CollageComponent/>
    </div>
  </div>
</template>

