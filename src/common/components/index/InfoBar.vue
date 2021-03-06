<template>
  <div class="info-bar">
    <div class="infobar-item">{{item.perName}}</div>
    <div class="infobar-item">{{item.perDesc}}</div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-douyinbiaoshishang"></span>
      <div class="music-name">
        <span data-text="千岛群岛群无多">{{item.perMusicName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',
  props: {
    item: { // 父组件通过props将数据传递到子组件
      type: Object,
      default() { // 默认为空对象
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
  .info-bar {
    color: #ffffff;
    padding-left: 10px;
    font-size: 16px;
    .infobar-item {
      padding: 5px 0;
    }
    .music-item {
      display: flex;
    }
    .music-name {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      font-size: 16px;
    }
    .music-name span {
      display: inline-block;
      animation: scroll 5s linear infinite;
      &:after{
      content: attr(data-text);
        margin-left: 40px;
      }
    }
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-50% - 20px));
      }
    }
  }
</style>
