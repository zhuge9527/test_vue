import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello/world',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
