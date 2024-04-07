<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'

export default defineComponent({
  name: 'AllergeneView',
  components: {
    FooterComponent,
    PicBackgroundComponent
  },
  data() {
    // Data properties 
    return {
      options: {
        // Configuration options for full-page component
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Allergene.jpg', // Path for the background image
      title: 'Allergene' // Title for the background image
    }
  }
})
</script>

<template>
  <div>
     <!-- Utilizes a full-page component-->
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <!-- Background image component -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <h2 class="h2">Hinweis zu Allergenen</h2>
            </div>
            <div class="button-container"><p> <b>Informationen zu Allergenen</b> <br> Hier finden Sie eine Übersicht über die verschiedenen Allergene, die in unseren Speisen enthalten sein können. Bitte beachten Sie, dass die Speisekarte regelmäßig wechselt und die Allergene daher variieren können. Wenn Sie spezielle Anforderungen haben, zögern Sie nicht, uns zu kontaktieren. Wir helfen Ihnen gerne weiter. </p>
            </div>
              <!-- Table displaying allergen information -->
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
      </div>
      <div class="section">
        <!-- Footer component -->
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<style>
.tabellendiv{
margin-top: 20px;
margin-left: 80px;
margin-right: 80px;
}
.acronym{
    font-weight: bold;
}
.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: solid #CCC 1px;
    border-radius: 5px;
    table-layout: fixed;
  }
  
  th, td {
    padding: 10px;
    border-bottom: solid #CCC 1px;
  }
  
  th:first-child, td:first-child {
    border-left: solid #CCC 1px;
  }
  
  th:last-child, td:last-child {
    border-right: solid #CCC 1px;
  }
  
</style>
