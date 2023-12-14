import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp } from 'vue'
import Pagination from './components/Pagination.vue';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

const app = createApp(App)

app.component('pagination', Pagination);

app.use(createPinia())
app.use(createVuestic())
app.use(router)

app.mount('#app')
