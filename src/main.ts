import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@/assets/scss/style.scss';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/config/icon';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
