<template>
    <div class="item" @click="itemClick">
        <span :class="{active :isActive}">{{title}}</span>
    </div>
</template>
<script>
export default {
  name: 'TopBarItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {

  },
  methods: {
    itemClick() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="less" scoped>
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
</style>
