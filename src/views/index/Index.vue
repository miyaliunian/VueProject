<template>
  <div class="wrapper">
    <Topbar></Topbar>
    <router-view ></router-view>
  </div>
</template>

<script>
import Topbar from 'components/topbar/Topbar';

export default {
  name: 'index',
  data() {
    return {
    };
  },
  components: { Topbar },
};
</script>

<style lang="less" scoped>
  .wrapper {
    /*height: 100%;*/
    background-color: orange;
    /*background: #000000;*/
  }

</style>
