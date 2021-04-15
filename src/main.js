// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import store from './store'
import VueSwal from 'vue-swal'
import LoadScript from 'vue-plugin-load-script'
import firebase from 'firebase'
import Vuex from 'vuex'
import cors from 'cors'
import VueRouter from 'vue-router'
import VueCountdownTimer from 'vuejs-countdown-timer'
import AxiosPlugin from 'vue-axios-cors'
Vue.use(AxiosPlugin)
Vue.use(VueCountdownTimer)
Vue.use(VueRouter)
Vue.use(LoadScript)
Vue.use(cors)
// Import Bootstrap an BootstrapVue CSS files (order is important)
Vue.use(VueMaterial)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(VueSwal)
Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: 'AIzaSyBV9CYlrp2RZqTSpSt0nPHHRYTI8mq8YGY',
  authDomain: 'wise-fex.firebaseapp.com',
  projectId: 'wise-fex',
  storageBucket: 'wise-fex.appspot.com',
  messagingSenderId: '1027087323521',
  appId: '1:1027087323521:web:2b1a4a769248bd0b649880',
  measurementId: 'G-E1E70NVLPY'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
