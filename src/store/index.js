import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import admins from './modules/admins'
import agents from './modules/agents'
import company from './modules/company'
import safe from './modules/safe'
import companyUser from './modules/company-user'
import agentUser from './modules/agent-user'
import auth from'./modules/Auth'
import createMutationsSharer from "vuex-shared-mutations";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default  new Vuex.Store({

  modules: {
    app,
    appConfig,
    verticalMenu,
    admins:admins,
    agents:agents,
    company:company,
    safe:safe,
    companyUser:companyUser,
    agentUser:agentUser,
    auth:auth
  },
  strict: process.env.DEV,
   plugins: [createMutationsSharer({ predicate: ["SetUserData","SetAutoLogout"] })
  ,createPersistedState({paths: ["auth"]})]

})

