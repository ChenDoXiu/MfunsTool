/*
 * @Author: your name
 * @Date: 2021-02-21 11:04:49
 * @LastEditTime: 2021-02-23 15:15:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \html\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
