// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

Vue.prototype.$axios = axios

// Vue.config.productionTip = false
// Vue.config.silent = false // 取消 Vue 所有的日志与警告
// Vue.config.errorHandler = function (err, vm, info) {
//   console.table(err)
//   console.table(info)
// }
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  mediaPlayPause: 179, // camelCase 不可用
  'media-play-pause': 179, // 取而代之的是 kebab-case 且用双引号括起来
  up: [38, 87]
}

// plugin
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    const vm = this
    axios.interceptors.response.use(res => {
      // 如果是 404, 则跳转到登录页面
      if (res.data && res.data.status === '404') {
        vm.$confirm(
          res.data.message + ' 登录信息失效，请重新登录',
          '提示'
        ).then(() => {
          vm.$router.push('/login').then(r => console.log(r)) // 在这里做页面登出操作
        }).catch(error => {
          console.trace(error)
        })
        // return Promise.reject(new Error('登录信息失效，请重新登录'))
      } else {
        return res
      }
    }, err => {
      if (err.response.status === 504) {
        vm.$router.push('/nav-view')
        return Promise.resolve(err)
      }
      if (err.response && err.response.data) {
        vm.$message.error('服务器错误: ' + err.response.data)
      } else {
        vm.$message.error('服务器错误: ' + (err || err.message || '未知错误'))
      }
      return Promise.reject(err)
    })
  }
})
