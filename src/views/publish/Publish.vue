<template>
  <div class="publish">
    <div class="pub-top">
      <div class="back" @click="$router.back()">
        <span class="iconfont icon-back"></span>
      </div>
      <div><span class="iconfont icon-yinfu" style="font-size: 16px;margin-right: 10px;">选择音乐</span></div>
    </div>
    <div class="upload-box">
      <video ref="video" style="width: 100%;height: 500px;object-fit: fill;"></video>
      <div class="upload-bar">
          <div class="bar-item">
            <div class="icon">
              <p>道具</p>
            </div>
          </div>
          <div class="bar-item" @click="getCamera">
            <div class="pub-border">
              <div class="pub"></div>
            </div>
          </div>
          <div class="bar-item">
            <div class="icon">
              <p>上传</p>
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
    };
  },
  methods: {
    getCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true,
      })
        .then((success) => {
          this.$refs.video.srcObject = success;
          this.$refs.video.play();
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
      .upload-bar {
        position: fixed;
        bottom: 0;
        display: flex;
        height: 100px;
        line-height: 100px;
        justify-content: space-between;
        width: 100%;
        padding: 0 50px ;
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
          box-shadow: -5px 0 5px #FE2C55, 5px 0 5px #FE2C55, 0 -5px 5px #FE2C55,0 5px 5px #FE2C55;
          .pub {
            height: 45px;
            width: 45px;
            border-radius: 50%;
            background-color: #FE2C55;
          }
        }
      }
    }
  }
</style>
