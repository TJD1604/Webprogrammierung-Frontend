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
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section" :anchor="options.anchors[1]">
        <div class="content-inner">
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
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
