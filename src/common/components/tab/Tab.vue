<template>
    <div class="item" @click="itemClick">
      <router-link :to="navPath" :class="{active: isActive}" tag="span">{{tabTitle}}<slot></slot></router-link>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabTitle: {
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
  }
  .active {
    color: #ffff;
  }
</style>
