<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ReviewCaourselComponent from '@/components/ReviewCarousel/ReviewCarouselComponent.vue'
import '../view.css'
import CustomButton from '@/components/CustomButton/CustomButton.vue'


export default defineComponent({
  name: 'AboutUsView',
  components: {
    PicBackgroundComponent,
    FooterComponent,
    ReviewCaourselComponent,
    CustomButton
  },
  data() {
    return {
      imagePath: 'images/ÜberUnsZiele.JPG',
      title: 'Über Uns',
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      }
    }
  }
})
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0" />
    </div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <div class="button-container">
            <div>
              <h2 class="h2">Kunst für den Wandel</h2>
              <p class="info-text">
                <b>Willkommen bei Solidarity Studio</b> – einem Ort, an dem Kunst auf Engagement
                trifft und Veränderungen bewirkt werden. Seit unserer Gründung haben wir uns dem
                Ziel verschrieben, durch kreative Ausdrucksformen und gemeinschaftliche Aktionen
                eine positive Wirkung zu erzielen. Unser Studio wurde aus der Überzeugung geboren,
                dass Kunst eine kraftvolle Plattform für soziale Veränderungen ist. Wir glauben
                daran, dass Kunst nicht nur schön sein sollte, sondern auch eine Botschaft tragen
                und eine Gemeinschaft inspirieren kann. Bei Solidarity Studio bringen wir
                Künstlerinnen und Künstler zusammen, um gemeinsam an Projekten zu arbeiten, die
                Themen wie soziale Gerechtigkeit, Umweltschutz und Bildung behandeln.
              </p>
            </div>
            <ReviewCaourselComponent />
          </div>
          <div class="button-container">
            <div>
            <p class="stars"> ★★★★☆</p>
            <h2 class="h2">Unser Rating</h2>
          </div>
              <CustomButton
                buttonText="Auszeichnungen"
                imagePath="/images/Auszeichnungen.JPG"
                destination="/auszeichnungen"
              /><CustomButton
                buttonText="Geschichte"
                imagePath="/images/Geschichte.jpg"
                destination="/geschichte"
              />
            
            
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
.stars{
  font-size: 100px;
  text-align: center;
  color: rgb(210, 184, 157);
}

</style>

