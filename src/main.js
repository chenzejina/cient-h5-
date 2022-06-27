import { createApp } from 'vue'
import App from './App.vue' 
import './common.css'
import router from './router'
import './assets/lib/amfe-fkexible.js'

const app =createApp(App)
app.use(router)
app.mount('#app')
