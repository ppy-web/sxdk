import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/service/http'

import { getToken, setToken, removeToken } from '@/utils/auth'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: getToken(),
    cache: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    setCache: (state, { name, position }) => {
      state.cache[name] = position
    },
    clearCache: (state, { name, position }) => {
      state.cache[name] = position
    }
  },
  getters: {
    token: state => state.token,
    getCache: state => state.cache,
  },

  actions: {
    // 登录
    Login({ commit }) {
      // debugger
      return new Promise((resolve, reject) => {
        http.islogin().then(([err, res]) => {
          console.log("Login res", res);
          console.log("Login err", err);
          if(res.code == 1) {
            setToken(res.token)
            commit('SET_TOKEN', res.token)
            resolve()
          } else {
            reject()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    // 退出系统
    LogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
  }
})

export default store
