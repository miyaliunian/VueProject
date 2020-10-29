<template>
  <div class="tab-bar" >
  <tab tab-title="首页" nav-path="/index"></tab>
  <tab tab-title="朋友" nav-path="/friends"></tab>
    <tab nav-path="/publish">
      <img class="dy-btn" alt="" src="../../assets/img/dy-btn.png">
    </tab>
  <tab tab-title="消息" nav-path="/msg"></tab>
  <tab tab-title="我的" nav-path="/me"></tab>
  </div>
</template>

<script>
import Tab from './Tab';

export default {
  name: 'Tabbar',
  components: {
    Tab,
  },
};
</script>

<style lang="less" scoped>
  .tab-bar {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #000000;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #cccccc;
    font-size: 16px;
    display: flex;
    justify-content: center;
    z-index: 9;
    .item {
      flex: 1;
      text-align: center;
    }
    .dy-btn {
      display: inline-block;
      width: 50px;
      height: 30px;
      margin: 10px;
    }
  }
</style>
