<!-- This template defines the structure of the JobView component. -->
<template>
  <div>

    <full-page :options="options">

      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <!-- Second section displaying available job positions -->
      <div class="section">
        <div class="content-inner">
          <!-- Title for available job positions -->
          <h2 style="align-self: self-start; margin-bottom: 10%;">Our Currently Available Positions</h2>
          <!-- Loop through jobList and pass data to JoboverviewComponent -->
          <JoboverviewComponent  
            v-for="job in jobList"
            :key="job.id"
            :jobId="job.id"
            :iconPath="job.iconPath"
            :jobTitle="job.position"
            :salary="job.salary"
          />
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
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import JoboverviewComponent from '@/components/Jobs/JoboverviewComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import axios from 'axios'; // Import Axios for API requests

// Define an interface for the Job object to enforce typing
interface Job {
  id: number;
  iconPath: string;
  position: string;
  salary: string;
}

export default defineComponent({
  name: "JobView",
  components: {
    FooterComponent,
    PicBackgroundComponent,
    JoboverviewComponent
  },
  data() {
    // Data initialization including options for full-page component, image path, title, and empty jobList array
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Jobangebote.JPG',
      title: 'Job Offers',
      jobList: [] as Job[] // Initialize jobList as an empty array with typing 'Job'
    };
  },
  mounted() {
    // Call method to fetch job data once component is mounted
    this.fetchJobData();
  },
  methods: {
    // Method to asynchronously fetch job data
    async fetchJobData() {
      try {
        const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:wI9xKrmK/jobs'); // Execute the API request
        // Extract only the required information for each job
        this.jobList = response.data.map((job: any) => ({
          id: job.id,
          iconPath: "../../../images/job-offer.png",
          position: job.position,
          salary: job.gehalt
        }));
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    }
  }
});
</script>
