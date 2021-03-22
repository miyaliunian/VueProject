import Vue from 'vue';
import Vuex from 'vuex';
import sign from './modules/sign';
import me from './modules/me';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sign,
    me,
  },
});
