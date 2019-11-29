<template>
  <div id="hot">
         <div class="C-left">
          <div class="top">
            <div class="T-head">
              <div class="T-head-s">
                <span>热门</span>
                <span class="T-red">圈子</span>
              </div>
              <span class="T-trade">换一换</span>
            </div>
            <span class="T-underline"></span>           
          </div>
          <div class="bottom">           
            <ul class="B-ul">
              <li class="B-ul-li" v-for="(item,index) in songcircles" :key="index">
                <div class="B-ul-li-content">
                  <a>
                    <img :src=item.cil_img />
                  </a>
                  <span class="B-bottom">
                    <a class="content">{{item.cil_name}}</a>
                    <a>{{item.dynamic.title}}</a> 
                    <span class="cd">
                      <span>成员：3</span>                
                      <span>动态：6</span>
                    </span>
                    
                  </span> 
                  
                </div>                                             
              </li>  
                  
            </ul>
          </div>
        </div>
        
 </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getSongcircles')
    },
    computed:{
      ...mapState({
         songcircles:state=>state.songcircles
      })
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 #hot
      margin-top 40px
      .C-left
        width 1200px
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
              text-align center
              background pink 
              color red
          .T-underline
            width 100%
            height  2px
            background  red  
        .bottom
          display flex
          justify-content space-between
          height 370px
          margin-top 20px
          .B-ul
            width 1200px
            height 280px
            display flex
            flex-wrap wrap
            justify-content space-between
            .B-ul-li
              width 355px
              height 140px
              padding 10px 20px 10px 10px          
              border 1px solid #eee
              margin-bottom 20px
              .B-ul-li-content
                width 365px
                height 140px
                display flex
                justify-content space-between
                img
                  width 120px
                  height 140px
                .B-bottom
                  width 230px
                  height 140px 
                  display flex
                  flex-direction column
                  a
                   text-align left 
                   margin 8px 0 12px 0
                  .cd 
                    margin-top 45px
                    font-size 13px
                    display flex
                    justify-content space-between
                    padding-right 20px
 
</style>
