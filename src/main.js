import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import i18n from './i18n';
import FlagIcon from 'vue-flag-icon';

Vue.use(FlagIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');
