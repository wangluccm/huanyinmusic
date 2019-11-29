<template>
  <div class="headerlist">
      <div class="upperHalf">
        <img src="https://net.huanmusic.com/www/img/rs/%E5%B9%BB%E9%9F%B3logo2.png" alt="">
        <div class="upperHalf_left">
          <a href="javascript:" class="x_rankinglist">
            <img src="http://net.huanmusic.com/www/img/head/%E6%8E%92%E8%A1%8C%E6%A6%9C.png" alt="" @click="toHome">
          </a>
          <form action="##">
            <input type="text" class="searchBox" placeholder="大家都在搜：银魂">
          </form>
          <div class="x_dynamic">
            <img src="http://net.huanmusic.com/www/img/rs/1.gif" alt="">
          </div>
          <div class="x_choice_sign">
          <a href="javascript:" class="a_choice_sign">登录</a>
          </div>
          <div class="x_choice_shuxian">&#124;</div>
          <div class="x_choice_register">
          <a href="javascript:" class="a_choice_register">注册</a>
          </div>
        </div>
      </div>
      <div class="lowerHalf">
        <div class="menu_body">
          <ul class="lowerHalf_ul">
            <li class="lowerHalf_li" 
            :class="{active:$route.path === '/home'}" @click="gopath('/home')"
            >发现音乐</li>
            <li class="lowerHalf_li"
            :class="{active:$route.path==='/Musician'}" @click="gopath('/Musician')"
            >音乐人</li>
            <li class="lowerHalf_li"
            :class="{active:$route.path==='/tribes'}" @click="gopath('/tribes')"
            >圈子</li>
            <li class="lowerHalf_li"
            :class="{active:$route.path==='/Playlists'}" @click="gopath('/Playlists')"
            >歌单</li>
            <li class="lowerHalf_li"
            :class="{active:$route.path==='/myMusic'}" @click="gopath('/myMusic')"
            >我的音乐</li>
          </ul>
        <div class="uploading">
          
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">上传</Button>
              </Upload>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
 
  methods: {
    gopath(path){
       this.$route.path !== path && this.$router.replace(path)
    },
     toHome(item){
      this.$router.replace('/ranking')
    }
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerlist
    width 100%
    height 150px
    background-color  #ffffff
    .upperHalf
      width 1200px
      height 90px
      margin 0 auto
      background-image url('http://net.huanmusic.com/www/img/rs/headerBg.png')
      img 
        width 200px
        height 42px
        display block
        float left
        margin 24px 0px
      .upperHalf_left
        height 90px
        width 610px
        float right 
        a
          width 90px
          height 45px
          float left
          img 
            width 90px
            height 45px
        form
          width 266px
          height 45px
          float left
          .searchBox
            width 248px
            height 40px
            float left
            margin-left 4px
            margin-top 24px
            padding-left 20px
            border 2px solid #EF4E4D
            border-radius 8px
            background url('http://net.huanmusic.com/www/img/head/%E6%90%9C%E7%B4%A2.png') no-repeat 238px 12px
            font-size 12px
        .x_dynamic
          width 100px
          height 60px
          float left
          margin-left 45px
          margin-top -19px
          cursor pointer
          img 
            width 100px
            height 63px
            display blocks
        .x_choice_sign
          width 30px
          height 90px
          line-height 90px
          float left
          margin-left 40px
          font-size 12px
          .a_choice_sign
            float left 
        .x_choice_shuxian
          width 10px
          height 90px
          line-height 90px
          float left
          font-size 12px
        .x_choice_register
          width 20px
          height 90px
          line-height 90px
          font-size 12px
          float left 
    .lowerHalf
      width 100%
      height 60px
      background-color  #F07B7C
      .menu_body
        width 1200px
        height 60px
        margin 0 auto 
        .lowerHalf_ul
          width 600px
          height 60px
          float left
          .lowerHalf_li
            width 120px
            height 60px
            float left
            line-height 60px
            text-align center
            color #fff
            cursor pointer
        .uploading
          width 128px
          height 38px
          line-height 38px
          text-align center
          border-radius 30px
          float right
          margin-top 11px
          color #f27a7a
          

</style>