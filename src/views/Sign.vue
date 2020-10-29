<template>
  <div class="sign">
    <div class="sign-header">
      <span class="iconfont icon-guanbi" style="font-size: 20px"></span>
      <span style="color: #686868"> 帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>登录后可展示自己</h2>
        <p> 登录后表明同意<a href="">抖音协议</a>和<a>隐私协议</a></p>
      </div>
      <div class="sign-box">
        <div class="sele">
          <select class="sele-controll" v-model="telErea">
            <option value="">+86</option>
          </select>
        </div>
        <div class="inp">
          <input v-model="phone" @input="changeTel" type="tel" class="inp-controll"
                 placeholder="请输入手机号码">
        </div>
      </div>
      <div class="not-sign">
        <p>未注册手机号通过验证后将自动登录</p>
      </div>
      <div class="code-btn">
        <button :disabled="disabled" :class="[btnBg? 'active':'']" @click="getCode">获取短信验证码</button>
      </div>
      <div class="other">
        <router-link href="" tag="a" to="/tpsign">密码登录</router-link>
        <span @click="show">其他方式登录</span>
      </div>
    </div>
    <!--    <transition name="up">-->
    <div class="mask" v-if="showMask" @click="close">
        <div class="oauth">
          <ul>
            <li class="oauth-item">今日头条登录</li>
            <li class="oauth-item">QQ登录</li>
            <li class="oauth-item">微信登录</li>
            <li class="oauth-item">微博登录</li>
            <li class="oauth-item" @click="close">取消</li>
          </ul>
        </div>
    </div>
    <!--    </transition>-->
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data() {
    return {
      telErea: '',
      showMask: false,
      disabled: true,
      btnBg: false,
      phone: '  ',
    };
  },
  methods: {
    getCode() {
      this.$router.push({ path: '/code' });
    },
    show() {
      this.showMask = true;
    },

    close() {
      this.showMask = false;
    },
    changeTel(e) {
      // eslint-disable-next-line no-useless-escape
      this.phone = e.target.value.replace(/\ +/g, '');
      const regTel = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (regTel.test(this.phone)) {
        console.log('附和正则表达式');
        this.btnBg = true;
        this.disabled = false;
      } else {
        console.log('不附和正则表达式');
        this.btnBg = false;
        this.disabled = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
  .sign {
    padding: 30px;
    background-color: #fff;

    .sign-header {
      display: flex;
      justify-content: space-between;
    }

    .sign-content {
      padding: 40px 10px;
    }

    h2 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    p {
      line-height: 20px;
      color: #686868;
    }

    p a {
      color: #628DB8;
      padding: 0 5px;
    }

    .sign-box {
      display: flex;
      height: 50px;
      margin: 20px 0 0 0;
      align-items: center;
      background-color: #F9F9F9;

      .sele-controll {
        height: 36px;
        font-weight: bold;
        margin-left: 5px;
        border: none;
      }

      .inp-controll {
        height: 36px;
        background-color: #F9F9F9;
        width: 90%;
        margin-left: 10px;
      }

      input {
        caret-color: #FE2C55;
      }

      input::-webkit-input-placeholder {
        color: #686868;
      }
    }

    .not-sign {
      margin-top: 10px;
    }

    .not-sign p {
      color: #686868;
      font-size: 14px;

    }

    .code-btn button {
      margin: 10px 0;
      width: 100%;
      padding: 15px 0;
      border: none;
      letter-spacing: 5px;
      font-size: 15px;
    }

    .active {
      color: #ffffff;
      background-color: #FE2C55;
    }

    .other {
      display: flex;
      justify-content: space-between;
    }

    .other a {
      color: #628DB8;
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .4);

    .oauth {
      height: 48%;
      width: 100%;
      position: absolute;
      bottom: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: #fff;
      text-align: center;

      .oauth-item {
        border-bottom: 1px solid #f5f5f5;
        line-height: 60px;
      }
    }
  }

</style>
