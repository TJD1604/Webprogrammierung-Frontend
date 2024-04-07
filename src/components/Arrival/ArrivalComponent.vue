<template>
  <!-- Main container for the arrival information -->
  <div class="container">
    <div class="row">
      <!-- Column for the Google Map -->
      <div class="col-md-4">
        <div class="arrival-div">
          <!-- Google Map component with dynamic center and zoom properties -->
          <GoogleMap :center="center" :zoom="15" style="width: 100%; height: 500px">
            <!-- Marker component with position set to the center -->
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>
      </div>
      <!-- Column for the textual information -->
      <div class="col-md-8">
        <div class="arrival-div">
          <!-- Lead paragraph introducing the location -->
          <p class="lead">
            Das Solidarity Studio befindet sich inmitten einer lebendigen Nachbarschaft, umgeben von Kunstgalerien, Cafés und kulturellen Einrichtungen. Unsere Lage im Herzen der Stadt spiegelt unsere Verbundenheit mit der Gemeinschaft wider und lädt jeden ein, Teil unserer solidarischen Gemeinschaft zu werden.
          </p>
          <!-- Address information -->
          <p>
            <strong>Adresse:</strong> Alt-Friedrichsfelde 60
          </p>
          <!-- Information about public transportation -->
          <p>
            <strong>Anreise:</strong> Das Studio ist bequem mit öffentlichen Verkehrsmitteln erreichbar. Die nächstgelegene U-Bahn-Station <em>Alt-Friedrichsfelde</em> liegt nur wenige Gehminuten entfernt und bietet direkte Verbindungen zu allen wichtigen Stadtteilen. Parkplätze stehen ebenfalls zur Verfügung.
          </p>
          <!-- Information about airport access -->
          <p>
            Für Besucher von außerhalb der Stadt ist der internationale Flughafen <em>BER</em> nur eine kurze Fahrt entfernt. Von dort aus gelangen Sie mit öffentlichen Verkehrsmitteln oder dem Taxi schnell und einfach zu unserem Studio.
          </p>
          <!-- Welcome message -->
          <p>
            Wir freuen uns darauf, Sie im Solidarity Studio willkommen zu heißen und Ihnen ein inspirierendes und kreatives Umfeld zu bieten.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { GoogleMap, Marker }, // Registering GoogleMap and Marker components
  setup() {
    // Center coordinates for the Google Map
    const center = { lat: 52.50839749187282, lng: 13.52722361724156 };

    return { center };
  },
});
</script>

<style scoped>
/* Styling for the arrival-div class */
.arrival-div {
  background-color: rgba(255, 228, 196, 0.705); /* Bootstrap danger background color */
  padding: 20px;
  height: 100%;
}
</style>
