<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'
export default defineComponent({
  name: "PartnerinnenDetailView",
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
        // Anchors for navigation tooltips
        anchors: ['Header', 'Porsche', 'BerlinerStadtwerke', 'SAP', 'Gucci', 'Footer'],
         // Tooltip text for navigation
        navigationTooltips: ['1', '2', '3', '4', '5', '6']
      },
      imagePath: 'images/DetailsPartnerinnen.jpg', // Path for the background image
      title: 'Partner:innen im Detail' // Title for the background image
    };
  }
});
</script>

<template>
  <div>
    <!-- Utilizes a full-page component -->
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <!-- Background image component -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
       <!-- Section for Porsche partner details -->
      <div class="section" anchor="Porsche">
        <div class="content-inner">
          <div class="button-container">
             <!-- Text and image content for Porsche -->
            <div class="partners-text">
              <h2 class="h2">Porsche</h2>
              <p>
                <b>Partner seit:</b> 2024
              </p>
              <p>
                <b>Die Porsche AG ist ein deutscher Automobilhersteller mit Sitz in Stuttgart-Zuffenhausen.</b> Das
                Unternehmen
                wurde 1931 von Ferdinand Porsche gegründet und ist heute eine der bekanntesten Automarken der Welt.
                Porsche
                ist bekannt für seine Sportwagen und Luxusfahrzeuge, die für ihre hohe Qualität und Leistungsfähigkeit
                geschätzt werden. Jedoch sind sie auch für ihr großes Herz bekannt, denn sie unterstützen viele soziale
                Projekte, wie auch unsere Galerie.
              </p>
              <!-- Links to Porsche social media -->
              <div class="socialmedia">
                <a href="https://www.instagram.com/porsche/" target="_blank">
                  <img src="/images/instagram.png" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/porsche" target="_blank">
                  <img src="/images/facebook.png" alt="Facebook">
                </a>
                <a href="https://twitter.com/porsche" target="_blank">
                  <img src="/images/x.png" alt="Twitter">
                </a>
              </div>
            </div>
            <!-- Image for Porsche partner -->
            <div>
              <img class="partners-image" src="/images/PorscheWappen.png" alt="Wappen Porsche">
            </div>
          </div>
        </div>
      </div>
      <!-- Section for Berliner Stadtwerke partner details -->
      <div class="section" anchor="BerlinerStadtwerke">
        <div class="content-inner">
          <div class="button-container">
            <!-- Text and image content for Berliner Stadtwerke -->
            <div class="partners-text">
              <h2 class="h2">Berliner Stadtwerke</h2>
              <p>
                <b>Partner seit:</b> 2024
              </p>
              <p>
                <b>Die Berliner Stadtwerke sind ein kommunales Unternehmen, das für die Versorgung der Stadt Berlin mit
                  Energie verantwortlich ist.</b> Sie sind einer der größten Energieversorger in Deutschland
                und
                versorgen Millionen von Haushalten und Unternehmen mit Strom, Gas und Wasser. Die Berliner Stadtwerke
                engagieren sich auch für den Umweltschutz und erneuerbare Energien und unterstützen viele soziale
                Projekte
                in der Stadt.
              </p>
              <!-- Links to Berliner Stadtwerke social media -->
              <div class="socialmedia">
                <a href="https://www.instagram.com/berliner_stadtwerke/" target="_blank">
                  <img src="/images/instagram.png" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/berlinerstadtwerke" target="_blank">
                  <img src="/images/facebook.png" alt="Facebook">
                </a>
                <a href="https://twitter.com/StadtwerkBerlin" target="_blank">
                  <img src="/images/x.png" alt="Twitter">
                </a>
              </div>
            </div>
            <!-- Image for Berliner Stadtwerke partner -->
            <div>
              <img class="partners-image" src="/images/BerlinerStadtwerke.png" alt="Berliner Stadtwerke">
            </div>
          </div>
        </div>
      </div>
      <!-- Section for SAP partner details -->
      <div class="section" anchor="SAP">
        <div class="content-inner">
          <div class="button-container">
            <!-- Text and image content for SAP -->
            <div class="partners-text">
              <h2 class="h2">SAP</h2>
              <p>
                <b>Partner seit:</b> 2024
              </p>
              <p>
                <b>SAP ist ein deutsches Softwareunternehmen, das sich auf Unternehmenssoftware spezialisiert hat.</b>
                Das
                Unternehmen wurde 1972 gegründet und hat sich seitdem zu einem der größten Softwareunternehmen der Welt
                entwickelt. SAP bietet eine breite Palette von Softwarelösungen für Unternehmen aller Größen und
                Branchen
                an
                und ist bekannt für seine innovativen Produkte und Dienstleistungen. SAP engagiert sich auch für soziale Projekte und unterstützt viele gemeinnützige Organisationen auf der ganzen Welt.
              </p>
              <!-- Links to SAP social media -->
              <div class="socialmedia">
                <a href="https://www.instagram.com/sap/" target="_blank">
                  <img src="/images/instagram.png" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/SAP/" target="_blank">
                  <img src="/images/facebook.png" alt="Facebook">
                </a>
                <a href="https://twitter.com/SAP" target="_blank">
                  <img src="/images/x.png" alt="Twitter">
                </a>
              </div>
            </div>
            <!-- Image for SAP partner -->
            <div>
              <img class="partners-image" src="/images/SAP.png" alt="SAP">
            </div>
          </div>
        </div>
      </div>
      <!-- Section for Gucci partner details -->
      <div class="section" anchor="Gucci">
        <div class="content-inner">
          <div class="button-container">
            <!-- Text and image content for Gucci -->
            <div class="partners-text">
              <h2 class="h2">Gucci</h2>
              <p>
                <b>Partner seit:</b> 2024
              </p>
              <p>
                <b>Gucci ist ein italienisches Modeunternehmen, das für seine luxuriösen Modeartikel und Accessoires
                  bekannt ist.</b> Das Unternehmen wurde 1921 gegründet und hat sich seitdem zu einer der bekanntesten
                Modemarken
                der Welt entwickelt. Gucci ist bekannt für seine hochwertigen Produkte und sein einzigartiges Design bekannt,aber auch für ihr soziales Engagement. Sie unterstützen zum Beispiel viele soziale Projekte und Organisationen, die sich für die Rechte von Frauen und Kindern einsetzen.
              </p>
              <!-- Links to Gucci social media -->
              <div class="socialmedia">
                <a href="https://www.instagram.com/gucci/" target="_blank">
                  <img src="/images/instagram.png" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/GUCCI" target="_blank">
                  <img src="/images/facebook.png" alt="Facebook">
                </a>
                <a href="https://twitter.com/gucci" target="_blank">
                  <img src="/images/x.png" alt="Twitter">
                </a>
              </div>
            </div>
            <!-- Image for Gucci partner -->
            <div>
              <img class="partners-image" src="/images/Gucci.png" alt="Gucci">
            </div>
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
.socialmedia {
  margin: 50px;
  display: flex;
  justify-content: space-around;
}

.socialmedia img {
  width: 80px;
  height: auto;
}

.partners-image {
  max-height: 50vh;
  width: auto;
  margin-right: 30px;
}
</style>