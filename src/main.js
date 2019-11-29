import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./pages/Login/veevalidate";
import mock from "./mock/mock.serve";


import * as API from './api'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);



import vueAudioNative from 'vue-audio-native'
Vue.use(vueAudioNative)

Vue.config.productionTip = false
Vue.prototype.$API=API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
