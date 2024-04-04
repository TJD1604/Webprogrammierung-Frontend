<template>
    <div class="job-preview-container">
      <div class="job-preview row align-items-center py-3">
        <div class="col-3 text-center">
          <img :src="iconPath" class="job-icon" alt="Job Icon">
        </div>
        <div class="col-6 text-center">
          <div class="job-title">
            <router-link :to="{ path: '/job-details/' + jobId }" class="custom-router-link">
              {{ jobTitle }}
            </router-link>
          </div>
        </div>
        <div class="col-3 text-center">
          <div class="salary">{{ salary }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      jobId: {
        type: String,
        required: false
      },
      iconPath: {
        type: String,
        required: false
      },
      jobTitle: {
        type: String,
        required: true
      },
      salary: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .job-preview-container {
    background-color: #f5f5dc; /* Beige Hintergrundfarbe */
    border-radius: 20px; /* Runde Ecken */
    margin-top: 10px; /* Margin top von 10px */
    width: 80%; /* 75% des Bildschirms */
  }
  
  .job-icon {
    width: 40px;
    height: auto;
  }
  
  .job-title {
    font-size: 16px; /* Kleinere Schriftgröße */
    font-weight: normal; /* Normale Schriftstärke */
  }
  
  .salary {
    font-style: italic;
    color: #6c757d;
  }
  
  /* Benutzerdefinierte Stile für den Router-Link */
  .custom-router-link {
    color: inherit; /* Verwende die Elternfarbe */
    text-decoration: none; /* Keine Unterstreichung */
  }

  .custom-router-link:hover {
    font-weight: bold;
  }
  </style>
  