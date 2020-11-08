import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/test000/HelloWorld'
import Login from '../views/Login'
import Home from '../views/Home'
import Index from '../views/test001/Index'
import Index2 from '../views/test002/Index2'
import PageA from '../views/test001/page001/PageA'
import PageB from '../views/test001/page002/PageB'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/hello/world',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [{
      path: 'pageA/:id',
      component: PageA
    }]
  }, {
    path: '/index2',
    name: 'Index2',
    component: Index2
  }, {
    path: '/pageB',
    name: PageB,
    component: PageB
  }, {
    path: '/pageA',
    name: PageA,
    component: PageA
  }],
  watch: {
    $router (router) {
      debugger
      return router
    },
    $route (router) {
      debugger
      return router
    }
  }
})
