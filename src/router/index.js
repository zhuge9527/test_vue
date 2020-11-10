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
      path: 'pageA',
      component: PageA
    }, {
      path: 'render/pageA2',
      component: Vue.component('PageA2', {
        render (createElement, context) {
          return createElement(
            'div', [
              'pageA2 Text',
              createElement(
                'routerView', {attrs: {name: 'default'}}
              ), createElement(
                'router-view', {attrs: {name: 'view2'}}
              )
            ],
            {innerText: 'ere'})
        }
      }),
      children: [{
        path: 'third',
        components: {
          default: Vue.component('pageA-children-default', {
            render (createElement, context) {
              return createElement('h' + 2, 'default.h2')
            }
          }),
          'view2': Vue.component('pageA-children-view2', {
            render (createElement, context) {
              return createElement('h' + 2, 'view2.h2')
            }
          })
        }
      }]
    }, {
      path: 'pageA/:param1',
      component: PageA
    }, {
      path: '*',
      component: Vue.component('page-404', {
        render (createElement, context) {
          return createElement('span', '404')
        }
      })
    }]
  }, {
    path: '/index2',
    name: 'Index2',
    component: Index2
  }, {
    path: '/pageB',
    name: PageB,
    component: PageB
  }]
})
