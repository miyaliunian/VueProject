<template>
  <div class="videos">
    <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';

export default {
  name: 'Videos',
  props: ['video', 'index'],
  data() {
    return {
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto',
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: this.video.url,
            type: 'video/mp4', // 类型
          },
        ],
        // poster: "../../static/images/test.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false,
      },
      playing: true,
      playBtn: '',
    };
  },

  components: {
    videoPlayer,
  },
  created() {
    this.autoPlayAction();
  },
  methods: {
    // 控制视频的播放
    playOrStop() {
      if (this.playing) {
        this.$refs.videoPlayer.player.pause();
        this.playing = false;
      } else {
        this.$refs.videoPlayer.player.play();
        this.playing = true;
      }
    },
    // 自动播放 第一个视频
    autoPlayAction() {
      if (this.index === 0) {
        this.playerOptions.autoplay = true;
      }
    },

    // 播放事件
    play() {
      this.$refs.videoPlayer.player.play();
      this.playing = true;
    },
    // 暂停
    stop() {
      this.$refs.videoPlayer.player.pause();
      this.playing = false;
    },
  },

};
</script>

<style lang="less" scoped>
  .videos {
    position: relative;

    /deep/ .vjs-big-play-button {
      position: absolute;
      width: 80px;
      height: 80px;
      border: none;
      background-color: transparent;
      left: 40%;
      top: 40%;
      content: none;

      .vjs-icon-placeholder {
        font-size: 100px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    /deep/ .video-js {
      height: calc(100vh - 50px);
    }
  }
</style>
