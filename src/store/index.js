import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: 'admin2',
      avatarPath: null
    },
    routerInfo: {
      history: []
    }
  },
  mutations: {
    loginIn (state, username) {
      state.userInfo.username = username
    },
    pushRouterHistory (state, currentRoute) {
      const history = state.routerInfo.history
      const length = history.length
      let existedPath = false
      history.forEach((item, index) => {
        if (item.path === currentRoute.path) {
          existedPath = index
        }
      })
      if (existedPath !== false) {
        history.splice(existedPath, 1)
      } else if (length > 4) {
        history.pop()
      }
      history.push(currentRoute)
    }
  }
})
