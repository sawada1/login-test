import '@mdi/font/css/materialdesignicons.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })
app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
