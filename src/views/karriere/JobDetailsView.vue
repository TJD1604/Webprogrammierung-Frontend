<!-- This template defines the structure of the JobDetailsView component. -->
<template>
  <div>

    <full-page :options="options">

      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Section displaying the selected job details -->
      <div class="section">
        <div class="content-inner">
          <!-- Displaying the selected job -->
          <div class="row">
            <div class="col-7">
              <div v-if="job">
                <!-- Displaying job details -->
                <h2>{{ job.position }}</h2>
                <p>Application deadline: {{ job.applicationDeadline }}</p>
                <p>Tasks: {{ job.tasks }}</p>
                <p>Requirements: {{ job.requirements }}</p>
                <p>Salary: {{ job.salary }}</p>
              </div>
              <div v-else>
                <p>Job details are loading...</p>
              </div>
            </div>
            <!-- Placeholder for employer image -->
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
    // Data initialization including options for full-page component, image path, title, and null job
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: '../images/DetailsJobangebote.jpg',
      title: 'Job Details',
      job: null // Initialize job as null
    };
  },
  props: {
    jobId: {
      type: String,
      required: true
    }
  },
  mounted() {
    // Call method to fetch job details once component is mounted
    this.fetchJobDetails();
  },
  methods: {
    // Method to asynchronously fetch job details
    async fetchJobDetails() {
      try {
        const response = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:wI9xKrmK/jobs/${this.jobId}`);
        this.job = response.data; // Update job with received data
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    }
  }
});
</script>
