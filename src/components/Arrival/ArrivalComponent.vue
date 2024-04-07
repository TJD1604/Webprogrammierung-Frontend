<!-- This template displays information about the Solidarity Studio and includes a Google Map component. -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="arrival-div">
          <!-- Google Map component with a marker -->
          <GoogleMap :center="center" :zoom="15" style="width: 100%; height: 500px">
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>
      </div>
      <div class="col-md-8">
        <div class="arrival-div">
          <!-- Information about the studio's location and accessibility -->
          <p class="lead">
            The Solidarity Studio is located in the midst of a vibrant neighborhood, surrounded by art galleries, cafes, and cultural institutions. Our location in the heart of the city reflects our commitment to the community and invites everyone to become part of our solidarity community.
          </p>
          <p>
            <strong>Address:</strong> [Studio Address]
          </p>
          <p>
            <strong>Getting Here:</strong> The studio is conveniently accessible by public transportation. The nearest subway station <em>[Subway Station Name]</em> is just a short walk away, providing direct connections to all major neighborhoods. Parking is also available.
          </p>
          <p>
            For visitors from outside the city, the international airport <em>[Airport Name]</em> is just a short drive away. From there, you can easily reach our studio by public transportation or taxi.
          </p>
          <p>
            We look forward to welcoming you to the Solidarity Studio and providing you with an inspiring and creative environment.
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
    // Defines the center coordinates for the Google Map
    const center = { lat: 52.50839749187282, lng: 13.52722361724156 };

    return { center };
  },
});
</script>

<style scoped>
/* Styles for the div containing arrival information */
.arrival-div {
  background-color: rgba(255, 228, 196, 0.705); /* Bootstrap danger background color */
  padding: 20px;
  height: 100%;
}
</style>
