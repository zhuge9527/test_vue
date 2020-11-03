import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld'
import Login from '../views/Login'
import Home from '../views/Home'
import Index from '../Index'
import Index2 from '../Index2'
import PageA from '../views/PageA'
import PageB from '../views/PageB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index2',
      name: 'Index2',
      component: Index2
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
      path: '/pageB',
      name: PageB,
      component: PageB
    }, {
      path: '/pageA',
      name: PageA,
      component: PageA
    // }, {
    //   path: '/test/pageA/:id',
    //   name: PageA,
    //   component: PageA
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/test',
      component: PageA,
      children: [{
        path: 'pageA/:id',
        component: PageA
      }, {
        path: 'pageA',
        component: PageA
      }]
    }
  ],
  beforeRouteUpdate (to, form) {
    debugger
    this.next()
  },
  watch: {
    $router (router) {
      debugger
      return router
    }
  }
})
