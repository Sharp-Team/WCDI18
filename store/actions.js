export default {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.username) {
      commit('setUsername', req.session.username)
    }
  },
  SET_RANGE({ commit }, range) {
    commit('setRange', range)
  },
  SET_USERNAME({ commit }, username) {
    commit('setUsername', username)
  },
  SET_AVATAR({ commit }, avatar) {
    commit('setAvatar', avatar)
  }
}
