<template>
  <div class="video-list">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <div>
          <!--  当你打开抖音APP 时 它首页的视频是自动播放的 我们不能直接修改 vue-video-player上的options->autoplay 因为autoplay 为true的话 则所有的视频都会自动播放，我们只需要让数组中的第一个播放就行了 所以我们传递数组的所以给video组件 在video组件内判断 如果index为0的话则自动播放 -->
          <Videos ref="videos" :video="item" :index="index"></Videos>
        </div>
        <div class="info_wrap">
          <info-bar></info-bar>
        </div>
        <div class="rightbar_wrap">
           <right-bar></right-bar>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Videos from './Videos';
import InfoBar from '../index/InfoBar';
import RightBar from '../index/RightBar';

export default {
  name: 'VideoList',
  components: {
    RightBar,
    InfoBar,
    Videos,
  },
  data() {
    return {
      showComment: false,
      swiperOptions: {
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, // 因为抖音视频的高度是占满整个屏幕的高度
        resistanceRatio: 0,
        observeParents: true,
        on: { //  tap 方法是swiper组件提供的点击方法
          tap: (e) => {
            this.playAction(this.page - 1); //
          },
          slidePrevTransitionStart: () => { // 上滑 当屏幕向上滑动时
            if (this.page > 1) {
              this.page -= 1;
            }
          },
          slideNextTransitionStart: () => { // 下滑动 当屏幕向下滑动时
            this.page += 1;
          },
        },
      },
      dataList: [
        {
          id: '1',
          url: 'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4',
        },
        {
          id: '2',
          url: 'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4',
        },
        {
          id: '3',
          url: 'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4',
        },
        {
          id: '4',
          url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
        },
      ],
      page: 1, // 用于标识翻页
    };
  },

  methods: {
    playAction(index) { // 入参的作用是 需要知道 当前屏幕上显示的视频是第几个视频
      this.$refs.videos[index].playOrStop(); // 调用video组件你的playOrStop 方法
    },
  },

};
</script>

<style lang="less" scoped>
  .video-list {
    /*height: 100%;*/

    /deep/ .swiper-container {
      /*height: 100%;*/
      /*display: flex;*/
      position: relative;
      .swiper-slide {
        /*height: 100%;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
      }
    }

    .info_wrap {
      position: absolute;
      left: 0;
      bottom: 55px;
    }

    .rightbar_wrap {
      position: absolute;
      box-sizing: border-box;
      right: 0;
      bottom: 30px;
      padding-top: 10px;
    }

    .comment-wrap {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 500px;
      width: 100%;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      z-index: 999;
      padding: 10px;
      background-color: #F8F8FF;
      box-sizing: border-box;

      .comment-box {
        padding-bottom: 10px;
      }

      .comment-top {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;

        .number {
          flex: 1;

          text-align: center;
        }

        .close {
          padding-right: 5px;
          color: #666;
        }
      }

      .comment-body {
        max-height: 400px;
        overflow: auto;
        margin-top: 15px;

        .comment-item {
          display: flex;
        }

        .sub-comment-item {
          display: flex;
          margin-left: 33px;
          margin-top: 10px;

          .re-name {
            padding: 0 10px;
            color: #686868;
          }
        }

        .user-pic {
          width: 33px;
          height: 33px;
          border-radius: 50%;
        }

        .item-info {
          margin-left: 10px;
          display: flex;
          flex: 1 auto;

          .replay {
            width: 90%;
          }

          .replay-des, .reply-name {
            font-size: 14px;
            line-height: 20px;
          }

          .name {
            color: #686868;
            font-size: 13px;
          }

          .time {
            color: #686868;
          }

          .zan {
            color: rgb(205, 205, 205);
            display: flex;

            .icon-xinaixin-fuben {
              font-size: 20px;
            }

            p {
              font-size: 15px;
            }
          }
        }

        .more {
          margin-left: 30px;
        }
      }

      .reply-input {
        width: 100%;
        height: 50px;
        border-top: 1px solid #d9d9d9;
        position: absolute;
        bottom: 0;
        left: 0;
        align-items: center;
        display: flex;
        background-color: #fff;

        input {
          line-height: 40px;
          width: 70%;
          padding: 0 10px;
        }

        input:focus {
          border: none;
        }

        .emoji {
          margin: 0 10px;
        }

        .emoji, .iconfont {
          font-size: 30px;
          color: #686868;
        }

      }

    }
  }

</style>
