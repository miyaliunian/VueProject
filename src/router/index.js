import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index/recommend/', // app打开之后 默认跳转到首页的推荐标签栏
  },
  {
    path: '/index',
    redirect: '/index/recommend/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue'),
        children: [
          {
            path: 'follows', // 关注
            name: 'follows',
            component: () => import(/* webpackChunkName: "Follows" */ '../views/follow/Follows.vue'),
            children: [
              {
                path: 'reVidelList',
                name: 'reVidelList',
                component: () => import(/* webpackChunkName: "reVidelList" */ '../common/components/videoList/VideoList.vue'),
              },
            ],
          },
          {
            path: 'recommend', // 推荐
            name: 'recommend',
            component: () => import(/* webpackChunkName: "Recommend" */ '../views/recommend/Recommend.vue'),
            children: [
              {
                path: 'reVidelList',
                name: 'reVidelList',
                component: () => import(/* webpackChunkName: "reVidelList" */ '../common/components/videoList/VideoList.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/friends',
        name: 'friends',
        component: () => import(/* webpackChunkName: "fllow" */ '../views/friends/Friends.vue'),
        children: [
          {
            path: '/friends',
            name: 'friends',
            component: () => import(/* webpackChunkName: "videoList" */ '../common/components/videoList/VideoList.vue'),
          },
        ],
      },
      {
        path: '/msg',
        name: 'msg',
        component: () => import(/* webpackChunkName: "msg" */ '../views/message/Message.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import(/* webpackChunkName: "me" */ '../views/me/Me.vue'),
      },
    ],
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "sign" */ '../views/Sign'),
  },
  {
    path: '/tpsign',
    name: 'TPSign',
    component: () => import(/* webpackChunkName: "sign" */ '../views/TPSign'),
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import(/* webpackChunkName: "sign" */ '../views/Code'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/me/Edit.vue'),
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import(/* webpackChunkName: "publish" */ '../views/publish/Publish.vue'),
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
