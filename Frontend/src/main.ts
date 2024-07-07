import { createApp } from 'vue'
import App from './App.vue'

/** Plugins */
import router from './plugins/Router'
import store from './plugins/Store';
import i18n from './plugins/Locale';
import { AssetsURLPlugin } from './plugins/AssetsURLPlugin';

import VueTippy from 'vue-tippy'
import VueSlider from 'vue3-slider'
import { LocaleRoutePlugin } from './plugins/LocaleRoutePlugin';
import UserSessionPlugin from './plugins/UserSessionPlugin';

/** Tema */
import '@/plugins/theme.ts'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.use(AssetsURLPlugin);
app.use(LocaleRoutePlugin);
app.use(UserSessionPlugin);
app.component("VueSlider", VueSlider);
app.use(VueTippy, {
    defaultProps: { placement: 'right' },
});


app.mount('#app');

