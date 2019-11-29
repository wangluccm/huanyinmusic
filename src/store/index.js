// store对象
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import login from "./modules/login";

Vue.use(Vuex)

// 生成并向外暴露一个store对象
export default new Vuex.Store({
  modules: {
    login
  },
  state,
  mutations,
  actions,
  getters
})