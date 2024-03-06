<script lang="ts">
import { defineComponent } from "vue";

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import './AllergeneView.css'

export default defineComponent({
  name: "AllergeneView",
  components: {
    PicBackgroundComponent
  },
  data() {
    return {
      imagePath: 'images/Allergene.jpg',
      title: 'Allgergene'
    };
  }
});
</script>

<template>
  <div>

    <div class="position-relative">
      <PicBackgroundComponent :imagePath='imagePath' :title='title' />
    </div>
    <div class="tabellendiv">
      <table class="table">
  <tr>
    <th><b>Abkürzung</b></th>
    <th><b>Allergen</b></th>
  </tr>
  <tr>
    <td class="acronym">A</td>
    <td>Gluten</td>
  </tr>
  <tr>
    <td class="acronym">B</td>
    <td>Krebstiere</td>
  </tr>
  <tr>
    <td class="acronym">C</td>
    <td>Eier von Geflügel</td>
  </tr>
  <tr>
    <td class="acronym">D</td>
    <td>Fisch</td>
  </tr>
  <tr>
    <td class="acronym">E</td>
    <td>Erdnüsse</td>
  </tr>
  <tr>
    <td class="acronym">F</td>
    <td>Sojabohnen und -erzeugnisse</td>
  </tr>
  <tr>
    <td class="acronym">G</td>
    <td>Milch von Säugetieren</td>
  </tr>
  <tr>
    <td class="acronym">H</td>
    <td>Schalenfrüchte</td>
  </tr>
  <tr>
    <td class="acronym">L</td>
    <td>Sellerie</td>
  </tr>
  <tr>
    <td class="acronym">M</td>
    <td>Senf</td>
  </tr>
  <tr>
    <td class="acronym">N</td>
    <td>Sesamsamen</td>
  </tr>
  <tr>
    <td class="acronym">O</td>
    <td>Schwefeloxid und Sulfite</td>
  </tr>
  <tr>
    <td class="acronym">P</td>
    <td>Lupinen</td>
  </tr>
  <tr>
    <td class="acronym">R</td>
    <td>Weichtiere</td>
  </tr>
</table>



    </div>
  </div>
</template>