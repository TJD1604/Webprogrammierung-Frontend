<template>
  <div>
    <!-- Full-page component with options -->
    <full-page :options="options">
      <!-- Section for background image -->
      <div class="section">
        <div class="position-relative">
          <!-- Background image component with dynamic image path and title -->
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Section for contact information and form -->
      <div class="section">
        <div class="content-inner">
          <div class="container">
            <div class="row mx-auto">
              <!-- Contact information card -->
              <div class="col-md-4">
                <div class="arrival-div">
                  <div class="card m-5 rounded border p-2 self-center mx-auto">
                    <div class="card-body">
                      <h4 class="card-title">Kontaktinformationen</h4>
                      <p class="card-text"><strong>Email:</strong> kontakt@example.com</p>
                      <p class="card-text"><strong>Telefon:</strong> +49 123 456789</p>
                      <p class="card-text"><strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt</p>
                      <p class="card-text"><strong>Ansprechpartner:</strong> Max Mustermann</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Contact form -->
              <div class="col-md-8">
                <div class="arrival-div">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer component -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/ContactForm/ContactForm.vue';
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';
import '../view.css';

export default defineComponent({
  name: 'KontaktView',
  components: {
    FooterComponent,
    ContactForm,
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
      imagePath: 'images/Kontakt.JPG',
      title: 'Kontakt'
    }
  }
})
</script>
