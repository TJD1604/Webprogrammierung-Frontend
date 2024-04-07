<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import JoboverviewComponent from '@/components/Jobs/JoboverviewComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import axios from 'axios'; // Import Axios for API requests

// Define an interface for the job object to set the typing
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
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      imagePath: 'images/Jobangebote.JPG',
      title: 'Jobangebote',
      jobList: [] as Job[] // Initialize the job list as an empty array with the typing 'Job'
    };
  },
  mounted() {
    this.fetchJobData(); // Call the method to fetch job data once the component is mounted
  },
  methods: {
    async fetchJobData() {
      try {
        const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:wI9xKrmK/jobs'); // Perform the API request
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
          <div class="button-container">
            <div>
              <h2 class="h2">Unsere aktuell verfügbaren Stellen</h2>
              <p class="info-text">
                Du willst ein Teil des Solidarity Studios sein? Hier sind unsere aktuellen Stellenausschreibungen.
              </p>
            </div>
          </div>
          <!-- Iterate over the jobList and pass the data to JoboverviewComponent -->
          
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
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
