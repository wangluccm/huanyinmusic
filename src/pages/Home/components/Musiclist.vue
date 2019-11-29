<template>
  <div id='musiclist'>
    <div class="C-left">
        <div class="top">
            <div class="T-head">
                <div class="T-head-s">
                <span>幻音</span>
                <span class="T-red">音乐榜</span>
                </div>
                <span class="T-trade">更多</span>
            </div>
        <span class="T-underline"></span>           
        </div>
        <div class="bottom" v-if="musiclist.length>0">
          <div class="B-content">
              <img src="https://net.huanmusic.com/www/img/rs/%E5%8E%9F%E5%88%9B1.png"/>
              <ul class="B-ul">
                  <li class="B-ul-li" v-for="(orig, index) in musiclist[0].original" :key="index">
                      <a>
                      <img :src=orig.original_img />
                      </a>
                      <span class="B-ul-li-span">
                      <a>{{orig.original_name}}</a>
                      <a>{{orig.original_detail}}</a>
                      </span>
                  </li>  
                
              </ul>
          </div>   
          <div class="B-content">
              <img src="https://net.huanmusic.com/www/img/rs/%E7%BF%BB%E5%94%B11.png"/>
              <ul class="B-ul">
                  <li class="B-ul-li" v-for="(cove,index) in musiclist[1].cover" :key="index">
                      <a>
                      <img :src=cove.cover_img />
                      </a>
                      <span class="B-ul-li-span">
                      <a>{{cove.cover_name}}</a>
                      <a>{{cove.cover_detail}}</a>
                      </span>
                  </li>  
                    
              </ul>
          </div> 
          <div class="B-content">
              <img src="https://net.huanmusic.com/www/img/rs/%E7%83%AD%E6%AD%8C1.png"/>
              <ul class="B-ul">
              <li class="B-ul-li" v-for="(hots,index) in musiclist[2].hotsong" :key="index">
                  <a>
                  <img :src=hots.hotsong_img />
                  </a>
                  <span class="B-ul-li-span">
                  <a>{{hots.hotsong_name}}</a>
                  <a>{{hots.hotsong_detail}}</a>
                  </span>
              </li>  
                      
              </ul>
          </div>         
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">


import {mapState} from 'vuex'
  export default {
      data(){
        return {
          // musiclist:[],

        }
      },
      mounted(){
        // console.log(this.$store)
        // setTimeout(()=>{
            
        // },1000)
        this.$store.dispatch('getMusicListt')
        //  console.log(this.$store.musiclist)
        // if (!this.$store.state.musiclist) {
        //   return
        // }
        // setTimeout(()=>{
            // let arr= this.$store.state.musiclist
            // console.log(arr)
            // this.musiclist = arr[0]
            // console.log(this.musiclist)
        // },100)
        // this.$nextTick(() => { // 页面下一次全部渲染完毕
           
        //  })
        
      },
      computed:{
          ...mapState({
             musiclist:state=>state.musiclist,
             

          })
      },
      // watch:{

      //   // this.$nextTick(() => { // 页面下一次全部渲染完毕
          
      //   // })
      // }


  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#musiclist
     .C-left
        width 1200px
        height 652px
        margin-top 60px
        .top
          display flex
          flex-direction column
          height 30px
          .T-head
            width 1200px
            display flex
            justify-content space-between
            .T-head-s
              .T-red
                color red
            .T-trade 
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
          .B-content
            width 380px
            height 580px  
            img 
             display block   
            .B-ul
              height 540px
              background #f4efef
              padding-top 15px
              .B-ul-li
                margin 0px 20px 20px 20px
                display flex
                justify-content space-between
                img 
                  width 84px
                  height 87px
                .B-ul-li-span
                  width 256px
                  display flex   
                  flex-direction column            
                  a
                   margin-top 20px  
                   margin-left 14px 
                   width 256px
                   text-align left
 
</style>
