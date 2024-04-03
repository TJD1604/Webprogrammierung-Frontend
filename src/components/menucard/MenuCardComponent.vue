<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    imagePath: String,
    title: String
  },
  data() {
    return {
      week: [
        { 
          name: "Montag", 
          meals: [
            { name: "Frühstück", description: "Müsli mit frischen Früchten", price: "5€", availableFrom: "10:00", availableUntil: "12:00" },
            { name: "Mittagessen", description: "Gemüsesuppe mit Brot", price: "8€", availableFrom: "12:00", availableUntil: "15:00" },
          ]
        },
        { 
          name: "Dienstag", 
          meals: [
            { name: "Frühstück", description: "Toast mit Marmelade", price: "4€", availableFrom: "10:00", availableUntil: "12:00" },
            { name: "Mittagessen", description: "Hähnchenbrust mit Reis und Gemüse", price: "9€", availableFrom: "12:00", availableUntil: "15:00" },
          ]
        },
        { 
          name: "Mittwoch", 
          meals: [
            { name: "Frühstück", description: "Joghurt mit Müsli und Honig", price: "6€", availableFrom: "10:00", availableUntil: "12:00" },
            { name: "Mittagessen", description: "Lasagne mit Knoblauchbrot", price: "11€", availableFrom: "12:00", availableUntil: "15:00" },
          ]
        },
        { 
          name: "Donnerstag", 
          meals: [
            { name: "Frühstück", description: "Porridge mit Beeren", price: "5€", availableFrom: "10:00", availableUntil: "12:00" },
            { name: "Mittagessen", description: "Gebratenes Fischfilet mit Kartoffeln", price: "12€", availableFrom: "12:00", availableUntil: "15:00" },
          ]
        },
        { 
          name: "Freitag", 
          meals: [
            { name: "Abendessen", description: "Sushi-Platte mit Miso-Suppe", price: "15€", availableFrom: "17:00", availableUntil: "21:00" }
          ]
        },
        { 
          name: "Samstag", 
          meals: [
            { name: "Abendessen", description: "Gemüsecurry mit Basmatireis", price: "8€", availableFrom: "17:00", availableUntil: "21:00" }
          ]
        },
        { 
          name: "Sonntag", 
          meals: [
            { name: "Abendessen", description: "Tomatensuppe mit Baguette", price: "6€", availableFrom: "17:00", availableUntil: "21:00" }
          ]
        }
      ],
      currentDayIndex: (new Date()).getDay() - 1
    };
  }
})
</script>

<template>
    <div class="container">
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
  </template>

<style scoped>
.highlighted {
  background-color: bisque;
}
</style>
