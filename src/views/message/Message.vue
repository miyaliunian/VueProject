<template>
  <div class="message">
    <Header title="消息" has-right="true" right-txt="发起聊天 "></Header>
    <div class="msg-wrap">
      <div class="msg-nav">
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="~/assets/img/fs.png" alt="" style="width: 50px;height: 50px;border-radius: 10px">
          </div>
          <p>粉丝</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="~/assets/img/xh.png" alt="" style="width: 50px;height: 50px;border-radius: 10px">
          </div>
          <p>赞</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="~assets/img/wd.png" alt="" style="width: 50px;height: 50px;border-radius: 10px">
          </div>
          <p>@我的</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box">
            <img src="~assets/img/pl.png" alt="" style="width: 50px;height: 50px;border-radius: 10px">
          </div>
          <p>评论</p>
        </div>
      </div>
      <div class="msg-me-ad">
        <img src="~assets/img/me_ad.png" alt="" >
      </div>
      <div class="download">
        <div>抖音好友圈</div>
        <div>
          <button class="btn">下载</button>
        </div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="~assets/img/avatar.png" alt="">
          <div class="user-des">
            <div class="top">
              <span>抖音助手</span>
              <span>12:12</span>
            </div>
            <div class="bottom bottom-msg">
              <span>抖音安全课堂</span>
              <span class="no-see"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/Header';

export default {
  name: 'Message',
  components: { Header },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
  .message {
    height: 100%;
    .msg-wrap {
      padding: 0 20px;
      color: #ffffff;
      background-color: #101821;
      .msg-nav {
        padding: 20px 5px;
        display: flex;
        justify-content: space-between;
        .msg-nav-item {
          text-align: center;
          width: 60px;
          .icon-box {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 5px;
          }
        }
      }
      .msg-me-ad {
        display: block;
        padding: 20px 0;
        height: 100%;
        border-top: 1px solid #242630;
        border-bottom: 1px solid #242630;
        img {
          height: 80px;
          width: 100%;
        }
      }
      .download {
        padding: 20px 0;
        color: #686868;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #242630;
        .btn {
          padding: 8px 25px;
          border: none;
          background-color: #FE2C55;
          color: #ffffff;
          border-radius: 2px;
        }
      }
      .msg-list-box {
        padding-top: 30px;
        .msg-list {
          display: flex;
          padding: 10px 0;
          img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
          }
          .user-des {
            flex: 1;
            height: 60px;
            .top {
              font-size: 14px;
              margin-left: 10px;
              display: flex;
              justify-content: space-between;
              line-height: 30px;
            }
            .bottom {
              font-size: 14px;
              margin-left: 10px;
              display: flex;
              justify-content: space-between;
              line-height: 30px;
            }
            .bottom-msg {
              color: #666;
              align-items: center;
            }
            .no-see {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #FACE15;
            }
          }
        }
      }
    }
  }
</style>
