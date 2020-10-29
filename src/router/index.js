import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'index',
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
            path: '/index',
            name: 'index',
            component: () => import(/* webpackChunkName: "videoList" */ '../components/index/VideoList.vue'),
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
            component: () => import(/* webpackChunkName: "videoList" */ '../components/index/VideoList.vue'),
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
