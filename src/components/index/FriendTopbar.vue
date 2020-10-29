<template>
    <div class="top-bar">
      <div class="left">
        <span class="iconfont icon-tianjialianxiren"></span>
      </div>
      <div class="center">
          <span >朋友</span>
          <span class="iconfont icon-tanhao"></span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'FriendsTopbar',
  data() {
    return {
    };
  },

};
</script>

<style lang="less" scoped>
  .top-bar {
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    color: #686868;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: fixed;
    .left {
      position: absolute;
      left: 10px;
      width: 20%;
      padding-left: 10px;
      .icon-tianjialianxiren {
        font-size: 24px;
      }
    }
    .center {
      color: #ffffff;
      display: flex;
      align-items: center;
      .icon-tanhao {
        margin-left: 5px;
        color: #686868;
      }
    }
    .right {
      width: 20%;
      padding-right: 10px;
      text-align: right;
      .icon-sousuo {
        font-size: 24px;
      }
    }
  }
</style>
