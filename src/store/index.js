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
      const length = state.routerInfo.history.length
      if (length > 5) {
        state.routerInfo.history.shift()
        state.routerInfo.history.push(4, 0, currentRoute)
      } else {
        state.routerInfo.history.push(currentRoute)
      }
    }
  }
})
