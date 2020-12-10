import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: 'admin2',
      avatarPath: null
    }
  },
  mutations: {
    loginIn (state, username) {
      state.userInfo.username = username
    }
  }
})
