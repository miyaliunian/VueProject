<template>
  <div class="follow">
    <friends-topbar></friends-topbar>
    <router-view :dataList="videos"></router-view>
  </div>
</template>

<script>
import FriendsTopbar from 'components/index/FriendTopbar';

export default {
  name: 'follow',
  data() {
    return {
      videos: [
        {
          id: '1',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/friend/01.mp4'),
        },
        {
          id: '2',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/friend/02.mp4'),
        },
        {
          id: '3',
          url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
        },
        {
          id: '4',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/friend/03.mp4'),
        },
      ],
    };
  },
  components: { FriendsTopbar },
  mounted() {
    console.log('friend');
  },
};
</script>

<style lang="less" scoped>

</style>
