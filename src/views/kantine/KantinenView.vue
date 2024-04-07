<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <MenuCardComponent/>
          <!-- Infobox for visitor information -->
          <div class="infobox-container" style="width: 100%;">
            <div class="infobox bg-light p-4 rounded mt-5">
              <h3 class="mb-2">Besucherinformationen</h3>
              <p class="mb-1">Studierende und Ehrenamtliche erhalten 3€ Rabatt.</p>
              <p class="mb-0">Kinder können Kinderportionen bekommen, diese kosten die Hälfte.</p>
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

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import MenuCardComponent from '@/components/menucard/MenuCardComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'

export default defineComponent({
  name: "KantinenView",
  components: {
    FooterComponent,
    MenuCardComponent,
    PicBackgroundComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Kantine.jpg',
      title: 'Kantine'
    };
  }
});
</script>

<style scoped>
.infobox {
  font-size: 0.9rem;
}

</style>
