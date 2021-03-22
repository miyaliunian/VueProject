<template>
  <div class="publish">
    <a id='downloadLink' style="display:none"></a>
    <div class="pub-top">
      <div class="back" @click="$router.back()">
        <span class="iconfont icon-back"></span>
      </div>
      <div><span class="iconfont icon-yinfu" style="font-size: 16px;margin-right: 10px;">选择音乐</span>
      </div>
    </div>
    <div class="upload-box">
      <video ref="video" style="width: 100%;height: 500px;object-fit: fill;" ></video>
      <div class="rightFillter">
        <div @click="addFilter">
          <span class="iconfont iconziyuan"></span>
          <p>滤镜</p>
        </div>
      </div>
      <div class="upload-bar">
        <div class="bar-item">
          <div class="icon">
            <p>道具</p>
          </div>
        </div>
        <div class="bar-item" @click="recodeOrStop">
          <div class="pub-border">
            <div class="pub"></div>
          </div>
        </div>
        <div class="bar-item">
          <div class="icon">
            <p>相册</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Publish',
  data() {
    return {
      mediaStreamTrack: {}, // 用于退出时 关闭摄像头
      video_stream: '', // 视频stream
      recordedBlobs: '', // 视频音频Blob
      isRecord: false, // 视频是否正在录制
    };
  },
  mounted() {
    //  进入页面 调用摄像头
    this.getCamera();
  },
  methods: {
    getCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true,
      })
        .then((stream) => {
          this.mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[0];
          this.video_stream = stream;
          this.$refs.video.srcObject = stream;
          this.$refs.video.play();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 滤镜按钮 添加滤镜
    addFilter() {
      /**
         *  blur 高斯模糊 滤镜
         *  sepia
         *  grayscale
         * */
      this.$refs.video.classList.toggle('blur');

      // this.$refs.video.classList.add('sepia', 'blur', 'grayscale');
      // debugger;
      // const classes = this.$refs.video.classList;
      // if (classes.length > 0) {
      //   // eslint-disable-next-line array-callback-return
      //   classes.item.map((i) => {
      //     this.$refs.video.classList.remove(classes);
      //   });
      // }
      // if (this.$refs.video.classList === 0) {
      //   this.$refs.video.classList.add(['sepia']);
      // } else {
      //   this.$refs.video.classList
      // }
      // console.log(this.$refs.video.classList.length);
    },
    recodeOrStop() {
      if (this.isRecord) {
        this.stop();
      } else {
        this.recode();
      }
    },
    //  录制视屏
    recode() {
      this.isRecord = !this.isRecord;
      let mediaRecorder;
      let options;
      // eslint-disable-next-line prefer-const
      let recordedBlobs = [];
      if (typeof MediaRecorder.isTypeSupported === 'function') {
        // 根据浏览器来设置编解码参数， 不过h264好像大部分浏览器都是可以用的
        if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
          options = { mimeType: 'video/webm;codecs=h264' };
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
          options = { mimeType: 'video/webm;codecs=h264' };
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
          options = { mimeType: 'video/webm;codecs=vp8' };
        }
        mediaRecorder = new MediaRecorder(this.video_stream, options);
      } else {
        console.log('isTypeSupported is not supported, using default codecs for browser');
        mediaRecorder = new MediaRecorder(this.video_stream);
      }
      mediaRecorder.start();
      mediaRecorder.ondataavailable = function (e) {
        if (e.data && e.data.size > 0) {
          recordedBlobs.push(e.data);
        }
      };
      // 停止录像后增加下载视频按钮，将视频流转为mp4格式，并在页面增加视频回放窗口
      mediaRecorder.onstop = function () {
        const blob = new Blob(recordedBlobs, { type: 'video/mp4' });
        recordedBlobs = [];
        const videoURL = window.URL.createObjectURL(blob);
        document.getElementById('downloadLink').href = videoURL;
        // 下载mp4格式视频
        document.getElementById('downloadLink').download = 'media.mp4';
        document.getElementById('downloadLink').innerHTML = 'Download video file';
        // 随机生成数字
        const rand = Math.floor((Math.random() * 10000000));
        const name = `video${rand}.mp4`;
        document.getElementById('downloadLink').setAttribute('download', name);
        document.getElementById('downloadLink').setAttribute('name', name);

        setTimeout(() => {
          document.getElementById('downloadLink').click();
        }, 500);
      };
    },
    // 停止录制
    stop() {
      this.isRecord = !this.isRecord;
      if (!this.$refs.video.srcObject) return;
      const stream = this.$refs.video.srcObject;
      const tracks = stream.getTracks();
      // 关闭摄像头和音频
      tracks.forEach((track) => {
        track.stop();
      });
    },
  },
  destroyed() {
    // 关闭h5摄像头
    // eslint-disable-next-line no-unused-expressions
    this.mediaStreamTrack && this.mediaStreamTrack.stop();
  },

};
</script>

<style lang="less" scoped>
  .publish {
    background-color: #cccccc;
    color: #ffffff;

    .pub-top {
      height: 44px;
      line-height: 44px;
      display: flex;
      justify-content: center;
      color: #ffffff;
      font-size: 16px;
      position: relative;

      .back {
        position: absolute;
        left: 10px;
      }
    }

    .upload-box {
      height: calc(100vh - 44px - 100px);
      position: relative;

      .upload-bar {
        position: fixed;
        bottom: 0;
        display: flex;
        height: 100px;
        line-height: 100px;
        justify-content: space-between;
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
        background-color: #cccccc;

        .icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid red;
          margin-bottom: 5px;
        }

        .pub-border {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          border: 1px solid red;
          box-shadow: -5px 0 5px #FE2C55, 5px 0 5px #FE2C55, 0 -5px 5px #FE2C55, 0 5px 5px #FE2C55;

          .pub {
            height: 45px;
            width: 45px;
            border-radius: 50%;
            background-color: #FE2C55;
          }
        }
      }

      .grayscale {
        filter: grayscale(1);
      }

      .sepia {
        filter: sepia(1);
      }

      .blur {
        filter: blur(3px);
      }

      .rightFillter {
        position: absolute;
        right: 20px;
        top: 20px;
        background-color: transparent;
        width: 50px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .rightFillter > div {
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
