<template>
  <!-- Display the menu for the week -->
  <div v-if="week.length > 0" class="container">
    <h2>Speiseplan für die Woche</h2>
    <div class="row">
      <!-- Render Montag bis Donnerstag -->
      <div class="col-md-3" v-for="(day, index) in week.slice(0, 4)" :key="index">
        <div :class="{ 'highlighted': index === currentDayIndex }" class="card mb-3">
          <div class="card-header">{{ day.name }}</div>
          <ul class="list-group list-group-flush">
            <!-- Loop through meals for the day -->
            <li v-for="(meal, i) in day.meals" :key="i" class="list-group-item">
              <strong>{{ meal.name }}</strong><br>
              <span>{{ meal.description }}</span><br>
              <span>{{ meal.price }}</span><br>
              <!-- Display availability time if available -->
              <span v-if="meal.availableFrom && meal.availableUntil">
                Verfügbar von: {{ meal.availableFrom }} bis {{ meal.availableUntil }}
              </span>
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
            <!-- Loop through meals for the day -->
            <li v-for="(meal, i) in day.meals" :key="i" class="list-group-item">
              <strong>{{ meal.name }}</strong><br>
              <span>{{ meal.description }}</span><br>
              <span>{{ meal.price }}</span><br>
              <!-- Display availability time if available -->
              <span v-if="meal.availableFrom && meal.availableUntil">
                Verfügbar von: {{ meal.availableFrom }} bis {{ meal.availableUntil }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Show loading message if data is being fetched -->
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Define meal interface
interface Meal {
  name: string;
  description: string;
  price: string;
  availableFrom: string;
  availableUntil: string;
}

export default defineComponent({
  props: {
    // Image path and title props
    imagePath: String,
    title: String
  },
  data() {
    return {
      // Array to hold week's menu data
      week: [] as { name: string, meals: Meal[] }[],
      // Index of current day
      currentDayIndex: (new Date()).getDay() - 1
    };
  },
  mounted() {
    // Fetch menu data on component mount
    this.getMenu();
  },
  methods: {
    // Method to fetch menu data
    async getMenu() {
      try {
        // Fetch data from API endpoint
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:zL769PHt/speisekarte', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();

        // Check if data is in expected format
        if (Array.isArray(data)) {
          // Group meals by day
          const groupedData = data.reduce((acc: any, current: any) => {
            if (!current.name) {
              // If no name, add meal to previous day
              const lastIndex = acc.length - 1;
              acc[lastIndex].meals.push({
                name: current.meals__name,
                description: current.meals__description,
                price: current.meals__price,
                availableFrom: current.meals__availableFrom,
                availableUntil: current.meals__availableUntil
              });
            } else {
              // If name exists, add new day
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

          // Set week data
          this.week = groupedData;
        } else {
          console.error('Data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  }
});
</script>

<style scoped>
/* Add scoped styles here */
.highlighted {
  background-color: bisque;
}
</style>
