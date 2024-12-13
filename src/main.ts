import './style/style.css';
import './style/splitpanes.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp, useCssModule } from 'vue';
import App from './App.vue';

sessionStorage.clear();

useCssModule();
useCssModule('classes');
createApp(App).mount('#app');
