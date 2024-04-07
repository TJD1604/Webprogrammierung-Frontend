<!-- This template defines a job preview component for displaying basic job information. -->
<template>
  <div class="job-preview-container">
    <!-- Job preview content -->
    <div class="job-preview row align-items-center py-3">
      <!-- Job icon -->
      <div class="col-3 text-center">
        <img :src="iconPath" class="job-icon" alt="Job Icon">
      </div>
      <!-- Job title with router link to job details -->
      <div class="col-6 text-center">
        <div class="job-title">
          <router-link :to="{ path: '/job-details/' + jobId }" class="custom-router-link">
            {{ jobTitle }}
          </router-link>
        </div>
      </div>
      <!-- Salary information -->
      <div class="col-3 text-center">
        <div class="salary">{{ salary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import './JoboverviewComponent.css';
export default {
  props: {
    // Unique job identifier
    jobId: {
      type: String,
      required: false
    },
    // Path to job icon
    iconPath: {
      type: String,
      required: false
    },
    // Title of the job
    jobTitle: {
      type: String,
      required: true
    },
    // Salary information
    salary: {
      type: String,
      required: true
    }
  }
};
</script>
