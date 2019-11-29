<template>
  <div id="custom">
    <div class="C-left">
        <div class="top">
        <div class="T-head">
            <div class="T-head-s">
              <span>私房</span>
              <span class="T-red">定制</span>
            </div>
            <span class="T-trade">换一换</span>
        </div>
        <span class="T-underline"></span>           
        </div>
        <div class="bottom">
        <div class="B-img">
            <a>
              
            <img src="https://net.huanmusic.com/www/img/rs/%E7%82%B9%E5%87%BB%E8%BF%9B%E5%85%A5%E4%BD%A0%E7%9A%84%E4%B8%93%E5%B1%9E%E9%9F%B3%E4%B9%90%E4%B8%96%E7%95%8C~.png"/>
            </a>
        </div>
        <ul class="B-ul">
            <li class="B-ul-li" v-for="(cust, index) in custom" :key="index">
              <a>
                  <img :src=cust.wang_img />
              </a>
              <div class="B-ul-li-a">
                  <a>{{cust.wang_title}}</a>
                  <a>{{cust.wang_name}}</a>
              </div>
            </li>
           
        </ul>
        </div>
    </div>
    <div class="C-right">
        <div class="code">
          <img src="https://net.huanmusic.com/www/img/rs/%E7%BB%84219.png">
        </div>
        <div class="calendar">
          <span class="calendar-li">路路日历</span>
          <span class="calendar-now">
            {{nowTime}}
          </span>
          
        </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'

import {parseDate2Str} from '../../Comment/Day'
  export default {
    data(){
      return{
          nowTime:parseDate2Str(new Date(), "YYYY-MM-DD HH:mm:ss"),

          timer:''
      }
    },
    mounted(){

      this.$store.dispatch('getCustomList')
    },

 
    computed:{
      ...mapState({
        custom:state=>state.custom
      })
      
    },
    created() {
      //定时器：获取本地时间
      this.timer = setInterval(() => {
        this.nowTime =parseDate2Str(new Date(), "YYYY-MM-DD HH:mm:ss")
      }, 1000);
    },
    beforeDestroy() {
      //在vue实例销毁前，清除定时器
      if (this.timer) {
       clearInterval(this.timer);
      }

    }

    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #custom
      height 330px
      margin-top 40px
      display flex
      justify-content space-between
      .C-left
        width 990px
        .top
          display flex
          flex-direction column
          height 30px
          .T-head
            width 990px
            display flex
            justify-content space-between
            .T-head-s
              .T-red
                color red
            .T-trade 
              display inline-block
              width 60px
              height 20px
              border-radius 10px
              background pink
              text-align center 
              color red
          .T-underline
            width 100%
            height  2px
            background  red  
        .bottom
          display flex
          justify-content space-between
          .B-img
            img 
              width 310px
              height 280px
          .B-ul
            width 660px
            height 280px
            display flex
            flex-wrap wrap
            justify-content space-between
            .B-ul-li
              width 320px
              height 80px
              background #eee
              display flex
              justify-content space-between
              margin-bottom 20px
              img 
                width 80px
                height 80px
              .B-ul-li-a
                width 240px
                margin-left 10px
                display flex
                flex-direction column
                justify-content space-around


      .C-right
        width 190px 
        height 310px
        display flex
        flex-direction column
        justify-content space-between
        .code
          
          height 134px
          img 
            width 190px
            height 134px
        .calendar
          display flex
          flex-direction column
          background-image url('http://net.huanmusic.com/www/img/head/%E6%97%A5%E5%8E%86.png')
          height 180px   
          .calendar-li
            height 52px
            line-height 52px
            text-align center
            color #fff
            font-size  20px
          .calendar-now
            height 20px
            margin-top 20px
            text-align center
            font-size 25px
            color #f27a7a  
</style>
