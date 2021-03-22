<template>
  <div class="video-list">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <div>
          <Videos ref="videos" :video="item" :index="index"></Videos>
        </div>
        <!-- 底部作者信息 -->
        <div class="info_wrap">
          <info-bar :item="item"></info-bar>
        </div>
        <!-- 右侧视频点赞、转发、评论信息 -->
        <div class="rightbar_wrap">
           <right-bar @changeCom="showComOrclose" :item="item"></right-bar>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 实现评论 -->
    <transition name="up">
      <!-- 这个地方用到了 v-if指令  如果 showComment 则显示列表 反之则隐藏视频列表-->
      <div class="comment-wrap" v-if="showComment">
        <div class="comment-list">
          <div class="comment-top">
            <div class="number">15W条评论</div>
            <div class="close" @click="showComOrclose"><span class="iconfont icon-guanbi" style="font-weight: bold;font-size: 13px"></span></div>
          </div>
          <div class="comment-body">
            <div class="comment-box" v-for=" i in 20" :key="i">
              <div class="comment-item">
                <img class="user-pic" src="~assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
                    <p class="time">03-19</p>
                  </div>
                  <div class="zan">
                  <span class="iconfont icon-xinaixin-fuben" style="text-align: center">
                    <p>10</p>
                  </span>
                  </div>
                </div>
              </div>
              <div class="sub-comment-item">
                <img class="user-pic" src="../../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">啦啦啦</p>
                    <p class="reply-name">不加班不加班</p>
                    <p class="time">03-19</p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-xinaixin-fuben" style="text-align: center"><p>20</p></span>
                  </div>
                </div>
              </div>
              <div class="more">展开60条回复</div>
            </div>
          </div>
          <!-- 输入框 -->
          <div class="reply-input">
            <input type="text" placeholder="有爱评论，说点好听的~">
            <span class="emoji">@</span>
            <span class="iconfont icon-emoji"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { post, get } from 'request/http';
import Videos from './Videos';
import InfoBar from '../index/InfoBar';
import RightBar from '../index/RightBar';
// 引入我们封装好的网络请求组件

export default {
  name: 'VideoList',
  components: {
    RightBar,
    InfoBar,
    Videos,
  },
  data() {
    return {
      showComment: false, // 用于控制评论列表是否显示
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
              this.preVideo(this.page - 1);
            }
          },
          slideNextTransitionStart: () => { // 下滑动 当屏幕向下滑动时
            this.page += 1;
            this.nextVideo(this.page - 1);
          },
        },
      },
      dataList: [

      ],
      page: 1, // 用于标识翻页
    };
  },

  created() {
    get('/static/data.json')
      .then((res) => {
        this.dataList = res.list;
      })
      .catch((err) => {
      });
  },

  methods: {
    playAction(index) { // 入参的作用是 需要知道 当前屏幕上显示的视频是第几个视频
      this.$refs.videos[index].playOrStop(); // 调用video组件你的playOrStop 方法
    },
    // 向前
    preVideo(index) {
      this.$refs.videos[index].play();
      this.$refs.videos[index + 1].stop();
    },

    // 向后
    nextVideo(index) {
      this.$refs.videos[index].play();
      this.$refs.videos[index - 1].stop();
    },
    // 弹出评论列表或者关闭评论列表
    showComOrclose() {
      this.showComment = !this.showComment;
    },
  },

};
</script>

<style lang="less" scoped>
  @import "../../styles/common.less";
  .video-list {
    /deep/ .swiper-container {
      position: relative;
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

    /* 评论里列表弹出动画 */
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
          .replay-des {
            padding: 5px;
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
