<template>
    <div class="user-header">
     <div class="back" v-if="hasLeft">
       <span class="iconfont icon-back" @click="$router.back()"></span>
     </div>
      <div class="">
        <span style="font-size: 15px">{{title}}</span>
      </div>
      <div class="right" v-if="hasRight">
        <span class="">{{rightTxt}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
    rightTxt: {
      type: String,
      required: false,
    },
    hasLeft: {
      type: Boolean,
    },
    hasRight: {
      type: Boolean,
    },
  },
};
</script>

<style lang="less" scoped>
  .user-header {
    height: 48px;
    width: 100%;
    line-height: 48px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #292831;
    background: #101821;
    color: #eeeeee;
    position: relative;
    .back {
      position: absolute;
      left: 10px;
    }
    .right {
      position: absolute;
      right: 10px;
    }
  }
</style>
