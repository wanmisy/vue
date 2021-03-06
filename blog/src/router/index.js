import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'login');

const routes = [
  {
    path: '/',
    component: login
  }
]

export default new Router({
  routes
})
