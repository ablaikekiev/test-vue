import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import { createPinia } from "pinia";
import router from "@/router/router.ts";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
