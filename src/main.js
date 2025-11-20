import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)   // ← createApp doit venir de 'vue'
app.use(router)
app.use(createPinia())
app.mount('#app')