<template>
  <div id="box">
    <div id="home-conter">
      <div id="swiper">
        <!-- <div class="img">
          <img @click="gohello" src="../../../images/01.jpg">
        </div> -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img @click="gohello" src="http://net.huanmusic.com/4df0cffa-5765-4ed8-995e-7c100cd8a739.jpg?imageview/2/w/720/h/370/q/100"></div>
            <div class="swiper-slide"><img @click="gohello" src="http://net.huanmusic.com/1248b292-42c6-41e9-a255-dace8b3dbdec.jpeg?imageview/2/w/720/h/370/q/100"></div>
            <div class="swiper-slide"><img @click="gohello" src="http://net.huanmusic.com/35f50cb4-a0d0-450a-a6b2-88b5e58e436a.jpg?imageview/2/w/720/h/370/q/100"></div>
             <div class="swiper-slide"><img @click="gohello" src="http://net.huanmusic.com/35f50cb4-a0d0-450a-a6b2-88b5e58e436a.jpg?imageview/2/w/720/h/370/q/100"></div>
              <div class="swiper-slide"><img @click="gohello" src="http://net.huanmusic.com/35f50cb4-a0d0-450a-a6b2-88b5e58e436a.jpg?imageview/2/w/720/h/370/q/100"></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>  
        <ul class="S-ul"> 
          <li class="S-ul-li">
            <a>
              <img src="http://net.huanmusic.com/921a1cf8-ff5a-4cfa-b6e5-02a62d847703"/>
            </a>
          </li>
          <li class="S-ul-li">
            <a>
              <img src="http://net.huanmusic.com/71ad6ba3-5062-475d-b77c-18d718d82fbd.jpg"/>
            </a>
          </li>
          <li class="S-ul-li">
            <a>
              <img src="http://net.huanmusic.com/13faddfc-f3d9-4a86-8efe-8f3d282e8d14.png"/>
            </a>
          </li>
          <li class="S-ul-li">
            <a>
              <img src="http://net.huanmusic.com/87909ad6-d9d2-4ebe-b28e-5fb556fe4093.jpg"/>
            </a>
          </li>          
        </ul>
      </div>
      <Custom />
      <Everyday/>
      <Songlist/>
      <Musiclist/>
      <Musician/>
      <Hot/>
    </div>   
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
 import 'swiper/css/swiper.min.css'
  import Custom from './components/Custom' 
  import Everyday from './components/Everyday' 
  import Songlist from './components/Songlist' 
  import Musiclist from './components/Musiclist' 
  import Musician from './components/Musician' 
  import Hot from './components/Hot' 
  export default {
    components:{
      Custom,//私房定制
      Everyday,//每日新歌榜
      Songlist,//歌单精选
      Musiclist,//幻音音乐榜
      Musician,//幻音音乐人推荐
      Hot//热门圈子
    },

    methods: {
      gohello(){
       this.$router.replace('/comment')  
      }
    },
    mounted(){
      this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
          new Swiper('.swiper-container', {
            loop: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
          })
        })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
#box
  width 100vw
  height 100%
  
  #home-conter
    width 1200px
    height 100%
    margin 0 auto
    #swiper
      height 285px    
      margin-top 20px
      display flex
      justify-content space-between
      .swiper-container
        width 720px
        height 285px
        overflow hidden
        --swiper-theme-color: #ff6600
        
        img 
         width 720px
         height 280px 
         border-radius 10px
        .swiper-wrapper 
          position relative
        .swiper-pagination-bullets
          left 276px
          .swiper-pagination-bullet
            width 10px
            height 10px
            border-radius 50px
           .swiper-pagination-custom, .swiper-pagination-fraction
            bottom 15px
      .S-ul
        width 460px    
        display flex
        justify-content space-between 
        flex-wrap wrap  
        height 285px
        .S-ul-li
          margin-bottom 17px
          img 
            width 220px
            height 130px
 
    
   

    
   
</style>
