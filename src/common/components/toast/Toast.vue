<template>
  <div class="toast-box">
      <transition class="toast">
      <div class="toast" v-show="show" :class="type">
          <p>{{message}}</p>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '11111',
      show: true,
      type: '',
    };
  },
};
</script>

<style lang="less" scoped>
.toast-box {
    .toast {
        position: fixed;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%) ;
        background: rgba(0, 0, 0 , .5);
        color: #fff;
        text-align: center;
        border-radius: 4px;
        font-size: 14px;
        line-height: 18px;
        padding: 6px 10px;
    }
    .success {
        background: rgba(0, 0, 0 , .5);
    }
    .err {
        background: #fe2c55;
    }
}

.toast-enter-to, .toast-leave {
    opacity: 1;
}

.toast-enter-active , .toast-leave-active  {
    transition: all ease .5s;
}

.toast-enter, .toast-enter-to  {
    opacity: 0;
}
</style>
