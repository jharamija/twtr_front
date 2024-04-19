import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
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
app.use(VueSidebarMenu)

app.mount('#app')
