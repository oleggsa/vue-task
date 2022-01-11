import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
      getStateItems(state) {
        return state.items;
      }
  },
  mutations: {
    SET_ITEMS (state, items){
        state.items = items;
    },
    GET_ITEMS (state) {
        console.log(state.items);
    }
  },
  actions: {
      async getItemsAPI({commit}, filter){
          await axios('https://pixabay.com/api/?key=25098537-0af0d982ab475f07a4f843429&q=cats&image_type=all&per_page=20')
          .then(response => {
              commit('SET_ITEMS', response.data.hits)

              if (filter === `likes`) commit(`SET_ITEMS`, response.data.hits.sort((a, b) => b.likes - a.likes));
            else if (filter === `comments`) commit(`SET_ITEMS`, response.data.hits.sort((a, b) => b.comments - a.comments));
            else commit(`SET_ITEMS`, response.data.hits)
          })
          .catch((error) => {
              console.log(error);
          })
      },
  }
})