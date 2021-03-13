/* eslint-disable import/prefer-default-export */
export const publish = [
  {
    path: '/publish',
    name: 'publish',
    component: () => import(/* webpackChunkName: "publish" */ 'views/publish/Publish.vue'),
  },
];
