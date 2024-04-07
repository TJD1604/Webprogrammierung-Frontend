<template>
  <!-- Container for employee information -->
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <!-- Employee name -->
        <h2 class="card-title">{{ employee.Name }}</h2>
        <!-- Employee position -->
        <p class="card-text"><strong>Position:</strong> {{ employee.Position }}</p>
        <!-- Employee overview -->
        <p class="card-text"><strong>Über:</strong> {{ employee.Ueber }}</p>
        <!-- Display special skills if available -->
        <div v-if="employee.Besondere_Faehigkeiten_001">
          <strong>Besondere Fähigkeiten:</strong>
          <ul class="list-unstyled">
            <!-- List of special skills -->
            <li>{{ employee.Besondere_Faehigkeiten_001 }}</li>
            <li>{{ employee.Besondere_Faehigkeiten_002 }}</li>
            <li>{{ employee.Besondere_Faehigkeiten_003 }}</li>
          </ul>
        </div>
        <!-- Display interests if available -->
        <div v-if="employee.Interessen__001">
          <strong>Interessen:</strong>
          <ul class="list-unstyled">
            <!-- List of interests -->
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
    // Prop for employee name
    employeeName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // Initialize employee object
      employee: {}
    };
  },
  mounted() {
    // Fetch employee information when component is mounted
    this.fetchEmployeeInfo();
  },
  methods: {
    // Method to fetch employee information
    async fetchEmployeeInfo() {
      try {
        // Fetch data from API using employee name
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:ThsJUgH7/mitarbeitenden/NA?mitarbeitende_name=${this.employeeName}`);
        // Parse response data
        const data = await response.json();
        // Set employee data
        this.employee = data.result1;
      } catch (error) {
        // Handle error if fetching fails
        console.error('Error fetching employee info:', error);
      }
    }
  }
}
</script>

<!-- Add Bootstrap CSS link -->
<style>
</style>
