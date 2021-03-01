<template>
  <div class="sign">
    <div class="sign-header">
      <span class="iconfont icon-back" style="font-size: 20px" @click="$router.back()"></span>
      <span style="color: #686868"> 帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>手机号密码登录</h2>
      </div>
      <div class="sign-box">
        <div class="sele">
          <select class="sele-controll" v-model="telErea">
            <option value="">+86</option>
          </select>
        </div>
        <div class="inp">
          <input type="tel" @keyup="loginAction" class="inp-controll" v-model="phone" @input="changePhone" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input type="tel" @keyup="loginAction" v-model="password" @input="changePass" class="inp-controll" placeholder="请输入密码">
        </div>
      </div>
      <div class="not-sign">
        <p>登录后表明同意<a href="">抖音协议</a>和<a>隐私协议</a></p>
      </div>
      <div class="code-btn">
        <button :disabled="disabled" :class="[btnBg? 'active':'']" @click="loginAction">登录</button>
      </div>
      <div class="other">
        <span>忘记了？<a href="">找回密码</a></span>
      </div>
    </div>
    <div class="mask" v-if="showMask">
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
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data() {
    return {
      telErea: '',
      showMask: false,
      password: '',
      phone: '',
      disabled: true,
      btnBg: false,
    };
  },
  methods: {
    changePhone(e) {
      this.phone = e.target.value;
      const regTel = /^[1][3456789][0-9]{9}$/;
      if (!regTel.test(this.phone)) {
        console.log('不附和正则表达式');
        this.btnBg = false;
        this.disabled = true;
      }
    },
    changePass() {

    },
    loginAction() {
      // eslint-disable-next-line no-useless-escape
      const regTel = /^[1][3456789][0-9]{9}$/;
      if (this.phone === '') {
        console.log('手机号不能为空');
        this.disabled = true;
        this.btnBg = false;
      } else if (!regTel.test(this.phone)) {
        console.log('请填写正确的手机号');
        this.disabled = true;
        this.btnBg = false;
      } else if (this.password === '') {
        console.log('密码不能为空');
        this.disabled = true;
        this.btnBg = false;
      } else {
        console.log('请求接口');
        this.disabled = false;
        this.btnBg = true;
      }
    },
    show() {
      this.showMask = true;
    },
    close() {
      this.showMask = false;
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

    p a{
      color: #628DB8;
      padding: 0 5px;
    }

    .sign-box {
      display: flex;
      height: 50px;
      margin: 20px 0 0 0 ;
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

    .sign-box:nth-child(3) {
      margin-top: 0px;
      margin-top: 10px;
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
      font-size: 20px;
      letter-spacing: 5px;
      color: #ffffff;
    }

    .other {
      display: flex;
      justify-content: space-between;
    }

    .other a {
      color: #628DB8;
    }

    .active {
      color: #ffffff;
      background-color: #FE2C55;
    }

    .mask {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,.4);
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
          line-height: 63px;
        }
      }
    }
  }
</style>
