import { createStore } from "vuex";

export default createStore({
  state: {
    timeRemaining: 60, // ⏳ デバッグ用に1分(60秒)に設定
    stage: 0 // 現在のステージ
  },
  mutations: {
    decrementTime(state) {
      if (state.timeRemaining > 0) {
        state.timeRemaining--;
      }
    },
    resetTime(state) {
      state.timeRemaining = 60; // ⏳ タイマーを1分にリセット
    },
    nextStage(state) {
      state.stage++;
    },
    prevStage(state) {
      if (state.stage > 0) state.stage--;
    }
  },
  actions: {
    startTimer({ commit }) {
      setInterval(() => {
        commit("decrementTime");
      }, 1000);
    }
  },
});