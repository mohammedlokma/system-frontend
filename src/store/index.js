import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import mutations from './mutations.js'
import getters from './getters.js'
import state from './state.js'
Vue.use(Vuex)

export default  new Vuex.Store({
  state:state,
  mutations: mutations,
  getters: getters,

  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})

