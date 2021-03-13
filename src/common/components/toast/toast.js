// 实例化组件
import Vue from 'vue';
/* eslint-disable import/no-unresolved */
import toast from './toast.vue';

const Toast = Vue.extend(toast);

let instance;

// 时间，设置一个定时器 用于关闭toast提示框
let timer = null;
// 设置参数
const toastMsg = (options) => {
  if (!instance) { // 判断是否实例化
    // 创建一个实例
    instance = new Toast();
    // 挂载到页面
    document.body.append(instance.$mount().$el);
  }
  // 默认时间
  instance.duration = 1500;
  if (typeof options === 'string') {
    instance.message = options;
  } else if (typeof options === 'object') {
    instance.type = options.type;
    instance.message = options.message;
    instance.duration = options.duration || 1500;
  } else {
    return;
  }

  instance.show = true;
  timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
    timer = null;
  }, instance.duration);
};

export default toastMsg;
