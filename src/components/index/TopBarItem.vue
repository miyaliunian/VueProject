<template>
    <router-link :to="navPath" tag='div' class="item" @click="itemClick">
        <span  :class="{active :isActive}">{{title}}</span>
    </router-link>
</template>
<script>
export default {
  name: 'TopBarItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    navPath: {
      type: String,
      require: true,
    },
  },

  computed: {
    isActive() {
      return this.$route.path === this.navPath;
    },
  },
  methods: {
    itemClick() {
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
