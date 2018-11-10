export default {
  SET_RANGE({ commit }, range) {
    commit('setRange', range)
  },
  SET_POSITION({ commit }, position) {
    commit('setPosition', position)
  }
}
