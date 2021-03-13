<template>
  <div class="toast-box">
    <transition name="toast">
      <div class="toast" :class="type" v-show="show">
        <p>{{message}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '弹出弹出弹出弹出弹出弹出弹出弹出',
      type: '',
      show: true,
    };
  },
};
</script>

<style>
  .toast{
    position: fixed;
    left: 50%;
    top: 10%;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, .5);
    color: white;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    line-height: 18px;
    padding: 0 10px;
  }
  /* 默认提示 */
  .success{
    background: rgba(0, 0, 0, .5);
  }
  /* 失败提示 */
  .error{
    background: #fe2c55;
  }
  .toast-enter-to,.toast-leave{
    opacity: 1;
  }
  .toast-enter-active,.toast-leave-active{
    transition:all ease 0.5s;
  }
  .toast-enter,.toast-enter-to{
    opacity: 0;
  }
</style>
