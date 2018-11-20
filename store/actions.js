export default {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.username) {
      commit('setUsername', req.session.username)
    }
    if (req.session && req.session.avatar) {
      commit('setAvatar', req.session.avatar)
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
  },
  SET_FEATURES({ commit }, features) {
    commit('setFeatures', features)
  },
  SET_MARKERS({ commit }, markers) {
    commit('setMarkers', markers)
  },
  SET_MAP({ commit }, map) {
    commit('setMap', map)
  }
}
