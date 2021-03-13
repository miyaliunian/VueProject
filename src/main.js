import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import 'common/styles/main.less';
import 'normalize.css/normalize.css';
//  全屏滚动组件
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
//  自定义Toast
//自定义弹框
import Toast from 'components/toast/toast.js'
//挂载(链式)
Vue.prototype.$toast = Toast
// vue 视频播放组件
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css'

Vue.use(VueSwiper)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false;
Vue.config.devtools = true

store.subscribe((mutation, state) => {
  // console.log(mutation.type);
  // console.log(mutation.payload);
})

store.subscribeAction((action, state)=>{
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
