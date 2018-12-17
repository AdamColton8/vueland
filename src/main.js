import Vue from 'vue'
import App from './App.vue'
import jquery from 'jquery'

window['jQuery'] = window['$'] = jquery
window.Vue = Vue;
require('./assets/css/include.min.css')
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

