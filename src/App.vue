<script>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";
import CookieConsent from "@/components/CookieConsent.vue";

export default defineComponent({
  name: "App",
  components: {
    CookieConsent,
    HeaderLineComponent,
    RouterView,
    FooterComponent
  }
});
</script>


<template>
  <div class="position-relative">
    <HeaderLineComponent class="position-absolute top-0"/>
  </div>
  <CookieConsent 
    message="Wir backen nicht nur Cookies in unsere Kantine, sondern auch auf unserer Webseite."
    linkLabel="Erfahre mehr"
    href="/datenschutz"
    target="_blank"
    rel="noopener"
    buttonLabel="Verstanden"
    :style="{
        backgroundColor: '#F5F5DC',
        bottom: '0',
        left: '0',
        right: '0',
        position: 'fixed',
        zIndex: '999',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px'
      }"
    
  />
  <RouterView />
  <FooterComponent />
</template>

<style>

@font-face {
  font-family: Dubai;
  src: url('./fonts/Dubai-Font/DubaiW23-Regular.woff2') format('woff2'),
       url('./fonts/Dubai-Font/DubaiW23-Regular.woff') format('woff'),
       url('./fonts/Dubai-Font/DubaiW23-Regular.tte') format('truetype');
}

#app {
  font-family: Dubai, sans-serif; 
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
}

.cookie-consent-compliance {
  background-color: #2f2f2f83;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cookie-consent-compliance:hover {
  background-color: #2f2f2fe1;
}

</style>