const _defaultMessage = "Search for users";
export default {
  namespaced: true,
  state: () => ({
    users: [],
    message: _defaultMessage,
    loading: false,
    user: {}
  }),
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
  },
  actions: {
    async searchUsers({state, commit}, payload) {
      if (state.loading) {
        return
      }
      commit('updateState', {
        message: '', loading: true
      })
      try {
        const res = await this.$axios.$get(`https://api.github.com/search/users?q=${payload}`)
        commit('updateState', {
          users: res.items
        })
      } catch (error) {
        commit('updateState', {
          movies: [], message: error.message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
  },
  getters: {
    getSearchResults(state) {
      return state.users
    }
  }
}

