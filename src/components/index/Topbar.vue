<template>
    <div class="top-bar">
      <div class="left" @click="toLive">
        <span class="iconfont icon-live"></span>
      </div>
      <div class="center">
        <TopBarItem title="关注" nav-path="/index/follows/reVidelList"></TopBarItem>
        <TopBarItem title="推荐" nav-path="/index/recommend/reVidelList"></TopBarItem>
      </div>
      <div class="right" @click="toSearch">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </div>
</template>

<script>
import TopBarItem from './TopBarItem';

export default {
  name: 'Topbar',
  components: {
    TopBarItem,
  },
  data() {
    return {
      topIndex: 1,
    };
  },
  methods: {
    toLive() {
      console.log('toLive');
    },
    toSearch() {
      console.log('toSearch');
    },
  },
};
</script>

<style lang="less" scoped>
  .top-bar {
    /*background: #000000;*/
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #686868;
    display: flex;
    box-sizing: border-box;
    position: fixed;
    .left {
      width: 20%;
      padding-left: 10px;
      .icon-live {
        font-size: 24px;
      }
    }
    .center {
      flex: 1;
      display: flex;
      justify-content: center;
      .item {
        flex: 1;
        text-align: center;
        span {
          padding: 2px 0px;
          text-align: center;
          position: relative;
        }
        .active {
          color: #ffffff;
          &:after {
            content: "";
            height: 1px;
            width: 30px;
            left: 3px;
            bottom: -2px;
            position: absolute;
            background: #ffffff;
          }
        }
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
