import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
=======
import Pagination from './components/Pagination.vue';
import globalMixin from './stores/global';
>>>>>>> 5b34abaf53c6a9e5f86e234d650a52e0cc64323d
import { createApp } from 'vue'
import Pagination from './components/Pagination.vue';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
=======
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
>>>>>>> 5b34abaf53c6a9e5f86e234d650a52e0cc64323d

const app = createApp(App)
app.mixin(globalMixin);
app.component('v-select', vSelect)
app.component('pagination', Pagination);

app.use(createPinia())
app.use(createVuestic())
app.use(router)

app.mount('#app')
