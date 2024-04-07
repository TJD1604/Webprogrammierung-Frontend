<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">{{ employee.Name }}</h2>
          <p class="card-text"><strong>Position:</strong> {{ employee.Position }}</p>
          <p class="card-text"><strong>Über:</strong> {{ employee.Ueber }}</p>
          <div v-if="employee.Besondere_Faehigkeiten_001">
            <strong>Besondere Fähigkeiten:</strong>
            <ul class="list-unstyled">
              <li>{{ employee.Besondere_Faehigkeiten_001 }}</li>
              <li>{{ employee.Besondere_Faehigkeiten_002 }}</li>
              <li>{{ employee.Besondere_Faehigkeiten_003 }}</li>
            </ul>
          </div>
          <div v-if="employee.Interessen__001">
            <strong>Interessen:</strong>
            <ul class="list-unstyled">
              <li>{{ employee.Interessen__001 }}</li>
              <li>{{ employee.Interessen__002 }}</li>
              <li>{{ employee.Interessen__003 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      employeeName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        employee: {}
      };
    },
    mounted() {
      this.fetchEmployeeInfo();
    },
    methods: {
      async fetchEmployeeInfo() {
        try {
          const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:ThsJUgH7/mitarbeitenden/NA?mitarbeitende_name=${this.employeeName}`);
          const data = await response.json();
          this.employee = data.result1;
        } catch (error) {
          console.error('Error fetching employee info:', error);
        }
      }
    }
  }
  </script>
  
  <!-- Add Bootstrap CSS link -->
  <style>
  </style>
  