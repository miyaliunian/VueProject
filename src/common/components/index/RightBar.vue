<template>
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <img src="../../../assets/img/avatar.png" style="width: 40px;height: 40px; border-radius: 50%"
             alt="">
        <span class="iconfont icon-jia"
              style="color:#FE2C5A;position: absolute;left: 15px;bottom: -12px;font-size: 20px"></span>
      </div>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-xin"></span>
      <p>95.9w</p>
    </div>
    <div class="item-icon" @click.stop="showCom($event)">
      <span class="iconfont icon-pinglun"></span>
      <p>285</p>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-zhuanfa"></span>
      <p>3027</p>
    </div>
    <div class="rightbar-item">
      <div class="right-music">
        <img src="../../../assets/img/music_avatar.png"
             style="width: 30px;height: 30px;border-radius: 50%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightBar',
  methods: {
    showCom(e) {
      e.preventDefault();
      this.$emit('changeCom', this.showComment);
    },
  },
};
</script>

<style lang="less" scoped>
  .right-bar {
    display: flex;
    width: 70px;
    flex-direction: column;
    .rightbar-item {
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding-bottom: 10px;
    }

    .avatar-border {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #fff;
      position: relative;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-icon {
      height: 60px;
      text-align: center;
      padding-bottom: 10px;
    }

    .iconfont {
      color: #ffffff;
      font-size: 30px;
    }

    p {
      color: #ffffff;
      font-size: 14px;
      padding: 0px;
      margin: 5px 0 0 0;
    }

    .right-music {
      height: 54px;
      line-height: 54px;
      width: 54px;
      background: #2e2e2e;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: round 6s linear infinite;
    }

    @keyframes round {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }

  }
</style>
