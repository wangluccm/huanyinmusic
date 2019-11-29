<template>
  <div class="musicMiddle">
     <ul class="MusicList">
       <li class="MusicItem" v-for="(item, index) in musician" :key="index" @click="gosonglist">
         <img class="MusicImg" :src=item.music_image alt="">
         <h4>{{item.music_name}}</h4>
         <span class="MusicP"></span>
         <div class="Musician" v-for="(item, index) in item.music_list" :key="index">
           <span class="MusicText">{{item.music_song}} </span>
         </div>
       </li>
        
         
     
     </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    mounted() {
      
      this.$store.dispatch('getMusicianListAction')
    },
    methods: {
    gosonglist(){
      this.$router.replace('/songlist')
    }
  },
  computed: {
    ...mapState({
      musician:state=>state.musician
    })
  },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .musicMiddle
   margin-top 20px
   width 890px
  .MusicList
     margin 20px 0 0 0
     display flex
     flex-wrap wrap
   .MusicItem
      display flex
      flex-direction column
      margin-top 10px
      margin-right 25px
    .MusicImg
      width 120px
      height 120px
      border-radius 50%
      margin-bottom 10px
    h4
     font-size 25px
     color  #5f5f5f
     cursor pointer
    h4:hover
      color pink
     
    .MusicP
      border 1px dotted #bec4cb
      width 150px
      margin 10px 0
    .Musician
      display flex
    .MusicText
      margin 10px 0
      width 150px
      color #5f5f5f
      cursor default
    .MusicText:hover
      color pink
   
   
      
 
</style>
