<template>
    <div>
      <button @click="fetchGreeting">Gruß abrufen</button>
      <p>{{ greetingResponse }}</p>
        
      <input v-model="name" />
      <button @click="sendName">Namen senden</button>
      <p>{{ nameResponse }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        greetingResponse: '',
        nameResponse: '',
      };
    },
    methods: {
      async fetchGreeting() {
        try {
          const response = await axios.get('http://localhost:3000/api/');
          this.greetingResponse = response.data;
        } catch (error) {
          console.error('Error fetching greeting:', error);
        }
      },
  
      async sendName() {
        try {
          const response = await axios.post('http://localhost:3000/api/name', {
            name: this.name,
          });
          this.nameResponse = response.data.greeting;
        } catch (error) {
          console.error('Error sending name:', error);
        }
      },
    },
  };
  </script>
  