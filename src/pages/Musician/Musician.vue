<template>
  <div id="musicContainer">
    <div id="music">
        
      <div class="header">
        <span>
          <img @click="gomusician" class="header-img" src="../../../images/01.jpg" alt="">
        </span>
        <ul class="header-r">
          <li class="headerItem" v-for="(item, index) in songs" :key="index" @click="gomusician">
            <img class="headerItemImg" :src=item.songmenu_img alt="">
            <span class="headerName">{{item.songmenu_title}}</span>
          </li>
          
    </ul>
    
    </div>
      <div class="shiye">
        <div class="middle">
          <span class="middle-l">最热</span>
          <span class="middle-l-r">音乐人</span>
          <span class="middle-r">换一换</span>
          <p></p>
           <p class="middle-kong"></p>
           <MusicList/>
          

           
           
           
      </div>
      
            
             <div class="MusicRight">
               <button class="MusicBtn">申请幻音音乐人</button>
                 <MusicState/>
             </div>
           
      </div>
    
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MusicList from './MusicList/MusicList'
import MusicState from './MusicState/MusicState'
import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getSongListAction')
    },
    components:{MusicList,MusicState},
    methods: {
      gomusician(){
      this.$router.replace('/songlist')  
      }
    },
    computed: {
      ...mapState({
       songs:state=>state.songs  
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #music
      width 1200px
      height 100%
      margin 20px auto 0
      cursor default
    .header
      width 100%
      height 100%
      margin 0 auto
      display flex
      .header-img
        width 630px
        height 280px
        border 1px solid #fff
        border-radius 20px
     .header-r
       display flex
       flex-wrap wrap
      .headerItem
        display flex
        flex-direction column
        margin-left 19px
        .headerItemImg
            width 170px
            height 130px
            border-radius 20px
        .headerName
            width 170px
            background #c99999 
            color  #fff
            margin-top -16px
            text-align center
   .shiye
       display flex
    .middle
       margin-top 45px
       width 888px
      .middle-l
        font-size 25px
      .middle-l-r
        font-size 25px
        color #f27a7a
      .middle-r
          margin-left 715px
          background #fddbdb
          color #f27a7a
          border-radius 10px
          
          
          font-size 15px
      p
       height 2px
       background #f27a7a
       margin-top 10px
      .middle-kong
        height 4px
        background #f27a7a
        width 125px
        margin-top -6px
       
    .MusicRight
      width 310px
      margin-left 30px
      margin-top 40px
     .MusicBtn
        width 280px
        height 55px
        background #f27a7a
        color #ffffff
        border-style none 
        font-size 25px 
        border 2px solid #c91d1d
       
        border-radius 10px

    
      
      
      
        

       

        

        
         
         
 
</style>
