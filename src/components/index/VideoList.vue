<template>
  <div class="video-list">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in dataList" :key="index">
        <div style="height: 100%;width: 100%;margin: 0 auto">
          <Videos :video="item" ref="videos" :index="index"></Videos>
        </div>
        <div class="info-wrap">
          <info-bar></info-bar>
        </div>
        <div class="rightbar_wrap">
          <right-bar @changeCom="showComs"></right-bar>
        </div>
      </swiper-slide>
    </swiper>
    <!--评论-->
    <transition name="up">
      <div class="comment-wrap" v-if="showComment">
        <div class="comment-list">
          <div class="comment-top">
            <div class="number">15W条评论</div>
            <div class="close" @click="close"><span class="iconfont icon-guanbi" style="font-weight: bold;font-size: 13px"></span></div>
          </div>
          <div class="comment-body">
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
                <div class="item-info">
                  <div class="replay">
                    <p class="name">前端切图仔</p>
                    <p class="replay-des">
                      今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班今晚不要加班</p>
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
                <img class="user-pic" src="../../assets/img/avatar.png" alt="">
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
import Videos from './Videos';
import InfoBar from './InfoBar';
import RightBar from './RightBar';

export default {
  name: 'VideoList',
  props: ['dataList'],
  components: {
    RightBar,
    Videos,
    InfoBar,
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
        height: window.innerHeight - 50,
        resistanceRatio: 0,
        observeParents: true,
        on: {
          tap: (e) => {
            this.playAction(this.page - 1);
          },
          slidePrevTransitionStart: () => { // 上滑
            if (this.page > 1) {
              this.page -= 1;
              this.preVideo(this.page - 1);
            }
          },
          slideNextTransitionStart: () => { // 下滑动
            this.page += 1;
            this.nextVideo(this.page - 1);
          },
        },
      },
      page: 1, // 标识翻页
    };
  },
  methods: {
    playAction(index) {
      this.$refs.videos[index].playOrStop();
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
    // 弹出
    showComs() {
      this.showComment = true;
    },
    // 关闭
    close() {
      this.showComment = false;
    },
  },

};
</script>

<style lang="less" scoped>
  .video-list {
    height: 100%;
    position: relative;

    /deep/ .swiper-container {
      height: 100%;
      display: flex;
      .swiper-slide {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .info-wrap {
      position: absolute;
      left: 0;
      bottom: 10px;
    }

    .rightbar_wrap {
      position: absolute;
      box-sizing: border-box;
      right: 0;
      bottom: 0px;
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
