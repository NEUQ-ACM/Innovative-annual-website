import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemContent:'测试',
    itemTitle:'',
  },
  mutations: {
    itemChange(state,payload){
      console.log(payload);
      state.itemContent=payload.content
      state.itemTitle=payload.title
    }
  },
  actions: {
  },
  modules: {
  }
})
