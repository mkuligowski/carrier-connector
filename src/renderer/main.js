import Vue from 'vue';
import axios from 'axios';
import 'bulma/css/bulma.css';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';


import App from './App';
import router from './router';
import store from './store';


if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Buefy);


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
