export default {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.user) {
      commit('setUsername', req.session.user.username)
    }
    if (req.session && req.session.user) {
      commit('setUser', req.session.user)
    }
    if (req.session && req.session.user) {
      commit('setAvatar', req.session.user.avatar)
    }
    if (req.session && req.session.user) {
      commit('setFullName', req.session.user.full_name)
    }
  },
  SET_RANGE({ commit }, range) {
    commit('setRange', range)
  },
  SET_USERNAME({ commit }, username) {
    commit('setUsername', username)
  },
  SET_USER({ commit }, user) {
    commit('setUser', user)
  },
  SET_AVATAR({ commit }, avatar) {
    commit('setAvatar', avatar)
  },
  SET_FULL_NAME({ commit }, full_name) {
    commit('setFullName', full_name)
  },
  SET_MARKERS({ commit }, markers) {
    commit('setMarkers', markers)
  },
  SET_MAP({ commit }, map) {
    commit('setMap', map)
  },
  SET_NOTI_WORKER({ commit }, notiWorker) {
    commit('setNotiWorker', notiWorker)
  }
}
