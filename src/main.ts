import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Plugin } from 'vue-responsive-video-background-player'

const app = createApp(App)

app.use(Plugin)
app.use(BootstrapVue3)
app.use(createPinia())
app.use(router)

app.mount('#app')
