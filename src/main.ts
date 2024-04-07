// Import global styles
import './assets/main.css'

// Import necessary modules and plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Plugin } from 'vue-responsive-video-background-player'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

// Create Vue application instance
const app = createApp(App)

// Use Vue plugins and modules
app.use(Plugin) // Vue responsive video background player plugin
app.use(BootstrapVue3) // Bootstrap 3 Vue components
app.use(createPinia()) // Pinia for state management
app.use(router) // Vue router for navigation
app.use(VueFullPage) // Fullpage.js plugin for full-page scrolling

// Mount the app to the HTML element with id 'app'
app.mount('#app')
