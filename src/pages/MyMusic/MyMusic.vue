<template>
  <div id="qmyMusic-container">
    <div class="qmyMusic">
      <!-- 头部 -->
      <div class="qmyMusic-header">
        <div class="qmyMusic-header-container">
          <div class="qmyMusic-header-container-img">
            <img src="http://net.huanmusic.com/www/img/rs/黑白表情 (1) (1) (1) (1) (1) (1).png" alt />
          </div>
          <div class="qmyMusic-header-container-xinxi">
            <div class="qmyMusic-header-container-xinxi-nv">
              <span class="qmyMusic-header-container-xinxi-xiao">{{this.phone? this.phone:'小可爱'}}</span>
              <img
                class="qmyMusic-header-container-xinxi-mei"
                src="http://net.huanmusic.com/www/img/rs/女.png"
                alt
              />
            </div>
            <ul class="qmyMusic-header-container-xinxi-guanzhu">
              <li class="qmyMusic-header-container-xinxi-guanzhu1">
                <p>0</p>
                <p>关注</p>
              </li>
              <li class="qmyMusic-header-container-xinxi-guanzhu2">
                <p>0</p>
                <p>粉丝</p>
              </li>
              <li class="qmyMusic-header-container-xinxi-guanzhu3">
                <p>0</p>
                <p>发弹</p>
              </li>
              <li class="qmyMusic-header-container-xinxi-guanzhu4">
                <p>0</p>
                <p>上传</p>
              </li>
            </ul>
            <p class="qmyMusic-header-container-xinxi-jianjie">简介：小可爱????</p>
          </div>
          <div class="qmyMusic-header-container-fenxiang">分享个人主页</div>
          <div class="qmyMusic-header-container-fenxiang1" @click="musicTuichu">退出登录</div>
        </div>
      </div>
      <!-- 中间内容区 -->
      <div class="qmyMusic-content">
        <div class="qmyMusic-content-zuo">
          <div class="qmyMusic-content-zuo-shang">
            <p>我的音乐</p>
            <div></div>
            <ul >
              <li   v-for="(music,index) in this.PhoneDatas[2]" :key="index"  :class="{active:index}"  >{{music}}</li>
            </ul>
          </div>
          <div class="qmyMusic-content-zuo-xia">
            <p>我的圈子</p>
            <div></div>
            <ul  >
              <li v-for="(music,index) in this.PhoneDatas[3]" :key="index" :class="{active:index}"  >{{music}}</li>
            </ul>
          </div>
        </div>
        <div class="qmyMusic-content-you" v-if="this.PhoneDatas[0]">
          <img src="http://net.huanmusic.com/www/img/rs/黑白表情 (1) (1) (1) (1) (1) (1).png" alt />
          <P
            class="qmyMusic-content-you-jingxi"
          >{{this.PhoneDatas[1].jingxi? this.PhoneDatas[1].jingxi:'登录有惊喜'}}</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import { DELETE_DATA } from "../../store/mutation-type";
export default {
  data(){
    return {
       
      
    }
   
  },
  methods: {
    musicTuichu() {
      localStorage.removeItem("phone_key");
      this.$router.replace("/login");
      let shanchushuju = this.phone;
      this.$store.commit(DELETE_DATA, { shanchushuju });
      console.log("退出了");

      console.log(this.PhoneDatas);
    }
   
  },
  //读取状态数据
  computed: {
    ...mapState({
      PhoneDatas: state => state.login.phoneDatas
    }),
    ...mapState({
      pwd: state => state.login.pwd,
      phone: state => state.login.phone
    })
  }
};
</script>

<style scoped>


#qmyMusic-container {
  width: 100%;
  height: 100%;
  position: relative;
  
}
.qmyMusic {
  width: 100%;
  height: 100%;
}
.qmyMusic-header {
  width: 1200px;
  height: 300px;
  background: #b2b2b2;
  margin: 0 auto;
  position: relative;
}
.qmyMusic-header-container {
  width: 1060px;
  height: 180px;
  /* background: yellowgreen; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
}
.qmyMusic-header-container-img {
  width: 150px;
  height: 150px;
  /* background: skyblue; */
  display: block;
  margin: auto 30px;
}
.qmyMusic-header-container-xinxi {
  margin: auto 5px;
}
.qmyMusic-header-container-xinxi-xiao {
  font-size: 18px;
  color: #fff;
  font-weight: 700;
}
.qmyMusic-header-container-xinxi-mei {
  margin: 4px 0 0 6px;
}
.qmyMusic-header-container-xinxi-guanzhu {
  display: flex;
}
.qmyMusic-header-container-xinxi-guanzhu > li {
  width: 80px;
  height: 60px;
  /* background: pink; */
  border-left: 1px solid #fff;
}
.qmyMusic-header-container-xinxi-guanzhu > li:nth-child(4n + 1) {
  border-left: 1px solid #b2b2b2;
}
.qmyMusic-header-container-xinxi-guanzhu > li > p {
  text-align: center;
  line-height: 25px;
  color: #fff;
}
.qmyMusic-header-container-xinxi-jianjie {
  margin-top: 5px;
  color: #fff;
}
.qmyMusic-header-container-fenxiang {
  position: absolute;
  right: -70px;
  top: 0px;
  background: #3f8ed8;
  width: 160px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  text-align: center;
  border-radius: 35px 0 0 35px;
}
.qmyMusic-header-container-fenxiang1 {
  position: absolute;
  right: -70px;
  top: 50px;
  background: #3f8ed8;
  width: 160px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  text-align: center;
  border-radius: 35px 0 0 35px;
}
.qmyMusic-content {
  width: 1200px;
  height: 600px;
  /* background: pink; */
  margin: 10px auto -809px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  
}
.qmyMusic-content-zuo {
  width: 260px;
  height: 600px;
  background: #f7f7f7;
  padding: 30px;
  overflow: hidden;
}
.qmyMusic-content-zuo-shang > p {
  font-size: 20px;
  font-weight: 700;
}
.qmyMusic-content-zuo-shang > div {
  width: 200px;
  height: 1px;
  background: #b2b2b2;
  margin-top: 10px;
}
.qmyMusic-content-zuo-shang > ul > li{
  font-size: 20px;
  margin: 10px 0 20px 0;
}
.qmyMusic-content-zuo-shang > ul > li:hover{
  font-size: 20px;
  margin: 10px 0 20px 0;
}
.qmyMusic-content-zuo-shang > ul > li:active{
  background: #3f8ed8
}
.qmyMusic-content-zuo-xia > p {
  font-size: 20px;
  font-weight: 700;
}
.qmyMusic-content-zuo-xia > div {
  width: 200px;
  height: 1px;
  background: #b2b2b2;
  margin-top: 10px;
}
.qmyMusic-content-zuo-xia > ul > li {
  font-size: 20px;
  margin: 10px 0 20px 0;
}
.qmyMusic-content-zuo-xia > ul > li:active{
  background: #3f8ed8
}
.qmyMusic-content-you {
  width: 810px;
  height: 600px;
  /* background: rgb(149, 238, 138); */
  position: relative;
}
.qmyMusic-content-you > img {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.qmyMusic-content-you-jingxi {
  position: absolute;
  top: 410px;
  left: 330px;
  color: rgb(161, 134, 134);
  font-size: 22px;
}
</style>
