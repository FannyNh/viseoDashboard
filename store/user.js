export default {
    namespaced: true,
    state: () => ({
        users: [],
        loading: false,
        user: {
            avatar_url: "",
            login: "",
            id: "",
            repos: []
        }
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
                loading: true
            })
            try {
                const res = await this.$axios.$get(`https://api.github.com/search/users?q=${payload}`)
                commit('updateState', {
                    users: res.items
                })
            } catch (error) {
                commit('updateState', {
                    users: []
                })
            } finally {
                commit('updateState', {
                    loading: false
                })
            }
        },
        async saveUser({state, commit}, payload) {
            commit('updateState', {
                user: {
                    avatar_url: payload.avatar_url,
                    login: payload.login,
                    id: payload.id,
                }
            })
            try {
                const res = await this.$axios.$get(payload.repos_url)
                commit('updateState', {
                    user: {
                        ...state.user,
                        repos: res
                    }
                })
            } catch (error) {
                commit('updateState', {
                    user: {}
                })
            } finally {
                commit('updateState', {
                    loading: false
                })
            }
        }
    },
    getters: {
        getSearchResults(state) {
            return state.users
        },

        getUser(state) {
            return state.user
        }
    }
}

