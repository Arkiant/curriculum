import Vue from 'vue'
import Vuex from 'vuex'
import curriculum from './store/curriculum'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    curriculum
  }
})
