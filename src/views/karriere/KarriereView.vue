<!-- This template defines the structure of the KarriereView component. -->
<template>
  <div>
    <!-- Utilizes a full-page component with options -->
    <full-page :options="options">
      <!-- First section containing a PicBackgroundComponent -->
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Second section displaying information about the employer -->
      <div class="section">
        <div class="content-inner" style="width: 90% !important">
          <!-- Title for employer information -->
          <h2 style="align-self: self-start">We as an Employer</h2>
          <!-- Render info cards -->
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <!-- Loop through cards and render InfoCardComponent for each -->
                <div class="col-md-4 mt-5" v-for="(item, index) in cards" :key="index">
                  <InfoCardComponent>
                    <template v-slot:front>
                      <div>
                        {{ item.front }}
                      </div>
                    </template>
                    <template v-slot:back>
                      <div>
                        {{ item.back }}
                      </div>
                    </template>
                  </InfoCardComponent>
                </div>
              </div>
            </div>
            <!-- ContactComponent for job application -->
            <div class="col-md-4" style="align-self: center">
              <ContactComponent
                imageText=" Click the heart to become an employee yourself"
                imagePath="/heart.png"
                style="width: 78%; margin-right: 0; margin-left: auto"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Third section containing the FooterComponent -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import InfoCardComponent from '@/components/InfoCard/InfoCardComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import ContactComponent from '@/components/ContactComponent/ContactComponent.vue'
import '../view.css'

export default defineComponent({
  name: 'KarriereView',
  components: {
    FooterComponent,
    PicBackgroundComponent,
    InfoCardComponent,
    ContactComponent
  },
  data() {
    // Data initialization including options for full-page component, image path, title, and cards array
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Karriere.JPG',
      title: 'Career',
      cards: [
        // Array of cards containing front and back content
        {
          front: 'Mobile Work',
          back: 'Flexibility, Productivity: Work from anywhere, anytime.'
        },
        {
          front: 'Fruit at the Workplace',
          back: 'Health, Energy: Fresh snacks for creative minds.'
        },
        {
          front: 'Training Opportunities',
          back: 'Learning, Growth: Opportunities for professional development and training.'
        },
        {
          front: 'Flexible Working Hours',
          back: 'Balance, Freedom: Work according to individual rhythm.'
        },
        {
          front: 'Corporate Health Promotion',
          back: 'Well-being, Prevention: Programs for healthy employees.'
        },
        {
          front: 'Employee Events',
          back: 'Team Spirit, Fun: Shared experiences to strengthen bonds.'
        }
      ]
    }
  }
})
</script>
