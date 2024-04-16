import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import Vuetify from 'vuetify/lib'

// const vuetify = new Vuetify({})

// Vue.use(vuetify)
const app = createApp(App)
const pinia = createPinia()
// const app = new Vue({
//     render: h => h(App)
// })

app.use(router)
app.use(pinia)

app.mount('#app')
