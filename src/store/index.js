import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import search  from './modules/search.js'
import getters from './modules/getters.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
     user,
     search,
  },
 getters,
})
