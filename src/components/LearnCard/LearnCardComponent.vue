<template>
    <div class="card" >
      <div class="card-content">
        <h3 class="card-name">{{ headline }}</h3>
        <p><i>Was?</i><br> {{ description }}</p>
        <p class="time"><i>Wann?</i><br> {{ timeframe }}</p>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      headline: String,
      description: String,
      timeframe: String
      
    }
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    height: auto;
    border: 2px solid rgb(210, 184, 157);
  }

  
  .card-content {
    padding: 20px;
    align-self: center;
    justify-self: center;

  }

 
  </style>
  