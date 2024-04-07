<template>
  <!-- Job preview container -->
  <div class="job-preview-container">
    <!-- Job preview row -->
    <div class="job-preview row align-items-center py-3">
      <!-- Column for job icon -->
      <div class="col-3 text-center">
        <!-- Job icon -->
        <img :src="iconPath" class="job-icon" alt="Job Icon">
      </div>
      <!-- Column for job title -->
      <div class="col-6 text-center">
        <div class="job-title">
          <!-- Router link to job details -->
          <router-link :to="{ path: '/job-details/' + jobId }" class="custom-router-link">
            {{ jobTitle }}
          </router-link>
        </div>
      </div>
      <!-- Column for salary -->
      <div class="col-3 text-center">
        <div class="salary">{{ salary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Prop for job ID
    jobId: {
      type: String,
      required: false
    },
    // Prop for icon path
    iconPath: {
      type: String,
      required: false
    },
    // Prop for job title
    jobTitle: {
      type: String,
      required: true
    },
    // Prop for job salary
    salary: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* Custom styles for job preview container */
.job-preview-container {
  background-color: #f5f5dc;
  border-radius: 20px;
  margin-top: 10px;
  width: 80%;
}

/* Custom styles for job icon */
.job-icon {
  width: 40px;
  height: auto;
}

/* Custom styles for job title */
.job-title {
  font-size: 16px;
  font-weight: normal;
}

/* Custom styles for salary */
.salary {
  font-style: italic;
  color: #6c757d;
}

/* Custom styles for router link */
.custom-router-link {
  color: inherit;
  text-decoration: none;
}

/* Hover effect for router link */
.custom-router-link:hover {
  font-weight: bold;
}
</style>
