<template>
  <div class="playlists">
    <div class="playlists_type">
      <div class="playlists_content">
        <div class="playlists_left">
          <!-- 每日歌单 -->
          <div class="left_song">
            <div class="Daily">
              <span class="Daily_playlist">每日歌单</span>
              <span class="choiceness">精选</span>
            </div>
            <ul class="song_content">
              <li class="content_list" @click="toHome" v-for="(item, index) in playlists" :key="index">
                  <div class="mains">
                    <span class="iconfont icon-yinle number">467090</span>
                    <div class="name">
                      <div class="iconfont icon-zanting1 mman"></div>
                      <span>{{item.songlist_name}}</span>
                    </div>
                    <img :src=item.songlist_image alt="" class="list_images">
                  </div>
                  <div class="introduce">
                    <div class="introduce_name">
                      <span>{{item.songlist_message.songlist_quantity}}首</span>
                      <span style="float:right">{{item.songlist_message.song_author}}</span>
                    </div>
                    <div class="song_introduce">
                      <span style="color:#e5b03b;">歌单介绍:</span>
                        <span style="line-height:22px;font-size:13px">{{item.songlist_message.brief}}</span>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
          <!-- 热门歌单 -->
           <div class="left_song">
            <div class="Daily">
              <span class="Daily_playlist">热门</span>
              <span class="choiceness">歌单</span>
            </div>
            <ul class="song_content">
              <li class="content_list" v-for="(item, index) in playlists" :key="index" >
                 <div class="mains">
                    <span class="iconfont icon-yinle number">467090</span>
                    <div class="name">
                      <div class="iconfont icon-zanting1 mman"></div>
                      <span>{{item.songlist_name}}</span>
                    </div>
                    <img :src=item.songlist_image alt="" class="list_images">
                  </div>
                  <div class="introduce">
                    <div class="introduce_name">
                      <span>{{item.songlist_message.songlist_quantity}}首</span>
                      <span style="float:right">{{item.songlist_message.song_author}}</span>
                    </div>
                    <div class="song_introduce">
                      <span style="color:#e5b03b;">歌单介绍:</span>
                        <span style="line-height:22px;font-size:13px">{{item.songlist_message.brief}}</span>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="playlists_right">
          <!-- 个人信息 -->
          <div class="right_personage ">
            <div class="personage_top">
              <div class="top_top">
                <img src="../../../images/song.jpeg" alt="" class="head">
                <div class="topname">夜雨、花落泪</div>
                <span class="iconfont icon-nanxingmale154"></span>
              </div>
              <div class="top_bottom">
                <div class="bottom_mm">
                  <div class="mm_figure">1</div>
                  <div class="mm_type">创建的歌单</div>
                </div>
                 <div class="bottom_mm">
                  <div class="mm_figure">1</div>
                  <div class="mm_type">收藏的歌单</div>
                </div>
              </div>
            </div>
            <div class="personage_bottom">
              <div class="bottom_mold">
                <div class=" voice">让世界倾听你的声音</div>
              <div class="exclusive">来制造你的专属歌单吧!</div>
              <button class="make">我要制作歌单</button>
              </div>
              <img src="../../../images/bottom.png" alt="">
            </div>
          </div>
          <!-- 歌单TOP100 -->
          <div class="song_top">
            <div class="song_title">
              <span>歌单</span>
              <span style="color:#f58e7a">TOP100</span>
            </div>
            <ul class="song_ul">
              <li class="song_li">
                <div class="classify_name">动漫</div>
                <div class="classify_name">动漫</div>
                <div class="classify_name">动漫</div>
                <div class="classify_name">动漫</div>
              </li>
               <li class="song_li">
                <div class="classify_name">动漫</div>
                <div class="classify_name"> 新番</div>
                <div class="classify_name">VOCALOID</div>
                <div class="classify_name">游戏</div>
              </li>
               <li class="song_li">
                <div class="classify_name">中文</div>
                <div class="classify_name">偶像/流行</div>
                <div class="classify_name">和风/古风</div>
                <div class="classify_name">同人/翻唱</div>
              </li>
            </ul>
          </div>
          <!-- 本月歌单达人榜 -->
          <div class="talent">
            <span>本月歌单达人榜</span>
            <ul class="talent_uls">
              <li class="talent_lis">
                <img src="../../../images/song.jpeg" alt="" class="talent_img">
                <div class="talent_name">
                  <div class="name">维C柠檬茶</div>
                  <div class="song">歌单：1</div>
                </div>
                <div class="attention">+关注</div>
              </li>
              <li class="talent_lis">
                <img src="../../../images/song.jpeg" alt="" class="talent_img">
                <div class="talent_name">
                  <div class="name">维C柠檬茶</div>
                  <div class="song">歌单：1</div>
                </div>
                <div class="attention">+关注</div>
              </li>
              <li class="talent_lis">
                <img src="../../../images/song.jpeg" alt="" class="talent_img">
                <div class="talent_name">
                  <div class="name">维C柠檬茶</div>
                  <div class="song">歌单：1</div>
                </div>
                <div class="attention">+关注</div>
              </li>
              <li class="talent_lis">
                <img src="../../../images/song.jpeg" alt="" class="talent_img">
                <div class="talent_name">
                  <div class="name">维C柠檬茶</div>
                  <div class="song">歌单：1</div>
                </div>
                <div class="attention">+关注</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'Playlists',
  methods: {
    toHome(item){
      this.$router.replace('/musiclist')
    }
  },
  mounted(){
    this.$store.dispatch('getSongLists')
    // console.log(this.playlists)
  },
  computed:{
    ...mapState({
      playlists: state => state.playlists
    })
  },
  watch:{
    playlists(){
      console.log(this.playlists.songlist_image)
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.playlists
  width 100%
  height 100%
  overflow hidden
  .playlists_type
    width 1200px
    height auto
    margin 0 auto
    overflow hidden
    .playlists_content
      width 100%
      margin-top 30px
      overflow hidden
      
      .playlists_left
        width 882px
        float left
        .left_song
          width 100%
          height 700px
          border-bottom 1px dashed #dddddd
        &:nth-child(2n+0)
              border-bottom 1px dashed #fff
        .Daily
          margin-top 10px
          .Daily_playlist
            font-size 18px
            color #5e5e5e
            font-weight bold
          .choiceness
            color #f27a7a
            font-size 18px
        .song_content
          width 100%;
          margin-bottom 50px
          .content_list
            width 280px
            height 300px
            background #f4efef
            float left
            margin 20px 20px 0 0
            .mains
              position absolute
            .number
              width 100%
              height 30px
              position absolute
              margin 10px 0 0 10px
              font-size 15px
            .name
              width 100%
              height 50px
              position absolute
              margin-top 120px
              line-height 50px
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              .mman
                float left 
                margin-left 20px
                font-size:25px
            .list_images
              width 280px
              height 170px
            .introduce
              height 130px
              padding 0 20px
              margin-top 170px
              .introduce_name
                width 100%
                height 30px
                color #b0b0b0
                font-size 15px
                border-bottom 1px dashed #dddddd
                line-height 30px
              .song_introduce
                display inline-block
                width 100%
                height 80px
                color #5e5e5e
                font-size 13px
                padding-top 15px
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            &:nth-child(3n+0)
              margin 20px 0px 0 0
      .playlists_right
        width 288px
        height 1200px
        float right
        .right_personage
          width 288px
          height 320px
          .personage_top
            width 100%
            height 155px
            .top_top
              width 100%
              height 65px
              line-height 65px
              margin-bottom 15px
              .head
                width 60px
                height 60px
                border-radius 50%
                background #000
                float left
                margin-right 15px
              .topname
                float left
            .top_bottom
              width 100%
              height 45px
              .bottom_mm
                width 49%
                height 45px
                float left
                border-right 1px dashed #dddddd
                &:nth-child(2n+0)
                  border-right 1px dashed #fff
                .mm_figure
                    width 100%
                    height 23px
                    text-align center
                    line-height 23px
                    color #f56760
                .mm_type
                  width 100%
                  height 22px
                  text-align center
                  line-height 22px
                  color #5e5e5e
          .personage_bottom
            width 100%
            height 165px
            border 1px solid #f1f1f1
            .bottom_mold
              position absolute 
              .voice
                margin-top 30px
                margin-left 25px
              .exclusive
                width 100%
                height 30px
                font-size 20px
                line-height 30px
                margin 15px 0 0 21px
              .make
                width 255px
                height 40px
                background #f27a7a
                border 1px solid #ff0000
                margin-left 21px
                text-align center
                line-height 40px
                border-radius 10px
                color #ffffff
                margin-top 20px
        .song_top
          width 100%
          height 415px
          .song_title
            width 100%
            height 70px
            line-height 70px
          .song_ul
            width 100%
            background #f7f7f7
            border 1px solid #e9e9e9
            padding-top 20px
            .song_li
              width 230px
              border-bottom 1px dashed #dddddd
              margin 0 auto
              overflow hidden
              .classify_name
                width 50%
                height 50px
                text-align center
                line-height 50px
                float left
        .talent
          width 100%
          margin-top 30px
          .talent_uls
            width 100%
            margin-top 13px
            overflow hidden
          .talent_lis
            width 100%
            height 60px
            .talent_img
              width 50px
              height 50px
              border-radius 50%
              float left
            .talent_name
              float left
              margin 10px 0 0 5px
              font-size 12px
              .name
                width 180px
                height 15px
                color #5e5e5e
              .song
                width 180px
                color #999999
            .attention
              float right
              width 40px
              height 20px
              background #f27a7a
              color #fff
              font-size 12px
              text-align center
              line-height 20px
              margin-top 10px


</style>