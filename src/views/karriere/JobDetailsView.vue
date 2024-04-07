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
          <!-- Display the selected job here -->
          <div class="row">
            <div class="col-7">
              <div v-if="job">
                <h2>{{ job.position }}</h2>
                <p>Bewerbungsfrist: {{ job.bewerbungsfrist }}</p>
                <p>Aufgaben: {{ job.aufgaben }}</p>
                <p>Anforderungen: {{ job.anforderungen }}</p>
                <p>Gehalt: {{ job.gehalt }}</p>
              </div>
              <div v-else>
                <p>Jobdetails werden geladen...</p>
              </div>
            </div>
            <div class="col-3">
              <img class="img-fluid" src="../../../images/employer.png"/>
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

<script>
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import axios from 'axios';

export default defineComponent({
  name: "JobDetailsView",
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
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: '../images/DetailsJobangebote.jpg',
      title: 'Jobangebot im Detail',
      job: null // Initialize the job with null
    };
  },
  props: {
    jobId: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.fetchJobDetails(); // Call the method to fetch job details once the component is mounted
  },
  methods: {
    async fetchJobDetails() {
      try {
        const response = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:wI9xKrmK/jobs/${this.jobId}`);
        this.job = response.data; // Update the job with the received data
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    }
  }
});
</script>
