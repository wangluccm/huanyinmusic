<template>
  <div id="songlist">
        <div class="C-left">
          <div class="top">
            <div class="T-head">
              <div class="T-head-s">
                <span>歌单</span>
                <span class="T-red">精选</span>
              </div>
              <span class="T-trade">换一换</span>
            </div>
            <span class="T-underline"></span>           
          </div>
          <div class="bottom">           
            <ul class="B-ul">
              <li class="B-ul-li" v-for="(item, index) in mousiclist" :key="index">
                <a>
                  <img :src=item.songlist_image />
                </a>
                <div class="B-c">
                   <span class="B-bottom">
                      <a class="content">{{item.songlist_message.songlist_quantity}}</a>
                      <a>{{item.songlist_message.song_author}}</a> 
                   </span>
                   <div class="B-span">
                       <span class="referral">歌单介绍：</span> 
                       <span class="do">{{item.songlist_message.brief}}</span>
                   </div>               
                </div>
                                             
              </li>  
                       
            </ul>
          </div>
        </div>
        <div class="C-right">
          <div class="stateContainer">
            <div class="state-header">
                <div class="header-t">
                    <span class="state-t">歌榜月单</span>
                </div>
                 
                <div class="state-footer">
                    <div class="stateItem">
                        <div class="stateList">
                            <img class="state-img" src="../../../../images/01.jpg" alt="">
                            <span class="statr-S">
                            <span class="state-Span">
                                <span class="state-l">星耀</span>
                            <span class="state-r">11小时前</span>
                            </span>
                            <span class="state-m">发布了一首《xxx》新歌</span>
                            </span>                     
                        </div>
                        <div class="state-middle">
                            <img class="stateImg" src="../../../../images/01.jpg" alt="">
                            <span class="state-text">我的我的祖国
                                
                            </span>
                            <i class="iconfont icon-bofang state-icon"></i>
                        
                        </div>
                    
                    </div>
                    <div class="stateItem">
                        <div class="stateList">
                            <img class="state-img" src="../../../../images/01.jpg" alt="">
                            <span class="statr-S">
                            <span class="state-Span">
                                <span class="state-l">星耀</span>
                            <span class="state-r">11小时前</span>
                            </span>
                            <span class="state-m">发布了一首《xxx》新歌</span>
                            </span>                     
                        </div>
                        <div class="state-middle">
                            <img class="stateImg" src="../../../../images/01.jpg" alt="">
                            <span class="state-text">我的我的祖国
                                
                            </span>
                            <i class="iconfont icon-bofang state-icon"></i>
                        
                        </div>
                    
                    </div>
                    <div class="stateItem">
                        <div class="stateList">
                            <img class="state-img" src="../../../../images/01.jpg" alt="">
                            <span class="statr-S">
                            <span class="state-Span">
                                <span class="state-l">星耀</span>
                            <span class="state-r">11小时前</span>
                            </span>
                            <span class="state-m">发布了一首《xxx》新歌</span>
                            </span>                     
                        </div>
                        <div class="state-middle">
                            <img class="stateImg" src="../../../../images/01.jpg" alt="">
                            <span class="state-text">我的我的祖国
                                
                            </span>
                            <i class="iconfont icon-bofang state-icon"></i>
                        
                        </div>
                    
                    </div>
                    <div class="stateItem">
                        <div class="stateList">
                            <img class="state-img" src="../../../../images/01.jpg" alt="">
                            <span class="statr-S">
                            <span class="state-Span">
                                <span class="state-l">星耀</span>
                            <span class="state-r">11小时前</span>
                            </span>
                            <span class="state-m">发布了一首《xxx》新歌</span>
                            </span>                     
                        </div>
                        <div class="state-middle">
                            <img class="stateImg" src="../../../../images/01.jpg" alt="">
                            <span class="state-text">我的我的祖国
                                
                            </span>
                            <i class="iconfont icon-bofang state-icon"></i>
                        
                        </div>
                    
                    </div>
                </div>
                
            </div>
          </div>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    mounted(){
      
      this.$store.dispatch('getMusicAction')
     
    },

    computed:{
      ...mapState({
        mousiclist:state=>state.mousiclist
      })
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#songlist  
      height 670px   
      display flex
      justify-content space-between   
      .C-left
        width 880px
        .top
          display flex
          flex-direction column
          height 30px
          .T-head
            width 880px
            display flex
            justify-content space-between
            .T-head-s
              .T-red
                color red
            .T-trade 
              width 60px
              height 20px
              border-radius 10px
              text-align center
              background pink 
              color red
          .T-underline
            width 100%
            height  2px
            background  red  
        .bottom
          display flex
          flex-direction column
          justify-content space-between
          .B-ul
            width 880px
            height 450px
            display flex
            flex-wrap wrap
            justify-content space-between
            .B-ul-li
              width 280px
              height 300px
              background #eee  
              display flex
              flex-direction column     
              margin-bottom 30px  
              overflow hidden  
              white-space: wrap; 
              text-overflow: ellipsis               
              img 
                width 280px
                height 170px
              .B-c   
                width 240px
                height 130px
                background #eee
                margin 0 auto
              .B-bottom    
                height 40px
                line-height 40px           
                display flex
                justify-content space-between
                border-bottom  1px solid red
              .B-span
                height 70px
                padding-top 7px
                display flex
                flex-direction column
                .referral
                  font-size 13px  
                  color #da9c3b
                .do
                  text-indent 2em 
                  line-height 16px                
                  font-size 12px
                  overflow hidden
                  text-overflow: ellipsis
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical    


      .C-right
        width 290px 
        .stateContainer   
            // margin-top 20px
            height 100%
            .state-header
                width 282px
                height 662px
                border 1px solid #dddddd
                border-radius 10px
                overflow hidden
            .header-t
                width 282px
                height 50px
                background #f27a7a
                border-radius 10px 10px 0 0
                .state-t
                    color #fff
                    font-size 18px
                    height 50px
                    width 282px
                    line-height 50px
                    margin-left 10px
                
            .state-footer
                height 117px
                display flex
                flex-direction column
                margin 20px 0 0 0
                display flex
            .stateItem
                width 260px
                height 100px
                margin 0 auto
                padding-bottom 20px
                margin-bottom 30px
                border-bottom 1px dashed #dddddd
            // &:last-child
            //   border none
                
                
            .stateList
                height 44px
                display flex
                justify-content space-between
                .state-img
                    width 40px
                    height 40px
                    border-radius 50%
                .statr-S
                    display flex
                    flex-direction column
                    justify-content space-around
                .state-Span
                    display flex
                    justify-content space-between
                    width 220px
             .state-l
                color #f40
                font-size 12px 
             .state-r
                color #333333 
                font-size 12px
             .state-m
                color #333333
                font-size 12px
            .state-middle
                color #ffffff
                width  210px
                height 45px
                float right
                margin-top 10px
                background rgba(0,0,0,0.65)
            .stateImg
                width 45px
                height 45px
                display block
                float left
            .state-text
                
                display block
                float left
                wdith 110px
                height 20px
                font-size 12px
                line-height 20px
                margin 10px 0 0 12px
            .state-icon
                font-size 20px
                display block
                float right 
                margin 12px 10px 0 12px  
 
</style>
