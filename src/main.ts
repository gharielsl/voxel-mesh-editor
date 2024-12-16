import './style/style.css';
import './style/splitpanes.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@cyhnkckali/vue3-color-picker/dist/style.css';

import { createApp, useCssModule } from 'vue';
import App from './App.vue';

sessionStorage.clear();

useCssModule();
useCssModule('classes');
createApp(App).mount('#app');
