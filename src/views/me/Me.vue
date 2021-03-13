<template>
  <div class="me">
    <div class="me-top" :style="bgPic">
      <div class="menu-box">
        <div class="menu-icon"></div>
      </div>
    </div>
    <div class="me-wrap">
      <div class="me-content">
        <div class="info">
          <img src="~assets/img/avatar.png" alt=""
               style="height: 100px;width: 100px;border-radius: 50%;
               margin-right: 20px">
          <button class="btn" @click="toEdit">编辑资料</button>
          <button class="btn">+朋友</button>
        </div>
        <div class="des">
          <h2>{{useInfo.name}}</h2>
          <span>抖音号：{{useInfo.sn}}</span>
          <p>{{useInfo.sub}}</p>
        </div>
        <div class="user-tag">
          <span>{{useInfo.age}}岁</span>
          <span>{{useInfo.desc}}</span>
          <span>+{{useInfo.tag}}</span>
        </div>
        <div class="user-tag2">
          <span><a>{{useInfo.like}}</a>获赞</span>
          <span><a>543</a>关注</span>
          <span><a>{{useInfo.fans}}W</a>+粉丝</span>
        </div>
        <div class="me-ab">
          好好学习，天天向上
        </div>
      </div>
      <div class="me-tab">
        <div class="me-navbar">
          <div class="item " @click="changeTab(0)" :class="indexTab === 0? 'active' :'' ">作品</div>
          <div class="item" @click="changeTab(1)" :class="indexTab === 1? 'active' :'' ">动态</div>
          <div class="item" @click="changeTab(2)" :class="indexTab === 2 ? 'active' :'' ">喜欢21</div>
        </div>
        <div class="tab-wrap">
          <div class="tab-con" v-show="indexTab === 0">
            <div class="tab-img" v-for="(i, index) in vlist.works" :key="index">
              <img :src="i.icon" style="width:100%;height:auto" >
            </div>
          </div>
          <div class="tab-con" v-show="indexTab === 1">
            <div class="tab-img" v-for="i in vlist.movs" :key="i.id">
              <img :src="i.icon" style="width:100%;height:auto" >
            </div>
          </div>
          <div class="tab-con" v-show="indexTab === 2">
            <div class="tab-img" v-for="i in vlist.likes" :key="i.id">
              <img :src="i.icon" style="width:100%;height:auto" >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Me',
  data() {
    return {
      bgPic: {
        // eslint-disable-next-line global-require
        backgroundImage: `url(${require('../../assets/img/me_bg.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      },
      indexTab: 0,
    };
  },
  methods: {
    ...mapActions('me', ['fetchMe']),
    changeTab(index) {
      this.indexTab = index;
    },
    toEdit() {
      this.$router.push({ path: '/edit' });
    },
  },
  computed: {
    ...mapState({
      useInfo: (state) => state.me.useInfo,
      vlist: (state) => state.me.vlist,
    }),
  },
  created() { // 多用于请求请求数据
    this.fetchMe();
  },
};
</script>

<style lang="less" scoped>
  .me {
    position: relative;

    .me-top {
      height: 160px;
      display: flex;
      justify-content: flex-end;
      padding: 20px;

      .menu-box {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;

        .menu-icon {
          background: #ffffff;
          border-top: 2px solid #ffffff;
          background-clip: content-box;
          border-bottom: 2px solid #ffffff;
          width: 20px;
          height: 2px;
          padding: 5px 0;
        }
      }
    }

    .me-wrap {
      position: absolute;
      top: 140px;
      width: 100%;
      background-color: #101821;
      color: #ffffff;
      .me-content {
        padding: 0 10px;

        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
            height: 40px;
            width: 120px;
            padding: 0 2px;
            background-color: #393842;
            border: none;
            color: #ffffff;
          }

          button:nth-child(2) {}
        }

        .des {
          padding: 20px 0;
          h2 {
            font-size: 24px;
            font-weight: bold;
          }
          span {
            padding: 10px 0 15px 0;
            display: block;
          }
        }
        .des p {
          line-height: 24px;
        }

        .user-tag span {
          font-size: 14px;
          color: #686868;
          margin-right: 5px;
          background: rgba(0, 0, 0, .6);
          padding: 5px 8px;
        }

        .user-tag2 {
          padding: 20px 0;
          color: #686868;

          span {
            font-size: 14px;
            margin-right: 15px;
          }

          a {
            margin-right: 5px;
          }
        }
        .me-ab {
          background: red;
          text-align: center;
          padding: 10px 0;
          border-radius: 4px;
        }

      }
      .me-tab {
        height: 300px;
        .me-navbar {
          display: flex;
          padding: 0 20px;
          justify-content: center;
          align-items: center;
          .item {
             padding: 10px 25px ;
            color: #686868;
          }
          .active {
            border-bottom: 2px solid #ffdf03;
            color: #ffffff;
          }
        }
        .tab-wrap {
          background-color: #000;
          .tab-con {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            .tab-img {
              width: 33%;
              &:nth-child(3n) {
                border-right: 0;
              }
            }
          }
        }
      }

    }
  }
</style>
