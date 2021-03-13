/* eslint-disable import/prefer-default-export */
export const edit = [
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "me" */ 'views/me/Edit.vue'),
  },
];
