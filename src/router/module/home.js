/* eslint-disable import/prefer-default-export */
import Home from 'views/Home.vue';

export const home = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ 'views/index/Index.vue'),
        children: [
          {
            path: 'follows', // 关注
            name: 'follows',
            component: () => import(/* webpackChunkName: "Follows" */ 'views/follow/Follows.vue'),
            children: [
              {
                path: 'reVidelList',
                name: 'reVidelList',
                component: () => import(/* webpackChunkName: "reVidelList" */ 'components/videoList/VideoList.vue'),
              },
            ],
          },
          {
            path: 'recommend', // 推荐
            name: 'recommend',
            component: () => import(/* webpackChunkName: "Recommend" */ 'views/recommend/Recommend.vue'),
            children: [
              {
                path: 'reVidelList',
                name: 'reVidelList',
                component: () => import(/* webpackChunkName: "reVidelList" */ 'components/videoList/VideoList.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/friends',
        name: 'friends',
        component: () => import(/* webpackChunkName: "fllow" */ 'views/friends/Friends.vue'),
        children: [
          {
            path: '/friends',
            name: 'friends',
            component: () => import(/* webpackChunkName: "videoList" */ 'components/videoList/VideoList.vue'),
          },
        ],
      },
      {
        path: '/msg',
        name: 'msg',
        component: () => import(/* webpackChunkName: "msg" */ 'views/message/Message.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import(/* webpackChunkName: "me" */ 'views/me/Me.vue'),
      },

    ],
  },
];
