import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination.vue';
import globalMixin from './stores/global';
import { createApp } from 'vue'
import Pagination from './components/Pagination.vue';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const app = createApp(App)
app.mixin(globalMixin);
app.component('v-select', vSelect)
app.component('pagination', Pagination);

app.use(createPinia())
app.use(createVuestic())
app.use(router)

app.mount('#app')
