<script lang="ts">
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import CharityComponent from '@/components/Charity/CharityComponent.vue'
import { defineComponent } from 'vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import '../view.css'
export default defineComponent({
  name: 'SpendenprojekteDetailView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    CharityComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        anchors: [
          'Header',
          'Wasserenergie',
          'Bewegung',
          'Wald',
          'Tiere',
          'Kinder',
          'Medizin',
          'Footer'
        ],
        navigationTooltips: ['1', '2', '3', '4', '5', '6', '7', '8']
      },

      charity: {
        titel: [
          'Quellen der Kraft',
          'Wegbereiter der Bewegung',
          'Grüne Hüter',
          'Pfotenliebe',
          'Kinderwelten',
          'Heilende Hände'
        ],
        info: [
          "Unsere Initiative 'Quellen der Kraft' zielt darauf ab, den Zugang zu sauberem Wasser und erneuerbarer Energie für Gemeinden auf der ganzen Welt zu verbessern. Durch die Finanzierung von Brunnenbau, Wasserfiltrationsanlagen und erneuerbaren Energieprojekten setzen wir uns für eine erfrischte Welt ein, in der jeder Zugang zu lebenswichtigen Ressourcen hat.",

          "Als 'Wegbereiter der Bewegung' setzen wir uns für barrierefreie Mobilität ein und fördern alternative Transportlösungen. Durch den Ausbau von Fußgänger- und Radwegen, den Einsatz von Elektrofahrzeugen und die Förderung öffentlicher Verkehrsmittel gestalten wir neue Wege für Gemeinden und schaffen eine nachhaltige Mobilitätslandschaft.",

          "Unsere Initiative 'Grüne Hüter' widmet sich der Aufforstung und dem Schutz bestehender Wälder. Wir pflanzen Bäume, schützen natürliche Lebensräume und fördern Umweltbildungsprogramme, um eine waldige Zukunft zu erhalten, die uns allen zugutekommt.",

          "Mit 'Pfotenliebe' unterstützen wir Tierheime und Straßentierprojekte auf der ganzen Welt. Unsere Spenden helfen, streunende Hunde zu retten, medizinische Versorgung zu bieten und liebevolle Zuhause zu finden, damit jeder Vierbeiner eine Chance auf ein glückliches Leben hat.",

          "Bei 'Kinderwelten' steht das Wohl von Kindern im Mittelpunkt. Wir unterstützen Bildungsprojekte, Gesundheitsinitiativen und den Schutz vor Ausbeutung und Gewalt, um jedem Kind die Möglichkeit zu geben, in einer sicheren und liebevollen Umgebung aufzuwachsen.",

          "Unsere Initiative 'Heilende Hände' konzentriert sich auf die Bereitstellung von medizinischer Versorgung für bedürftige Gemeinschaften weltweit. Wir finanzieren medizinische Einrichtungen, medizinisches Personal und lebensrettende Behandlungen, um jedem Menschen einen Weg zur Gesundheit zu ermöglichen."
        ],
        amount: [15500, 23000, 18000, 9000, 27000, 32000],
        imageP: [
          '/accordion/water.jpg',
          '/accordion/mobility.jpg',
          '/accordion/tree.jpg',
          '/accordion/dog.png',
          '/accordion/children.jpg',
          '/accordion/health.jpg'
        ]
      },
      imagePath: 'images/DetailsSpendenprojekte.jpg',
      title: 'Spendenprojekte im Details'
    }
  }
})
</script>
<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[0]">
        <div class="content-inner">
          <CharityComponent
            :title="charity.titel[0]"
            :amount="charity.amount[0]"
            :info="charity.info[0]"
            :imageP="charity.imageP[0]"
          />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[1]">
        <div class="content-inner">
          <CharityComponent
            :title="charity.titel[1]"
            :amount="charity.amount[1]"
            :info="charity.info[1]"
            :imageP="charity.imageP[1]"
          />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[2]">
        <div class="content-inner">
          <CharityComponent
            :title="charity.titel[2]"
            :amount="charity.amount[2]"
            :info="charity.info[2]"
            :imageP="charity.imageP[2]"
          />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[3]">
        <div class="content-inner">
          <CharityComponent
            :title="charity.titel[3]"
            :amount="charity.amount[3]"
            :info="charity.info[3]"
            :imageP="charity.imageP[3]"
          />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[4]">
        <div class="content-inner">
          <CharityComponent
            :title="charity.titel[4]"
            :amount="charity.amount[4]"
            :info="charity.info[4]"
            :imageP="charity.imageP[4]"
          />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[5]">
        <div class="content-inner">
          <CharityComponent
            :title="charity.titel[5]"
            :amount="charity.amount[5]"
            :info="charity.info[5]"
            :imageP="charity.imageP[5]"
          />
        </div>
      </div>

      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
