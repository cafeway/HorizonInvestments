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
  apiKey: 'AIzaSyB6wVfaBipavCfL_h4bHIFFAHO_dlga7Bo',
  authDomain: 'horizoninvestors-3a7d4.firebaseapp.com',
  projectId: 'horizoninvestors-3a7d4',
  storageBucket: 'horizoninvestors-3a7d4.appspot.com',
  messagingSenderId: '856885748509',
  appId: '1:856885748509:web:e086a68abd2289263937f4',
  measurementId: 'G-V8KPCK0X1T'
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
