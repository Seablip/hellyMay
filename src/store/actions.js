// Vuex actions
export default {
  addNum({ commit, state }, id) {
    //点击下一题，记录答案id，
    commit("REMBER_ANSWER", id);
    // 判断是否是最后一题，如果不是则跳转下一题
    if (state.itemNum < state.itemDetail.length) {
      commit("ADD_ITEMNUM", 1);
    }
  },
  //初始化信息
  initializeData({ commit }) {
    commit("INITIALIZE_DATA");
  }
};
