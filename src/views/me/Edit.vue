<template>
  <div class="edit">
    <Header hasLeft="true" title="编辑资料"></Header>
    <div class="edit-wrap">
      <div class="avatar-box">
        <div class="avatar">
          <img src="../../assets/img/avatar.png" alt=""/>
          <span class="iconfont icon-xiangji"></span>
          <input type="file">
          <p>点击更换头像</p>
        </div>
      </div>
      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名称</span>
          <span>昵称<span class="iconfont icon-arrow-left"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>63807476<span class="iconfont icon-arrow-left"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>填写个人简介更容易获取别人关注哦<span class="iconfont icon-arrow-left"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">生日</span>
          <span>点击设置<span class="iconfont icon-arrow-left"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">地区</span>
          <span>中国.辽宁.沈阳<span class="iconfont icon-arrow-left"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">学校</span>
          <span>点击设置<span class="iconfont icon-arrow-left"></span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/Header';

export default {
  name: 'Edit',
  components: {
    Header,
  },

};
</script>

<style lang="less" scoped>
  .edit {
    background-color: #101821;
    .edit-wrap {
      padding: 0 10px;
      box-sizing: border-box;

      .avatar-box {
        color: #686868;
        text-align: center;
        padding: 20px;

        .avatar {
          position: relative;

          .iconfont {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 26px;
            color: #686868;
          }

          input {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
          }

          img {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            margin-bottom: 16px;
            opacity: .5;
          }
        }
      }

      .edit-box {
        border-top: 1px solid #292831;
        color: #686868;

        .edit-item {
          display: flex;
          justify-content: space-between;
          line-height: 60px;

          .label {
            color: #ffffff;
          }

          .icon-arrow-left {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
