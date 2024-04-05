<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import FAQComponent from '@/components/FAQ/FAQComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'FAQView',
  components: {
    PicBackgroundComponent,
    FooterComponent,
    FAQComponent
  },
  data() {
    return {
      imagePath: 'images/FAQ.jpg',
      title: 'FAQ',
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
            <h2 class="h2">Häufig gestellte Fragen</h2>
          </div>
            <FAQComponent/>
          
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
<style>
.stars {
  font-size: 100px;
  text-align: center;
  color: rgb(210, 184, 157);
}
</style>
