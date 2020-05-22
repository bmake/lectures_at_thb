import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import i18n from './i18n';
import _ from 'lodash';

Vue.config.productionTip = false;
Vue.prototype._ = _;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');
