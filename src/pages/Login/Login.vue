<template>
  <div id="login-l">
    <MyMusic/>
    <div id="login">
      <div class="login-div">
        <div class="login-logo"></div>
        <div class="login-close" @click="loginlogin"></div>
        <div class="login-content">
          <p>幻音账号登录</p>
          <input
            type="text"
            v-validate="'required|mobile'"
            placeholder="请输入手机号码"
            name="phone"
            v-model="phone"
          />
          <span style="color:red;">{{errors.first('phone')}}</span>
          <p class="login-content-p">
            <input
              v-validate="'required'"
              :type="isShowPassWord?'tel':'password'"
              placeholder="输入密码（6-16位）"
              name="pwd"
              v-model="pwd"
            />
            <span style="color:red;">{{errors.first('pwd')}}</span>
            <span class="login-content-p-huadong">
              <span
                :class="isShowPassWord? 'huadongyuan':'logincontenthuadong'"
                @click="isShowPassWord = !isShowPassWord"
              ></span>
            </span>
          </p>
          <p class="login-content-checkbox">
            <input type="checkbox" checked="true" name="autologin" />
            <span class="login-content-checkbox-span1">自动登录</span>
            <span class="login-content-checkbox-span2">
              <!-- 阻止a链接跳转 -->
              <a href="javascript:;">忘记密码</a>
            </span>
          </p>
          <p class="login-content-login">
            <button type="submit" @click.prevent="tologin">立即登录</button>
          </p>
        </div>
        <div class="login-footer">
          <h3>--------使用合作网站账号登录--------</h3>
          <div class="login-footer-logo">
            <div class="login-footer-qq"></div>
            <div class="login-footer-weibo"></div>
            <div class="login-footer-weixin"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { phone } from "../../api";
import { ADD_PHONE } from "../../store/mutation-type";
import { mapState } from "vuex";
import  MyMusic  from "../MyMusic/MyMusic";
export default {
  data() {
    return {
      isShowPassWord: false, // 密码显示/隐藏
      pwd: "",
      phone: ""
    };
  },
  methods: {
    async tologin() {
      let pwd = this.pwd; //获取输入的密码
      let phone = this.phone; //获取输入的手机号
      //判断用户名是否正确
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
        this.$router.replace("/myMusic"); //跳转路由
      } else {
        alert("密码输入有误请重新输入");
        //this.$router.replace('/myMusic')
      }

      const success = await this.$validator.validateAll(); //对所有表单项进行验证
      this.$store.commit(ADD_PHONE, { pwd, phone });
    },
    //X号
    loginlogin() {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
        this.pwd = " ";
        this.phone = " ";
        console.log(this.pwd, this.phone);
        localStorage.removeItem("pwd_key", "phone_key");
        this.$router.replace("/myMusic"); //跳转路由
      }
    }
  },
  components: {
    MyMusic
  },

  //async
  mounted() {
    this.$store.dispatch("gitPhoneDatasAction");
    localStorage.removeItem("pwd_key", "phone_key");
  }
};
</script>

<style scoped>
#login-l{
   width: 100%;
  height: 100%;
  background: #ccc;
  
}
.login {
  width: 100%;
  height: 100%;
  z-index: 48;
}
.login-div {
  width: 440px;
  height: 485px;
  background: rgb(231, 219, 233);
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom:0 ;
  margin: auto;
  z-index: 99
 
}
.login-logo {
  position: absolute;
  top: 18px;
  left: 71px;
  width: 286px;
  height: 60px;
  background-image: url(http://net.huanmusic.com/www/幻音logo.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.login-content {
  padding: 105px 22px 0px;
}
.login-content > p {
  margin-bottom: 23px;
  font-weight: bold;
}
.login-content > input {
  width: 396px;
  height: 36px;
  font-size: 12px;
  padding-left: 20px;
  color: #b0b0b0;
  font-family: SimSun;
}
.login-content-p {
  margin: 7px 0 0 0;
  position: relative;
}
.login-content-p > input {
  width: 396px;
  height: 36px;
  font-size: 12px;
  padding-left: 20px;
  color: #b0b0b0;
  font-family: SimSun;
}
.login-content-checkbox {
  margin: 20px 0 20px 0;
}
.login-content-checkbox-span1 {
  color: #aaa;
}
.login-content-checkbox-span2 {
  color: #aaa;
  float: right;
}
.login-content-login {
  margin: 20px 0 20px 0;
}
.login-content-login > button {
  width: 100%;
  height: 34px;
  background-color: #9acaeb;
  position: relative;
}
.login-content-p-huadong {
  display: block;
  width: 50px;
  height: 25px;
  background: #9acaeb;
  border-radius: 25px;
  position: absolute;
  top: 7px;
  right: 5px;
}
.login-content-p-huadong > span {
  width: 25px;
  height: 25px;
  display: block;
  background: rgb(231, 77, 77);
  border-radius: 50%;
  transition: 0.5s;
}
.logincontenthuadong {
  width: 25px;
  height: 25px;
  display: block;
  background: blue;
  border-radius: 50%;
}
.huadongyuan {
  transform: translate(25px);
  transition: 0.5s;
}

.login-footer {
  padding: 0px 22px 22px 20px;
  width: 100%;
  text-align: center;
}
.login-footer > h3 {
  color: #ccc;
}
.login-footer-logo {
  display: flex;
  margin: 15px 0 0 100px;
}

.login-footer-qq {
  width: 40px;
  height: 40px;
  background-image: url("https://net.huanmusic.com/QQ.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px !important;
  margin-right: 32px;
}
.login-footer-weibo {
  width: 40px;
  height: 40px;
  background-image: url("https://net.huanmusic.com/新浪.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px !important;
  margin-right: 32px;
}
.login-footer-weixin {
  width: 40px;
  height: 40px;
  background-image: url("https://net.huanmusic.com/微信.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px !important;
}
.login-close {
  background-image: url("https://net.huanmusic.com/www/img/login/x.png");
  width: 34px;
  height: 34px;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
