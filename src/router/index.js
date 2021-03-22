import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routers.js';

Vue.use(VueRouter);

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

router.beforeEach((to, from, next) => {
  const { meta: { requiresAuth } } = to;
  if (requiresAuth) {
    next({ path: '/sign' });
  } else {
    next();
  }
});

export default router;
