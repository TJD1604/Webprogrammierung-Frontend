<template>
    <div v-if="week.length > 0" class="container">
      <h2>Speiseplan für die Woche</h2>
      <div class="row">
        <!-- Render Montag bis Donnerstag -->
        <div class="col-md-3" v-for="(day, index) in week.slice(0, 4)" :key="index">
          <div :class="{ 'highlighted': index === currentDayIndex }" class="card mb-3">
            <div class="card-header">{{ day.name }}</div>
            <ul class="list-group list-group-flush">
              <li v-for="(meal, i) in day.meals" :key="i" class="list-group-item">
                <strong>{{ meal.name }}</strong><br>
                <span>{{ meal.description }}</span><br>
                <span>{{ meal.price }}</span><br>
                <span v-if="meal.availableFrom && meal.availableUntil">Verfügbar von: {{ meal.availableFrom }} bis {{ meal.availableUntil }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Render Freitag bis Sonntag in einer Zeile -->
      <div class="row">
        <div class="col-md-4" v-for="(day, index) in week.slice(4)" :key="index">
          <div :class="{ 'highlighted': index + 4 === currentDayIndex }" class="card mb-3">
            <div class="card-header">{{ day.name }}</div>
            <ul class="list-group list-group-flush">
              <li v-for="(meal, i) in day.meals" :key="i" class="list-group-item">
                <strong>{{ meal.name }}</strong><br>
                <span>{{ meal.description }}</span><br>
                <span>{{ meal.price }}</span><br>
                <span v-if="meal.availableFrom && meal.availableUntil">Verfügbar von: {{ meal.availableFrom }} bis {{ meal.availableUntil }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface Meal {
    name: string;
    description: string;
    price: string;
    availableFrom: string;
    availableUntil: string;
  }
  
  export default defineComponent({
    props: {
      imagePath: String,
      title: String
    },
    data() {
      return {
        week: [] as { name: string, meals: Meal[] }[],
        currentDayIndex: (new Date()).getDay() - 1
      };
    },
    mounted() {
      this.getMenu();
    },
    methods: {
  async getMenu() {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:zL769PHt/speisekarte', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      if (Array.isArray(data)) {
        // Gruppieren Sie die Mahlzeiten nach Tag
        const groupedData = data.reduce((acc: any, current: any) => {
          if (!current.name) {
            // Wenn kein Name vorhanden ist, fügen Sie die Mahlzeit zum vorherigen Tag hinzu
            const lastIndex = acc.length - 1;
            acc[lastIndex].meals.push({
              name: current.meals__name,
              description: current.meals__description,
              price: current.meals__price,
              availableFrom: current.meals__availableFrom,
              availableUntil: current.meals__availableUntil
            });
          } else {
            // Wenn ein Name vorhanden ist, fügen Sie einen neuen Tag hinzu
            acc.push({
              name: current.name,
              meals: [{
                name: current.meals__name,
                description: current.meals__description,
                price: current.meals__price,
                availableFrom: current.meals__availableFrom,
                availableUntil: current.meals__availableUntil
              }]
            });
          }
          return acc;
        }, []);
        
        this.week = groupedData;
      } else {
        console.error('Data is not in the expected format:', data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
}

  })
  </script>
  
  <style scoped>
  .highlighted {
    background-color: bisque;
  }
  </style>
  