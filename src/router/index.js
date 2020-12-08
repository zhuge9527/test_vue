import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/test000/HelloWorld'
import Login from '../views/Login'
import Home from '../views/Home'
import Index from '../views/test001/Index'
import Index2 from '../views/test002/Index2'
import PageA from '../views/test001/page001/PageA'
import PageB from '../views/test001/page002/PageB'
import NavigateMainView from '../views/NavigateMainView'
import SupplierSearchView from '../views/supplier/SupplierSearchView'

Vue.use(Router)
const specialRoutes = [{
  path: '/hello/world',
  name: 'HelloWorld',
  component: HelloWorld
}]
const baseRoutes = [{
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/',
  redirect: '/login'
}]
const indexRoutes = [{
  path: '/index',
  name: 'Index',
  component: Index,
  children: [{
    path: 'supplier/search',
    component: SupplierSearchView
  }, {
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
}]
const homeRoutes = [{
  path: '/home',
  name: 'Home',
  component: Home,
  children: [{
    path: 'supplier/search',
    name: 'SupplierSearchView',
    component: SupplierSearchView
  }, {
    path: '*',
    component: Vue.component('page404', {
      render (h) {
        return h('span', 'Don\'t Match Current Page(404)')
      }
    })
  }]
}]
let myRouter = new Router({
  routes: [
    ...baseRoutes,
    ...specialRoutes,
    ...indexRoutes,
    ...homeRoutes,
    {
      path: '/nav-view',
      component: NavigateMainView
    }, {
      path: '/index2',
      name: 'Index2',
      component: Index2
    }, {
      path: '/pageB',
      name: PageB,
      component: PageB
    }, {
      path: '*',
      component: Vue.component('page404', {
        render (h) {
          return h('span', 'Don\'t Match Current Page(404)')
        }
      })
    }]
})
export default myRouter
myRouter.beforeEach((to, from, next) => {
  if (location.href.indexOf('.html') > -1) {
    // debugger
    // location.replace('http://localhost:8080/singlepageview/Page1.html')
    window.open('http://localhost:8080/singlepageview/Page1.html')
  }
  next()
})
