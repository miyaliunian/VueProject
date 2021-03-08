/* eslint-disable import/prefer-default-export */
export const sign = [
  {
    path: '/sign', // 登录页面
    name: 'Sign',
    component: () => import(/* webpackChunkName: "sign" */ 'views/Sign'),
  },
  {
    path: '/codeSign', // 验证码登录
    name: 'Code',
    component: () => import(/* webpackChunkName: "sign" */ 'views/Code'),
  },
  {
    path: '/phoneSign', // 手机号密码登录
    name: 'TPSign',
    component: () => import(/* webpackChunkName: "sign" */ 'views/TPSign'),
  },

];
