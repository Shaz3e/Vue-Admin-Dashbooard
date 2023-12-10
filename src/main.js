import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// CSS
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/dist/css/adminlte.min.css'
import './assets/dist/js/adminlte.min.js'
// JS
import './assets/plugins/jquery/jquery.min.js'
import './assets/plugins/bootstrap/js/bootstrap.bundle.min.js'
import './assets/dist/js/adminlte.min.js'

createApp(App).use(router).mount('#app')
