import {createApp} from 'vue';
import App from './App.vue';
import store from './store';
import '@/style/index.less'
import router from './router';
const app = createApp(App);
app.use(router).use(store);
app.mount('#app');