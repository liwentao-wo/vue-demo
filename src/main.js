import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'

window.axios = require('axios');

Vue.use(VueRouter);

Vue.config.productionTip = false

const Demo = () => import('./components/demo.vue')
const Lwt = () => import('./Lwt.vue')

const routes = [
  { path: '/demo', component: Demo },
  { path: '/lwt', component: Lwt },
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
