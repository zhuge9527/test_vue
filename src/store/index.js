import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: 'admin2'
    }
  },
  mutations: {
    loginIn (state) {
      debugger
      this.username = state.userInfo.username
    }
  }
})
