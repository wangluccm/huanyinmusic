<template>
  <div class="footerlist">
    <div class="footer_core">
      <div class="footer_core_option">
        <span>下载客户端</span>
        <img src="http://net.huanmusic.com/www/img/footer/%E8%8B%B9%E6%9E%9C.png" class="customer—pictures">
        <img src="http://net.huanmusic.com/www/img/footer/%E5%AE%89%E5%8D%93.png" class="customer—pictures">
      </div>
      <div class="footer_core_option">
        <span>关注我们</span>
        <img src="http://net.huanmusic.com/www/img/footer/qq.png" class="customer—pictures">
        <img src="http://net.huanmusic.com/www/img/footer/%E5%BE%AE%E5%8D%9A.png" class="customer—pictures">
        <img src="http://net.huanmusic.com/www/img/footer/%E5%BE%AE%E4%BF%A1.png" class="customer—pictures">
      </div>
      <div class="footer_core_option">
        <span>在线服务</span>
        <img src="http://net.huanmusic.com/www/img/footer/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D.png" class="customer—pictures">
      </div>
      <div class="footer_core_option">
        <span>客户交流群</span>
        <img src="http://net.huanmusic.com/www/img/footer/%E5%8A%A0%E5%85%A5QQ%E7%BE%A4.png" class="customer—pictures">
      </div>
      <div class="core_cooperation">
        <span>加入我们  |</span>
        <span>关注我们  |</span>
        <span>意见反馈  |</span>
        <span>官方合作</span>
      </div>
      <div class="recordNumber">
        <img src="http://static.anquan.org/static/outer/image/aqkx_83x30.png?id=www.huanmusic.com" alt="">
        <span>Copyright 2014-2046 幻音 Inc. All Rights Reserved. 闽ICP备15019182号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'footerlist',

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerlist
    width 100%
    height 300px
    background-color  #000000
    bottom 0 
    right 0
    .footer_core
      width 1200px
      height 300px
      margin 0 auto 
      .footer_core_option
        width 300px
        height 120px
        margin-top 30px
        float left 
        span
          width 300px
          height 30px
          color #ffffff
          font-size 18px
          float left
        img 
          float left
          margin-right 20px
          margin-top 25px
      .core_cooperation
        width 1200px
        height 24px
        float left 
        text-align center
        line-height 24px
        margin-top 40px
        margin-bottom 10px
        span 
          margin-right 10px
          font-size 16px
          color #ffffff
      .recordNumber
        width 1200px
        height 30px
        float left 
        text-align center
        line-height 30px
        img 
          vertical-align middle
          margin-right 10px
        span 
          font-size 14px
          color #ffffff
</style>