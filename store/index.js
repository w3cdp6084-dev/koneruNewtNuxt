import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hambergerMenuState: false,
  },
  mutations: {
    'hambergerMenu/open'(state) {
      state.hambergerMenuState = true;
    },
    'hambergerMenu/close'(state) {
      state.hambergerMenuState = false;
    },
  },
});
