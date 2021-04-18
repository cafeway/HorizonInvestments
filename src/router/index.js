import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import reg from '../components/register.vue'
import activate from '../components/activation.vue'
import dash from '../components/dashboard.vue'
import hello from '../components/HelloWorld.vue'
import admin from '../components/admin.vue'
import search from '../components/localdbsearch.vue'
import home from '../components/home.vue'
import reset from '../components/resetpass.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/resetpass',
      name: 'resetpass',
      component: reset
    },
    {
      path: '/  ',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/hello',
      name: 'name',
      component: hello
    },
    {
      path: '/register',
      name: 'register',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/activate',
      name: 'activate',
      component: activate
    },
    {
      path: '/dash',
      name: 'dash',
      component: dash
    }
  ]
})
