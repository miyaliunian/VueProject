/* eslint-disable import/prefer-default-export */
export const sign = [
  {
    path: '/sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "sign" */ 'views/Sign'),
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import(/* webpackChunkName: "sign" */ 'views/Code'),
  },
  {
    path: '/tpsign',
    name: 'TPSign',
    component: () => import(/* webpackChunkName: "sign" */ 'views/TPSign'),
  },

];
