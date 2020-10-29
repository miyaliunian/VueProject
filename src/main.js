import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import 'styles/main.less';
import 'normalize.css/normalize.css';
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css';
import { Tabbar, TabbarItem } from 'vant';



Vue.use(VueSwiper)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false;
Vue.config.devtools = true

store.subscribe((mutation, state) => {
  console.log(mutation.type);
  console.log(mutation.payload);
})

store.subscribeAction((action, state)=>{
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
