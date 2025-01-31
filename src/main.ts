import { createApp } from 'vue'
import { createPinia } from "pinia";
import router from "@/router/router.ts";

import App from './App.vue'

import './assets/styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
