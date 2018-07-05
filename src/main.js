// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('site-header', require('./components/Header.vue'))
Vue.component('site-footer', require('./components/Footer.vue'))
Vue.component('fitb-question', require('./components/questions/Question1.vue'))
Vue.component('question-second', require('./components/questions/Question2.vue'))
Vue.component('question-third', require('./components/questions/Question3.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
