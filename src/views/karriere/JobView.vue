<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import JoboverviewComponent from '@/components/Jobs/JoboverviewComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import axios from 'axios'; // Importiere Axios für API-Anfragen

// Definiere eine Schnittstelle für das Jobobjekt, um die Typisierung festzulegen
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
      jobList: [] as Job[] // Initialisiere die Jobliste als leeres Array mit der Typisierung 'Job'
    };
  },
  mounted() {
    this.fetchJobData(); // Rufe die Methode zum Abrufen von Jobdaten auf, sobald die Komponente montiert ist
  },
  methods: {
    async fetchJobData() {
      try {
        const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:wI9xKrmK/jobs'); // Führe die API-Anfrage aus
        // Extrahiere nur die benötigten Informationen für jeden Job
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
          <h2 style="align-self: self-start; margin-bottom: 10%;">Unsere aktuell verfügbaren Stellen</h2>
          <!-- Durchlaufe die jobList und übergebe die Daten an JoboverviewComponent -->
          
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
