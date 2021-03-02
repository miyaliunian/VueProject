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

export default {
  name: 'Videos',
  props: ['video', 'index'], //  video 是数据 index标识自动播放第一个视频
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
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false,
      },
      playing: true, // 用于判断 当前视频是否为播放状态
      playBtn: '',
    };
  },
  created() {
    this.autoPlayAction();
  },
  methods: {
    playOrStop() {
      if (this.playing) {
        this.$refs.videoPlayer.player.pause(); // 如果视频处于播放状态 则点击时 暂停此视频的播放
        this.playing = false; // 设置播放标识为未播放
      } else {
        this.$refs.videoPlayer.player.play(); // 如果视频处于暂停状态 则点击时 继续视频的播放
        this.playing = true; // 设置播放标识为正在播放
      }
    },

    //  自动播放第一个视频
    autoPlayAction() {
      if (this.index === 0) {
        this.playerOptions.autoplay = true;
      }
    },
  },

};
</script>

<style lang="less">
  .videos {
    position: relative;

    /deep/ .vjs-big-play-button {
      position: absolute;
      width: 80px;
      height: 80px;
      border: none;
      background-color: transparent;
      content: none;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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
