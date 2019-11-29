<template>
  <div class="detailsList">
    <div class="detailsList_left">
      <div class="detailsList_lu">
        <span class="detailsList_naps">周榜</span>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/%E5%8E%9F%E5%88%9B%E5%B0%8F%E5%9B%BE.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">幻音原创周榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/%E7%BF%BB%E5%94%B1%E5%B0%8F%E5%9B%BE.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">幻音翻唱周榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/%E7%83%AD%E6%AD%8C%E5%B0%8F%E5%9B%BE.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">幻音热歌周榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
      </div>
      <div class="detailsList_lu">
        <span class="detailsList_naps">月榜</span>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/热曲小图.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">幻音热曲月榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/3d小图.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">幻音3D音乐月榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/日本oricon小图.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">日本oricon月榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/b站小图.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">5sing热门月榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/云音乐小图.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">B站热门月榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
        <div class="detailsList_il">
          <img src="http://net.huanmusic.com/www/img/rank/%E5%8E%9F%E5%88%9B%E5%B0%8F%E5%9B%BE.png" alt="" class="detailsList_gmi">
          <a href="javascript:" class="detailsList_a">
            <p class="detailsList_p1">云音乐ACG月榜</p>
            <p class="detailsList_p2">每周一6:00更新</p>
          </a>
        </div>
      </div>
    </div>
    <div class="detailsList_right">
      <div class="details_right_top">
        <img src="http://net.huanmusic.com/www/img/rank/%E5%8E%9F%E5%88%9B%E5%A4%A7%E5%9B%BE1.png" alt="">
        <div class="details_right_txt">
          <p>幻音音乐原创周榜</p>
          <span>幻音原创歌曲周榜，每周一6:00更新</span>
          <div class="details_right_but">
            <button class="right_but1">播放</button>
            <button>分享</button>
            <button>下载</button>
          </div>
        </div>
      </div>
      <div class="details_right_mid">
        <p>歌曲列表(20)</p>
      </div>
      <div class="details_right_btm">
        <ul class="right_btm_lu">
          <span class="right_btm_naps">1</span>
          <a href="javascript:" class="right_btm_a1">陌路</a>
          <a href="javascript:" class="right_btm_a2">瘫君Tan</a>
          <a href="javascript:" class="right_btm_a3">03:27</a>
        </ul>        
        <ul class="right_btm_lu">
          <span class="right_btm_naps">1</span>
          <a href="javascript:" class="right_btm_a1">陌路</a>
          <a href="javascript:" class="right_btm_a2">瘫君Tan</a>
          <a href="javascript:" class="right_btm_a3">03:27</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailsList',

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detailsList
    width 1200px
    height 1556px
    margin 0 auto 
    background #ffffff
    .detailsList_left
      float left
      width 260px
      height 800px
      margin-top 40px
      background #f7f7f7
      box-sizing border-box
      border-left 1px solid #ddd
      border-top 1px solid #ddd
      border-bottom 1px solid #ddd
      .detailsList_lu
        float left
        margin 0 35px
        .detailsList_naps
          display block
          float left
          width 200px
          height 35px
          margin-top 40px
          font-size 24px
          font-weight 700
          border-bottom 1px solid #ddd
        .detailsList_il
          height 50px
          width 250px
          float left
          padding-top 20px
          .detailsList_gmi
            float left
            width 50px
            height 50px
          .detailsList_a
            float left
            width 200px
            height 50px
            .detailsList_p1
              height 30px
              line-height 30px
              font-size 20px
              color #F27F7F
              margin-left 5px
            .detailsList_p2
              font-size 10px
              margin-left 5px
    .detailsList_right
      float left
      width 940px
      min-height 1476px
      margin 40px 0
      box-sizing border-box
      border 1px solid #ddd
      .details_right_top
        height 200px
        width 810px
        margin 0 auto
        img 
          float left
          width 200px
          height 200px
        .details_right_txt
          float left
          width 400px
          height 150px
          margin 20px 0 0 100px
          p
            width 400px
            height 30px
            line-height 3px
            font-size 30px
            font-weight 700
            color #444
            float left
            margin-top 14px
          span 
            display block
            float left
            width 400px
            height 16px
            line-height 16px
            font-size 16px
            margin-top 36px
            color #444
          .details_right_but
            width 400px
            height 30px
            float left
            margin-top 24px
            button
              width 90px
              height 30px
              line-height 30px
              float left
              margin-right 10px
              border-radius 10px
              background #ffffff
              border 1px solid #dddddd
            .right_but1
              background #F27A7A
              color #ffffff
      .details_right_mid
        width 810px
        height 34px
        line-height 34px
        margin 20px auto 
        padding-left 100px
        p
          font-size 20px
          font-weight 700
          color #444
      .details_right_btm
        width 810px
        height 700px
        margin 0 auto
        .right_btm_lu
          width 810px
          height 60px
          .right_btm_naps
            display block
            float left
            width 60px
            height 60px
            text-align center
            line-height 60px
            font-size 12px
          .right_btm_a1
            display block
            float left
            width 370px
            height 60px
            line-height 60px
            font-size 14px
            color #444
          .right_btm_a2
            display block
            float left
            width 140px
            height 60px
            line-height 60px
            margin-left 50px
            font-size 12px
            color #444
          .right_btm_a3
            display block
            float right 
            width 100px
            height 60px
            line-height 60px
            padding-right 20px
            text-align right 
            font-size 14px
            color #444
</style>