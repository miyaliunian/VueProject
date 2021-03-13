import { get } from 'request/http';
import router from '../../router';

const me = {
  namespaced: true,
  state: {
    useInfo: '', // 我的页面的数据暂存
    vlist: '', // 我的页面的数据暂存
  },
  mutations: {
    assignUseInfo(state, res) {
      state.useInfo = res.userInfo;
      state.vlist = res.vlist;
    },
  },
  actions: {
    fetchMe({ state, commit }, params) {
      get('/static/me.json') // 发送网络请求
        .then((res) => {
          commit('assignUseInfo', res); // 将请求到的数据赋值给vuex中的state
        })
        .catch((err) => {
        });
    },
  },
};

export default me;
