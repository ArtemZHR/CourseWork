import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
  },
  getters: {
    NEWS: state => {
      return state.news
    }
  },
  mutations: {

    SET_NEWS: (state, payload) => {
      state.news = payload
    },

    ADD_NEWS: (state, payload) => {
      state.news.push(payload)
    }
  },
  actions: {

    GET_NEWS: async (context, payload) => {
      const { data } = await axios.get('http://localhost:3000/api/News')
      context.commit('SET_NEWS', data)
    },

    SAVE_NEWS: async (context, payload) => {
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios({
        url: 'http://localhost:3000/api/News',
        method: 'post',
        data: payload
      })
      context.commit('ADD_NEWS', payload)
    }
  }
})
