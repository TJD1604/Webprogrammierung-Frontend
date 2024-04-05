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
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        anchors: ['Header', 'Porsche', 'BerlinerStadtwerke', 'SAP', 'Gucci', 'Footer'],
        navigationTooltips: ['1', '2', '3', '4', '5', '6']
      },
      imagePath: 'images/DetailsPartnerinnen.jpg',
      title: 'Partner:innen im Detail'
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
      <div class="section" anchor="Porsche">
        <div class="content-inner">
          <div class="button-container">
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
            <div>
              <img class="partners-image" src="/images/PorscheWappen.png" alt="Wappen Porsche">
            </div>
          </div>
        </div>
      </div>
      <div class="section" anchor="BerlinerStadtwerke">
        <div class="content-inner">
          <div class="button-container">
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
            <div>
              <img class="partners-image" src="/images/BerlinerStadtwerke.png" alt="Berliner Stadtwerke">
            </div>
          </div>
        </div>
      </div>
      <div class="section" anchor="SAP">
        <div class="content-inner">

          <div class="button-container">
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
            <div>
              <img class="partners-image" src="/images/SAP.png" alt="SAP">
            </div>
          </div>
        </div>
      </div>
      <div class="section" anchor="Gucci">
        <div class="content-inner">
          <div class="button-container">
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
            <div>
              <img class="partners-image" src="/images/Gucci.png" alt="Gucci">
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