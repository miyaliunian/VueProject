import router from '../../router';

const sign = {
  namespaced: true, // 命名空间
  state: {
    defaultCode: '094607', // 默认的验证码
  },
  mutations: {

  },
  actions: {
    //  登录操作
    sign({ state, commit, rootState }, params) {
      //  登录成功之后 session中缓存登录标识
      sessionStorage.setItem('isLogin', JSON.stringify(true));
      //  登录成功之后 跳转到webApp主页
      router.replace({ path: '/' });
    },
  },
  getters: {

  },
};
export default sign;
