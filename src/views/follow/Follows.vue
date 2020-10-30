<template>
  <div class="follows">
    <router-view :dataList="videos"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Follows',
  data() {
    return {
      videos: [
        {
          id: '1',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/index/01.mp4'),
        },
        {
          id: '2',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/index/02.mp4'),
        },
        {
          id: '3',
          url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
        },
        {
          id: '4',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/index/03.mp4'),
        },
      ],
    };
  },
  mounted() {
    console.log('关注');
    this.$router.push({ path: 'reVidelList' });
  },
};
</script>

<style lang="less" scoped>
  .follows {
    color: #fff;
    height: 100vh;
    width: 100vw;
  }
</style>
