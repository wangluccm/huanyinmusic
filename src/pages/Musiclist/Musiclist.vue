<template>
  <div class="Musiclist">
    <div class="Musiclist_type">
      <!-- 音乐列表 -->
      <div class="Musiclist_left">
        <div class="left_personal">
          <img src="../../../images/01.jpg" alt="" class="left_images">
          <div class="left_message">
            <div class="message_name">〖萌系kawaii☆bass〗总之就是非常可爱</div>
            <div class="message_item">创建时间：2019-07-16</div>
            <div class="message_moods">人气：478658</div>
            <div class="message_collect">收藏数：450</div>
            <div class="buttom">
              <div class="iconfont icon-jiarugedan button_song">加入歌单</div>
              <div class="iconfont icon-ziyuan button_bans">分享</div>
              <div class="iconfont icon-xiazai button_bans">下载</div>
              <div class="iconfont icon-shoucang button_bans">收藏</div>
            </div>
            <div>简介：这么富有少女心的歌单，就不点进来看看吗？
                小解一下 Kawaii Bass ，Kawaii Bass 是 Future Bass 电音的一个分支，全称为 Kawaii Future Bass 。多受御宅族和少女
            </div>
          </div>
        </div>
        <!-- 列表 -->
        <div class="musics_list">
          <div class="musics_name">
            <div class="musics_single">单曲(26)</div>
            <div class="musics_play">随机播放</div>
          </div>
          <ul class="musics_ul">
            <li class="musics_li" v-for="(item, index) in musiclist" :key="index" >
              <div class="musicsname">{{item.singsong_name}}</div>
              <div class="names">
                <span>{{item.sing_author}}</span>
              </div>
              <div class="musics_item">{{item.sing_time}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="Musiclist_right">
        <!-- 关注 -->
        <div class="right_close">
          <div style="overflow: hidden">
            <img src="../../../images/01.jpg" alt="" class="close_img">
          <div class="div1">世纪的征服</div>
          </div>
          <div class="pay">+关注</div>
        </div>
        <!-- 关联歌单 -->
        <div class="relevance">
          <div class="relevance_name">
            <span>关联</span>
            <span>歌单</span>
          </div>
          <ul class="relevance_ul">
            <li class="relevance_li">
              <img src="../../../images/01.jpg" alt="" class="relevance_img">
              <div class="relevance_right">
                <div style="margin-left:10px;color:#5e5e5e">( ◞´•௰•`)◞</div>
                <div style="margin:10px 0 0 10px;color:#b0b0b0">by 星尘</div>
              </div>
            </li>
            <li class="relevance_li">
              <img src="http://a.hy233.tv/o_1c8hieusguuq352134s17pt1f9r9.jpeg?imageView2/1/w/50/h/50/q/100" alt="" class="relevance_img">
              <div class="relevance_right">
                <div style="margin-left:10px;color:#5e5e5e">〖萌系kawaii☆bass〗总之就是非常可爱</div>
                <div style="margin:10px 0 0 10px;color:#b0b0b0">世纪的征服</div>
              </div>
            </li>
            <li class="relevance_li">
              <img src="http://a.hy233.tv/o_1aq442eaaauhdiepbn1lpapc3c.jpg?imageView2/1/w/50/h/50/q/100" alt="" class="relevance_img">
              <div class="relevance_right">
                <div style="margin-left:10px;color:#5e5e5e">当女声邂逅电音</div>
                <div style="margin:10px 0 0 10px;color:#b0b0b0">by 星尘</div>
              </div>
            </li>
            <li class="relevance_li">
              <img src="http://a.hy233.tv/o_1aehhu955q4v16n71lg91nn81e809.jpg?imageView2/1/w/50/h/50/q/100" alt="" class="relevance_img">
              <div class="relevance_right">
                <div style="margin-left:10px;color:#5e5e5e">〖二次元〗那些不能停的歌</div>
                <div style="margin:10px 0 0 10px;color:#b0b0b0">by 星尘</div>
              </div>
            </li>
            <li class="relevance_li">
              <img src="http://a.hy233.tv/o_1cpha6f9i11u71m11rh710ccqd9.png?imageView2/1/w/50/h/50/q/100" alt="" class="relevance_img">
              <div class="relevance_right">
                <div style="margin-left:10px;color:#5e5e5e">【日系节奏】超级治愈的少女萌音</div>
                <div style="margin:10px 0 0 10px;color:#b0b0b0">by 星尘</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 推荐圈子 -->
        <div class="recommends">
          <div class="recommend_name">
            <span>推荐</span>
            <span class="color">圈子</span>
          </div>
          <ul class="recommend_ul">
            <li class="recommend_li">
              <img src="http://net.huanmusic.com/575774aae62d133e23cbaf99te1524963804765.jpg?imageview/2/w/50/h/50" alt="" class="recommend_img">
              <div class="recommend_title">
                <div class="title_name">bibibi干杯！</div>
                <div class="title_member">成员：438</div>
                <div class="title_dynamic">动态：361</div>
              </div>
              <div class="join">加入</div>
            </li>
             <li class="recommend_li">
              <img src="http://net.huanmusic.com/5c57ca8a8b8759046f3f5763te1549852112855.png?imageview/2/w/50/h/50" alt="" class="recommend_img">
              <div class="recommend_title">
                <div class="title_name">千机阁</div>
                <div class="title_member">成员：438</div>
                <div class="title_dynamic">动态：361</div>
              </div>
              <div class="join">加入</div>
            </li>
             <li class="recommend_li">
              <img src="http://net.huanmusic.com/5c57ca8a8b8759046f3f5763te1549852112855.png?imageview/2/w/50/h/50" alt="" class="recommend_img">
              <div class="recommend_title">
                <div class="title_name">听见就想推荐的</div>
                <div class="title_member">成员：438</div>
                <div class="title_dynamic">动态：361</div>
              </div>
              <div class="join">加入</div>
            </li>
             <li class="recommend_li">
              <img src="../../../images/01.jpg" alt="" class="recommend_img">
              <div class="recommend_title">
                <div class="title_name">听见就想推荐的</div>
                <div class="title_member">成员：438</div>
                <div class="title_dynamic">动态：361</div>
              </div>
              <div class="join">加入</div>
            </li>
             <li class="recommend_li">
              <img src="http://net.huanmusic.com/57da3226edd0306803f7564ete1535722712132.gif?imageview/2/w/50/h/50" alt="" class="recommend_img">
              <div class="recommend_title">
                <div class="title_name">听见就想推荐的</div>
                <div class="title_member">成员：438</div>
                <div class="title_dynamic">动态：361</div>
              </div>
              <div class="join">加入</div>
            </li>
             <li class="recommend_li">
              <img src="http://net.huanmusic.com/5b2e028d5038a05e8be3c027te1544945817270.jpeg?imageview/2/w/50/h/50" alt="" class="recommend_img">
              <div class="recommend_title">
                <div class="title_name">听见就想推荐的</div>
                <div class="title_member">成员：438</div>
                <div class="title_dynamic">动态：361</div>
              </div>
              <div class="join">加入</div>
            </li>
          </ul>
        </div>
        <!-- 同好推荐 -->
        <div class="people">
          <div class="people_name">
            <span>同好</span>
            <span class="color">推荐</span>
          </div>
          <ul class="people_content">
            <img src="../../../images/01.jpg" alt="" class="people_img">
            <img src="https://net.huanmusic.com/www/empty.png" alt="" class="people_img">
            <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=IafeDBOxrTaj6w04c4Pyrg&s=100&t=1557468150" alt="" class="people_img">
            <img src="../../../images/01.jpg" alt="" class="people_img">
            <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/51iavzk6T1VmbuArNnubic26hHPIJUVRIqGDCVibqxPicMWaww3VE2OTGkhxIm7sOwkRDbK787xFGdRACAAicTibz68g/132" alt="" class="people_img">
            <img src="http://net.huanmusic.com/581a0b071ecf5e7e081f5a931534948330337" alt="" class="people_img">
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  
mounted(){
    this.$store.dispatch('getSongmusic')
    // console.log(this.playlists)
  },
  computed:{
    ...mapState({
      musiclist: state => state.musiclist
    })
  },
watch:{
    playlists(){
      console.log(this.musiclist)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.Musiclist
  width 100%
  height 100%
  .Musiclist_type
    width 1200px
    margin 0 auto
    overflow hidden
    padding-top 40px
    .Musiclist_left
      width 883px
      float left
      .left_personal
        width 100%
        height 245px
        .left_images
          width 400px
          height 245px
          float left
        .left_message
          width 430px
          height 245px
          float left
          padding 0 25px
          .message_name
            height 42px
            font-size 24px
            color #444444
          .message_item
            height 28px
            font-size 16px
            color #9999b2
          .message_moods
            height 27px
            color #444444
          .message_collect
            height 36px
            color #444444
          .buttom
            width 100%
            height 48px
            overflow hidden
            .button_song
              width 90px
              height 30px
              background #f27a7a
              color #ffffff
              float left
              border-radius 10px
              text-align center
              line-height 30px
            .button_bans
              width 90px
              height 30px
              border 1px solid #d2d2d2
              color #282737
              margin-left 5px
              border-radius 10px
              float left
              text-align center
              line-height 30px
      .musics_list
        height 1000px
        .musics_name
          height 87px
          overflow hidden
          .musics_single
            float left
            height 87px
            line-height 87px
          .musics_play
            float right
            height 87px
            line-height 87px
        .musics_ul
          .musics_li
            height 50px
            line-height 50px
            color #5f5f5f
            margin-bottom 20px
            .musicsname
              float left
              width 428px
              height 50px
              line-height 50px
            .names
              height 50px
              line-height 50px
              float left
              width 200px
            .musics_item
              float right
              height 50px
              line-height 50px
              margin-right 10px
    .Musiclist_right
      width 290px
      float right
      .right_close
        width 290px
        height 143px
        border-bottom 1px solid #dddddd
        overflow hidden
        .close_img
          width 62px
          height 62px
          border-radius 50%
          float left
          margin-left 50px
        .div1
          width 100px
          height 30px
          float left
          line-height 30px
          text-align center
          margin-top 15px
        .pay
          width 60px
          height 23px
          background #f27a7a
          color #fff
          margin 0 auto
          margin-top 20px
          line-height 23px
          text-align center
          font-size 15px
      .relevance
        width 100%
        height 416px
        border-bottom 1px solid #dddddd
        .color
          color #f27a8e
        .relevance_name
          width 100%
          height 55px
          line-height 55px
        .relevance_ul
          width 100%
          .relevance_li
            width 100%
            height 50px
            overflow hidden
            margin-bottom 20px
            .relevance_img
              width 50px
              height 50px
              float left
            .relevance_right
              width 240px
              height 50px
              float left
      .recommends
        width 100%
        border-bottom 1px solid #dddddd
        .recommend_name
          width 100%
          height 65px
          line-height 65px
          .color
            color #f27a8e
        .recommend_ul
          overflow hidden
          .recommend_li
            height 50px
            overflow hidden
            margin-bottom 20px
            .recommend_img
              width 50px
              height 50px
              float left
              margin-right 10px
            .recommend_title
              width 168px
              height 50px
              float left
              color #b2a5c2
              .title_name
                height 27px
                line-height 27px
                color #5e5e5e
              .title_member
                float left 
                height 24px
                margin-right 10px
              .title_dynamic
                float left 
                height 24px
            .join
              width 40px
              height 17px
              float right 
              text-align center
              line-height 17px
              background #f27a7a
              margin-top 15px
              font-size 12px
              border-radius 5px
      .people
        height 210px
        .people_name
          height 57px
          line-height 57px
          .color 
             color #f27a8e
        .people_content
          height 150px
          overflow hidden
          .people_img
            width 62px
            height 62px
            float left
            border-radius 50%
            margin 10px 30px 0 0











</style>