<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import EmployeesComponent from '@/components/Employees/EmployeesComponent.vue'
import PicBackgroundComponent from "@/components/PicBackground/PicBackgroundComponent.vue";
import '../view.css'

export default defineComponent({
  name: "MitarbeitendeDetailView",
  components: {
    FooterComponent,
    PicBackgroundComponent,
    EmployeesComponent
  },
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        anchors:['Header','Padmoon','Janana','Hackebeil','Footer'],
        navigationTooltips: ['1', '2', '3', '4','5']
      },
      imagePath: 'images/DetailsMitarbeitende.JPG',
      title: 'Mitarbeitende im Detail'
    };
  }
});
</script>

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
      <!-- Section for displaying employee details -->
      <div class="section" :anchor="options.anchors[1]">
        <div class="content-inner">
          <!-- Pass employee name to EmployeesComponent for display -->
          <EmployeesComponent :employeeName="options.anchors[1]" />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[2]">
        <div class="content-inner">
          <EmployeesComponent :employeeName="options.anchors[2]" />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[3]">
        <div class="content-inner">
          <EmployeesComponent :employeeName="options.anchors[3]" />
        </div>
      </div>
      <!-- Footer component -->
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
