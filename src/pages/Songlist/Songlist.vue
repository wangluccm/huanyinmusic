<template>
  <div id="songlistContainer">
     <div class="songlist">
        <div>
          <div class="songheader">
            <img class="songImg" src="../../../images/01.jpg" alt="">
            <div class="userName">
                <span class="user-name">洛天依</span>
            </div>
            <div class="count">
               单曲：1896首
            </div>
            <div class="moods">
               人气：100000000
            </div>
            <div class="message">
               简述：洛天依是以Yamaha公司的VOCALOID 3语音合成引擎为基础制作的全世界洛天依是以Yamaha公司的VOCALOID 3语音合成引擎为基础制作的全世界
            </div>
            <div class="Newmusic">
                <img class="Newmusicl" src="http://net.huanmusic.com/www/playlist/%E5%8A%A0%E5%85%A5%E6%AD%8C%E5%8D%95.png" alt="">
                <img class="Newmusicm" src="http://net.huanmusic.com/www/playlist/%E5%88%86%E4%BA%AB.png" alt="">
                <div style="position:relative">
                  <img class="Newmusicr" src="http://net.huanmusic.com/www/playlist/%E6%94%B6%E8%97%8F%E5%89%8D.png" alt="">
                </div>
            </div>
          </div>
         <div class="songlistmiddle">
            <div class="listone">
                  <b class="one-one">热门歌曲</b>
                  <div class="lisione-1">
                    <b class="one-two">顺序播放</b>
                    <b class="one-three">循环播放</b>
                  </div>
            </div>
            <div class="listTwo"  v-for="(item, index) in sings" :key="index" @click="seen">
                 <span class="listTwo-2">{{item.singsong_name}}</span>
                 <div class="songName">
                     <span class="Name">
                       {{item.sing_author}}
                     </span>
                 </div>
                 <div class="song-right">
                     <span class="time">{{item.sing_time}}</span>
                 </div>
            </div>
             


            
            <div class="song-footer">
               <a class="active-A">1</a>
               <a>2</a>
               <a>3</a>
               <a>4</a>
               <a>5</a>
               <a>6</a>
               <a>...</a>
               <a>99</a>
               <a>></a>
            </div>
           
         </div>
        </div>         
     </div>
     <div class="songright">
        <div class="songright-header">
          <div class="songright-text">
            <span class="Text-l">音乐人</span>
            <span class="Text-r">相关状态</span>
          </div>
          <div class="songright-header-middle">
                <div class="songrightItem">
                  <img class="songrightItemImg" src="../../../images/01.jpg" alt="">
                  <span class="songrightItemP">朋友，你经历过绝望吗</span>
                  <span class="songrightText">
                    <span class="songText-l">up主:卡巴基佬真是多</span>
                    <span class="songText-r">阅读数：1234</span>
                  </span>
                </div>
          </div>
          <div class="songright-header-middle">
                <div class="songrightItem">
                  <img class="songrightItemImg" src="../../../images/02.png" alt="">
                  <span class="songrightItemP">朋友，你经历过绝望吗</span>
                  <span class="songrightText">
                    <span class="songText-l">up主:卡巴基佬真是多</span>
                    <span class="songText-r">阅读数：1234</span>
                  </span>
                </div>
          </div>
           <div class="songright-header-middle">
                <div class="songrightItem">
                  <img class="songrightItemImg" src="../../../images/03.jpg" alt="">
                  <span class="songrightItemP">朋友，你经历过绝望吗</span>
                  <span class="songrightText">
                    <span class="songText-l">up主:卡巴基佬真是多</span>
                    <span class="songText-r">阅读数：1234</span>
                  </span>
                </div>
          </div>
           <div class="songright-header-middle">
                <div class="songrightItem">
                  <img class="songrightItemImg" src="../../../images/04.jpg" alt="">
                  <span class="songrightItemP">朋友，你经历过绝望吗</span>
                  <span class="songrightText">
                    <span class="songText-l">up主:卡巴基佬真是多</span>
                    <span class="songText-r">阅读数：1234</span>
                  </span>
                </div>
          </div>
           <div class="songright-header-middle">
                <div class="songrightItem">
                  <img class="songrightItemImg" src="../../../images/05.jpg" alt="">
                  <span class="songrightItemP">朋友，你经历过绝望吗</span>
                  <span class="songrightText">
                    <span class="songText-l">up主:卡巴基佬真是多</span>
                    <span class="songText-r">阅读数：1234</span>
                  </span>
                </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import Forabout from '../../components/Forabout/Forabout'
  export default {
    data(){
      return{
        seen:false,
      }
    },
    mounted() {
      this.$store.dispatch('getSingListAction')
    },
    computed: {
      ...mapState({
       sings:state=>state.sings  
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#songlistContainer
  width 1200px
  margin 0 auto
  display flex
  justify-content space-between
  .songlist
     width 1200px
     height 100%
     margin 20px auto 0
   .songheader
     width 880px
     height 196px
    .songImg
      width 196px
      height 196px
      float left
    .userName
       width 600px
       float left 
       margin-top 15px
       margin-left 33px
       margin-bottom 15px
       display flex
     .user-name
        height 30px
        font-size 30px
        line-height 30px
        color #000
    .count
      float left
      margin-left 33px
      width 600px
      height 15px
      font-size 16px
      line-height 16px
     .moods
      float left 
      margin-left 33px
      width 600px
      height 15px
      font-size 16px
      line-height 16px
      margin-top 8px
     .message
       margin-top 18px
       width 600px
       float left
       margin-left 33px
       overflow hidden
       white-space nowrap
       text-overflow ellipsis
       font-size 16px
       line-height 16px
     .Newmusic
       margin-bottom 16px
       margin-top 18px
       width 600px
       float left 
       margin-left 33px
      .Newmusicl
        float left 
        margin-right 22px
        cursor pointer 
      .Newmusicm
        float left 
        margin-right 22px
        cursor pointer
      .Newmusicr
        float left 
        margin-right 22px
        cursor pointer
      
   .songlistmiddle
      width 880px
      margin-top 50px
    .listone
      padding-bottom 17px
      height 33px
      border-bottom 7px solid #f27a7a
     .one-one
      color #f27a7a
      line-height 10px
      font-size 30px
      float left
     .lisione-1
       float right
      .one-two
        float left 
        font-weight 400
        font-size 14px
        display inline-block
        cursor pointer
        
      .one-three
         float left 
         font-size 400px
         font-size 14px
         display inline-block
         cursor pointer
         margin-left 20px
    .listTwo
      width 100%
      height 60px
      background-color #fff
      transition all .2s ease-in-out
     .listTwo-1
       width 60px
       height 60px
       text-align center
       float left
       line-height 60px 
     .listTwo-2
       width 370px
       color #444
       float left
       line-height 60px 
     .songName
        width 140px
        float left 
        line-height 60px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        margin-left 50px
        .Name
          cursor pointer
     .song-right
       width 100px
       height 60px
       position relative
       float right
       box-sizing border-box
       padding 0 20px 0 0
      .time
        text-align right
        visibility visible
        line-height 60px
    .song-footer
      margin-top 10px
      height 38px
     .active-A
       background #f56760
       color #fff !important
       box-shadow  0 0 0 1px #f56760!important
     a
      display inline-block
      width 35px
      height 35px
      margin-right 7px
      text-align center
      box-shadow 0 0 0 1px #ddd
      color #5e5e5e
      font-size 14px
      line-height 35px
      cursor pointer
      background #fff
      margin-top -20px
     a:hover
       color #ffffff
       background #f56760
   .songright
        float right
        background #ffffff
        box-sizing border-box
        margin-top 30px
    .songright-header
      width 282px
      margin-top 15px
      margin-left 34px
     .songright-text
        margin-bottom 5px
        height 25px
      .Text-l
        color #444
        font-size 16px
        font-weight 700
        float left
      .Text-r
        color #f27a7a
        font-size 16px
        font-weight 700
        float left
     .songrightItem
        height 86px
        width 100%
        overflow hidden
        border-bottom 1px dashed #ddd
      .songrightItemImg
        width 66px
        height 66px
        display block
        float left 
        background-position 50%
        background-size cover
        margin 10px
      .songrightItemP
        display block
        float left
        font-size 12px
        width 195px
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        cursor pointer
        margin-top 20px
      .songrightText
        display block
        float left
        font-size 12px
        width 195px
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        cursor pointer
        color #666
        margin-top 20px
       .songText-l
         width 120px
         float left 
         overflow hidden
         white-space nowrap
         text-overflow ellipsis
         
         
       .songText-r
         width 70px
         float left
         text-align left


  </style>
