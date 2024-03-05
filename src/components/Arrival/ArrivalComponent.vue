<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="arrival-div">
          <GoogleMap :apiKey="googleMapsApiKey" :center="center" :zoom="15" style="width: 100%; height: 500px">
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>
      </div>
      <div class="col-md-8">
        <div class="arrival-div">
          <p class="lead">
            Das Solidarity Studio befindet sich inmitten einer lebendigen Nachbarschaft, umgeben von Kunstgalerien, Cafés und kulturellen Einrichtungen. Unsere Lage im Herzen der Stadt spiegelt unsere Verbundenheit mit der Gemeinschaft wider und lädt jeden ein, Teil unserer solidarischen Gemeinschaft zu werden.
          </p>
          <p>
            <strong>Adresse:</strong> [Adresse des Studios]
          </p>
          <p>
            <strong>Anreise:</strong> Das Studio ist bequem mit öffentlichen Verkehrsmitteln erreichbar. Die nächstgelegene U-Bahn-Station <em>[Name der U-Bahn-Station]</em> liegt nur wenige Gehminuten entfernt und bietet direkte Verbindungen zu allen wichtigen Stadtteilen. Parkplätze stehen ebenfalls zur Verfügung.
          </p>
          <p>
            Für Besucher von außerhalb der Stadt ist der internationale Flughafen <em>[Name des Flughafens]</em> nur eine kurze Fahrt entfernt. Von dort aus gelangen Sie mit öffentlichen Verkehrsmitteln oder dem Taxi schnell und einfach zu unserem Studio.
          </p>
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
  components: { GoogleMap, Marker },
  setup() {
    const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";
    const center = { lat: 40.689247, lng: -74.044502 };

    return { googleMapsApiKey, center };
  },
});
</script>

<style scoped>

.arrival-div {
  background-color: rgba(255, 228, 196, 0.705); /* Bootstrap danger background color */
  padding: 20px;
  height: 100%;
}
</style>
