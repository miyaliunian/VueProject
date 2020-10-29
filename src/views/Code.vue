<template>
  <div class="sign">
    <div class="sign-header">
      <span class="iconfont icon-back" style="font-size: 20px" @click="$router.back()"></span>
      <span style="color: #686868"> 帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>请输入验证码</h2>
        <p>验证码已通过短信发送至+8615998362261</p>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input @input="changeCode" type="tel" v-model="code " class="inp-controll" placeholder="请输入验证码 ">
        </div>
        <div class="sele">
          {{time}}
        </div>
      </div>
      <div class="code-btn">
        <button :disabled="disabled" :class="[btnBg? 'active':'']" class="load-btn"><div v-if="loading" class="loads"></div>登录</button>
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
      time: 60,
      disabled: true,
      btnBg: false,
      code: '',
      defaultCode: '2261',
      loading: false,
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode() {
      this.countDown();
    },
    changeCode(e) {
      // eslint-disable-next-line no-useless-escape
      this.code = e.target.value.replace(/\ +/g, '');
      if (this.code === this.defaultCode) {
        this.disabled = false;
        this.btnBg = true;
        this.loading = true;
      } else {
        console.log('验证码输入错误');
      }
    },
    countDown() {
      if (this.time > 0) {
        // eslint-disable-next-line no-plusplus
        this.time--;
        setTimeout(this.countDown, 1000);
        // eslint-disable-next-line no-empty
      } else {
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
      justify-content: space-between;

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

      .sele {
        margin-right: 20px;
        color: #686868;
      }
    }

    .sign-box:nth-child(3) {
      margin-top: 0px;
      margin-top: 10px;
    }

    .code-btn button {
      margin: 10px 0;
      width: 100%;
      padding: 15px 0;
      border: none;
      font-size: 18px;
      letter-spacing: 5px;
      color: #686868;
    }

    .active {
      color: #ffffff;
      background-color: #FE2C55;
    }

    .load-btn {
      display: flex;
      justify-content: center;
    }

    .loads {
      width: 16px;
      height: 16px;
      border: 3px solid cadetblue;
      border-bottom: 3px #cccccc solid;
      border-radius: 50%;
      animation: load 1s infinite linear;
      margin-right: 5px;
    }

    @keyframes load {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
</style>
