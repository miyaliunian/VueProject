/* eslint-disable import/prefer-default-export */
import { publish } from './module/publish';
import { home } from './module/home';
import { sign } from './module/sign';
import { edit } from './module/edit';

export const routes = [
  {
    path: '/',
    redirect: '/index/recommend/', // app打开之后 默认跳转到首页的推荐标签栏
  },
  {
    path: '/index',
    redirect: '/index/recommend/',
  },
  ...home,
  ...sign,
  ...edit,
  ...publish,
];
