<template>
  <section class="content_main">
    <div class="main_box">
      <section class="recommend">
        <!-- 动态 -->
        <div class="dynamic">
          <img src="https://net.huanmusic.com/www/tribe/%E6%9D%A5%E5%86%99%E5%8A%A8%E6%80%81%E5%90%A7~.png" alt="" class="input_title_img">
          <!-- <transition> -->
            <input   type="text" placeholder="请输入标题"  >
          <!-- </transition> -->
          <!-- <textarea @click="changeIt" :class=" isActive?'text-editor-container':'text-editor-containers' " name="" ></textarea> -->
          <textarea id="text-editor-container" name="" ></textarea>
          <div class="tool">
          <!-- 左边 -->
            <div class="left">
              <div>
                <a href="#">
                  <img src="https://net.huanmusic.com/www/tribe/%E9%9F%B3%E4%B9%90.png" alt="">
                  <span>音乐</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="https://net.huanmusic.com/www/tribe/图片.png" alt="">
                  <span>图片</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="https://net.huanmusic.com/www/tribe/@.png" alt="">
                  <span>艾特</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="https://net.huanmusic.com/www/tribe/链接.png" alt="">
                  <span>链接</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="https://net.huanmusic.com/www/tribe/投票.png" alt="">
                  <span>投票</span>
                </a>
              </div>
            </div>
          <!-- 右边 -->
            <div class="right">
                <div>
                  <a href="#">
                    <img src="https://net.huanmusic.com/www/tribe/选择圈子.png" alt="">
                    
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="https://net.huanmusic.com/www/tribe/选择标签.png" alt="">
                  </a>
                </div>
                <!-- <div>
                  <a href="#">
                    <img align="bottom" src="https://net.huanmusic.com/www/tribe/发布.png" alt="">
                  </a>
                </div> -->
                <button  >发布</button>
                

                
              </div>

            </div>
          </div>
          <!-- 置顶 -->
          <div class="top-container">
            <div class="top_list">
              <a class="top_left">
                <img src="//net.huanmusic.com/www/tribe/置顶.png" alt="">
                <span>【幻音哔哔机】丧到只有世界末日能够拯救我了！</span>
              </a>
              <div class="top_right">
                <span>
                  发布者:幻音娘
                </span>
              </div>
            </div>
             <div class="top_list">
              <a class="top_left">
                <img src="//net.huanmusic.com/www/tribe/置顶.png" alt="">
                <span>【幻音哔哔机】丧到只有世界末日能够拯救我了！</span>
              </a>
              <div class="top_right">
                <span>
                  发布者:幻音娘
                </span>
              </div>
            </div>
            
          </div>
          <!-- 切换 -->
          <div class="title_list">
            <div style="background-color: rgb(242, 122, 122); color: rgb(255, 255, 255);"><span>推荐动态</span></div>
            <div><span>圈子广场</span></div>
            <div><span>关注动态</span></div>
            <div style="border:none"><span>我的圈子</span></div>
          </div>
          <!-- 分享 -->
          <div class="share_list" v-for="(item, index) in songdy" :key="index" @click="goComment">
            <div class="list_details">
              <div class="list_box">
                <div class="list_left">
                  <div class="list_title">
                    <span class="title_name">{{item.cil_name}}</span>
                    <span class="title_story">{{item.dynamic.dy_content}}</span>
                  </div>
                  <div class="list_music">
                      <img class="photo_1"  src="http://net.huanmusic.com/3e31c927-e1a6-4067-8811-498c7cb5e2b7.png" alt="">
                      <img class="photo_2"  src="https://net.huanmusic.com/editor/%E6%92%AD%E6%94%BE%E6%8C%89%E9%92%AE-%E6%8B%B7%E8%B4%9D-2.png" alt="">
                      <div class="singer">
                        <span class="singname">惩罚军服，特典《欺兄》</span>
                        <span class="singperson">阿册</span>
                      </div>
                  </div>
                  <div class="list_user">
                    <img class="userphoto" src="https://net.huanmusic.com/editor/%E6%92%AD%E6%94%BE%E6%8C%89%E9%92%AE-%E6%8B%B7%E8%B4%9D-2.png" alt="">
                    <span>天天卡牌</span>
                    <div class="from">天天卡牌</div>
                  </div>
                </div>
                <div class="list_right">
                  <img class="list_photo " :src=item.cil_img>
                  <div class="talk">
                    <span>阅读：4396</span>
                    <span>评论：4398</span>
                    <span>分享：4398</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

      </section>
      <section class="rank">
        <div class="login">
          <img src="http://net.huanmusic.com/5b033e38-7c34-4369-be28-22151ce6af0e.png" alt="">
          <div class="login_content">
            <div class="look">
              <span>0</span>
              <span>关注</span>
            </div>
            <div class="look">
              <span>0</span>
              <span>关注</span>
            </div>
            <div class="look">
              <span>0</span>
              <span>关注</span>
            </div>
           
          </div>
        </div>










        <div class="top_rank">
          <span style="font-size:16px;font-weight:700">动态排行榜周榜</span>
          <div class="qiehuan" style="margin-top:10px">
            <div class="active">最多评论</div>
            <div class="normal">最新发布</div>
          </div>
          <div class="rank_content" >
            <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
          </div>
            


        </div>









        <div class="watch">
            <div style="display:flex;margin:20px,0,10px;">
              <span style="font-size:16px;font-weight:700;">好友关注</span>
              <a href="#" style="margin-left:170px;font-size:14px"><img src="https://net.huanmusic.com/www/tribe/刷新.png" alt=""> 刷新</a>
            </div>
          
            <div style="display:flex;margin-top:20px">
              <div><img style="width:50px;height:50px" src="http://net.huanmusic.com/58366f8ee6a7020404bf2199te1527081780754.png?imageview/2/w/50/h/50" alt=""> </div>
              <div style="width:180px;height:50px;margin-left:10px;font-size:12px">
                <div style="width:180px;height:14px;margin-top:8px;font-size:14px">
                  日常吐槽圈
                </div>
                <div style="width:180px;height:14px;margin-top:8px;display:flex">
                  <div style="width:90px">成员：30</div>
                  <div style="width:90px">动态：30</div>
                </div>
              </div>
              <div style="width:60px;height:50px;line-height:50px;font-size:12px;text-align:center">
                <a style="width:37px;height:20px;background:pink;font-size:12px;color:white;display:block;line-height:20px;margin:5px;margin-top:10px;border-radius:5px">加入</a>
              </div>
            
          </div>
           <div style="display:flex;margin-top:20px">
              <div><img style="width:50px;height:50px" src="http://net.huanmusic.com/58366f8ee6a7020404bf2199te1527081780754.png?imageview/2/w/50/h/50" alt=""> </div>
              <div style="width:180px;height:50px;margin-left:10px;font-size:12px">
                <div style="width:180px;height:14px;margin-top:8px;font-size:14px">
                  日常吐槽圈
                </div>
                <div style="width:180px;height:14px;margin-top:8px;display:flex">
                  <div style="width:90px">成员：30</div>
                  <div style="width:90px">动态：30</div>
                </div>
              </div>
              <div style="width:60px;height:50px;line-height:50px;font-size:12px;text-align:center">
                <a style="width:37px;height:20px;background:pink;font-size:12px;color:white;display:block;line-height:20px;margin:5px;margin-top:10px;border-radius:5px">加入</a>
              </div>
            
          </div>
           <div style="display:flex;margin-top:20px">
              <div><img style="width:50px;height:50px" src="http://net.huanmusic.com/58366f8ee6a7020404bf2199te1527081780754.png?imageview/2/w/50/h/50" alt=""> </div>
              <div style="width:180px;height:50px;margin-left:10px;font-size:12px">
                <div style="width:180px;height:14px;margin-top:8px;font-size:14px">
                  日常吐槽圈
                </div>
                <div style="width:180px;height:14px;margin-top:8px;display:flex">
                  <div style="width:90px">成员：30</div>
                  <div style="width:90px">动态：30</div>
                </div>
              </div>
              <div style="width:60px;height:50px;line-height:50px;font-size:12px;text-align:center">
                <a style="width:37px;height:20px;background:pink;font-size:12px;color:white;display:block;line-height:20px;margin:5px;margin-top:10px;border-radius:5px">加入</a>
              </div>
            
          </div>
           <div style="display:flex;margin-top:20px">
              <div><img style="width:50px;height:50px" src="http://net.huanmusic.com/58366f8ee6a7020404bf2199te1527081780754.png?imageview/2/w/50/h/50" alt=""> </div>
              <div style="width:180px;height:50px;margin-left:10px;font-size:12px">
                <div style="width:180px;height:14px;margin-top:8px;font-size:14px">
                  日常吐槽圈
                </div>
                <div style="width:180px;height:14px;margin-top:8px;display:flex">
                  <div style="width:90px">成员：30</div>
                  <div style="width:90px">动态：30</div>
                </div>
              </div>
              <div style="width:60px;height:50px;line-height:50px;font-size:12px;text-align:center">
                <a style="width:37px;height:20px;background:pink;font-size:12px;color:white;display:block;line-height:20px;margin:5px;margin-top:10px;border-radius:5px">加入</a>
              </div>
            
          </div>
           <div style="display:flex;margin-top:20px">
              <div><img style="width:50px;height:50px" src="http://net.huanmusic.com/58366f8ee6a7020404bf2199te1527081780754.png?imageview/2/w/50/h/50" alt=""> </div>
              <div style="width:180px;height:50px;margin-left:10px;font-size:12px">
                <div style="width:180px;height:14px;margin-top:8px;font-size:14px">
                  日常吐槽圈
                </div>
                <div style="width:180px;height:14px;margin-top:8px;display:flex">
                  <div style="width:90px">成员：30</div>
                  <div style="width:90px">动态：30</div>
                </div>
              </div>
              <div style="width:60px;height:50px;line-height:50px;font-size:12px;text-align:center">
                <a style="width:37px;height:20px;background:pink;font-size:12px;color:white;display:block;line-height:20px;margin:5px;margin-top:10px;border-radius:5px">加入</a>
              </div>
            
          </div>
           
          
         
       
       

        </div>














         <div class="top_rank">
          <div style="display:flex;margin:20px,0,10px;">
              <span style="font-size:16px;font-weight:700;">用户排行榜周榜</span>
              <a href="#" style="margin-left:125px;font-size:14px"><img src="https://net.huanmusic.com/www/tribe/刷新.png" alt=""> 刷新</a>
          </div>
          <div class="qiehuan" style="margin-top:20px">
            <div class="active">最多评论</div>
            <div class="normal">最新发布</div>
          </div>
          <div class="rank_content">
            <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
             <div class="content_item">
              <span  class="content_num">3</span>
              <div class="itemContent">少时诵诗书</div>
            </div>
          </div>
            


        </div>
      </section>
    </div>
  </section>

</template>

<script>
import {mapState} from 'vuex'

export default {
   computed: {
    
     ...mapState({
       songdy:state=>state.songdy
     })
   },
    mounted() {
       this.$store.dispatch('getSongdynamicAction')
     },
     methods: {
       goComment(){
       this.$router.replace('/comment')  
       }
     },
}

</script>
<style lang='stylus' rel='stylesheet/stylus' >
  .content_main
    width 100%
    min-height  100%
   
    .main_box
      width 1200px
      margin 15px auto 0
      display -webkit-box
      display -ms-flexbox
      display flex
      -webkit-box-pack justify
      -ms-flex-pack justify
      justify-content space-between
      .recommend
        width 874px
        height 100%
        padding-right 22px
        display inline-block
        

        //动态
        .dynamic 
          width 100%
          // height 100%
          .input_title_img 
            height 17px
            width 110px
            margin-bottom 13px
          input
            height: 37px 
            width 100%
            padding-left: 10px
            font-size 12px
            color rgb(153, 153, 153)
            border 1px solid rgb(205, 209, 215)
            box-sizing border-box
            border-radius 3px
            outline-style none
          #text-editor-container
            display block
            width 99.4%
            height 114px
            border 1px solid rgb(205, 209, 215)
            
            resize none
            outline none
          // #text-editor-containers
          //   width 99.5%
          //   height 200px
          //   border 1px solid rgb(205, 209, 215)
          //   border-radius 3px
          //   resize none
          //   outline none
            // transform translateY(0%)
            // &.move-enter-active, &.move-leave-active
            //   transition all 1s
            // &.move-enter, &.move-leave-to
            //   transform translateY(0)
            //transition: all 1s ease 0s; height: auto; min-height: 150px;
          .tool
            width 100%
            height 48px
            background-color #cdd1d7
            display flex
            justify-content space-between
            .left
              margin-left 10px
              height 100%
              display: flex;
              justify-content: space-between;
              // background-color red
              &>div
                width 70px
                height 48px
                // background-color blue
                a
                  line-height 48px
                  img 
                    vertical-align middle
                    margin-right 10px
                  span 
                    color #000
                    font-size 13px
            .right
              height 100%
              display flex
              align-items center
              justify-content space-between
              width 300px
              height 48px
              &>div
                width 70px
                height 48px
                 a
                  cursor pointer
                  line-height 48px
                  img 
                    vertical-align: middle
                    margin-right 5px
              button 
                margin 0
                padding 0
                border 0
                outline none
                height 48px
                width 80px
                font-size 18px
                background-color #F17878
                color #FFF
                cursor pointer
                border-radius 4px
                //style="height:48px;width:70px;background-color: #F17878;color: #FFF;outline: none;"
        //置顶
        .top-container 
          width 100%
          margin-top: 32px;
          margin-bottom: 22px;
          cursor: pointer;
          .top_list
            width 100%
            height 34px
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-orient horizontal
            -webkit-box-direction normal
            -ms-flex-direction row
            flex-direction row
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            border-bottom 1px dashed #ddd
            .top_left
              width 500px
              line-height 34px
              font-size 12px
              color #5f5f5f
              img 
                vertical-align middle
                margin-bottom 3px
                margin-right 10px
            .top_right
              font-size 12px
              color #5f5f5f
              line-height 34px
             
        //切换
        .title_list
          width: 100%;
          height: 34px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          border-radius: 4px;
          border: 2px solid #e9e9e9;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          cursor: pointer;
          box-sizing: border-box;
          margin-bottom: 20px;
          
          &>div
            width 25%
            height 100%
            line-height 28px
            text-align center
            letter-spacing: 1px;
            border-right 2px solid #e9e9e9
        //分享
        .share_list
          width 100%
          .list_details
            width 100%
            .list_box
              display flex
              justify-content space-between
              width 100%
              height 182px
              border-radius 4px
              border 2px solid #e9e9e9
              padding 25px 31px 0
              margin-bottom 20px
              box-sizing border-box
              cursor pointer
              position relative
              
              .list_left
                width  530px
                height 100%
                //标题
                .list_title
                  width 100%
                  .title_name
                    width 474px
                    height 20px
                    font-size 20px
                    line-height 20px
                    letter-spacing 1px
                    color #020202
                    margin-bottom 7px
                    font-family MicrosoftYaHei
                    font-weight 400
                    font-stretch normal
                    display block
                    text-overflow: ellipsis
                    overflow hidden
                    white-space: nowrap
                  .title_story
                    width 455px
                    height 12px
                    font-size 12px
                    line-height 12px
                    letter-spacing 0
                    color #666
                    margin-bottom 13px
                    font-family MicrosoftYaHei
                    font-weight 400
                    font-stretch normal
                    display block
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
                //音乐
                .list_music
                  display flex
                  height 64px
                  .photo_1 
                    display block
                    width 64px
                    height 64px
                  .photo_2 
                    display block
                    width 32px
                    height 32px
                    padding 16px
                    margin-left -64px
                  .singer
                    box-sizing border-box
                    height 100%
                    width 467px
                    padding 11px 7px 0 15px
                    background-color #e9e9e9
                    .singname
                      color #251F23
                      display block
                      font-size 14px
                    .singperson
                      display block
                      font-size 12px
                      padding-top 5px
                      color #666
                .list_user
                  width 100%
                  height 30px
                  line-height 30px
                  .userphoto
                    width 20px
                    height 20px
                    border-radius 50%
                    margin-right 5px
                    vertical-align:middle
                  span
                    font-size 12px
                  .from
                    width 60px
                    height 22px
                    line-height 22px
                    font-size 12px
                    margin-left 10px
                    background pink 
                    color #f27a7a
                    text-align center
                    border-radius 5px
                    display inline-block
                    vertical-align:middle
              .list_right
                height 100%
                .list_photo
                  overflow hidden
                  width 216px
                  height 117px
                 
                  float right
                .talk
                  width 200px
                  height 30px
                  line-height 30px
                  font-size 12px
                  display flex
                  justify-content: space-between;
                  color #999
                  float right
                  span
                    float right
      //右侧
      .rank
        width 300px
        height 1000px
        padding-left 40px
        //background-color greenyellow
        .login
         
          width 285px
          height 129px
          text-align center
          line-height 60px
          margin-top 27px
          padding-bottom 32px
          
          border-bottom 1px dashed #ddd
          img
            width 60px
            height 60px
            border-radius 50%
          .login_content
            width 280px
            height 69px
            padding 0 5px 5px 0
            display flex
            justify-content space-around
            .look
              // height 69px
              width 60px
              font-size 8px
              
              span
                // display block

        .top_rank
          width 285px
          height 392px
          margin-top 20px
          // background-color #eee
          .qiehuan
            margin-top: 5px;
            width: 100%;
            height: 18px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border 1px solid #eee
            .active
              text-align center
              background-color #eee
              width 50%
              border-right 1px solid #eee
            .normal
              text-align center
              width 50%
          .rank_content
            padding: 20px 0 0;
            border-bottom: 1px dashed #ddd;
            height: 300px;
            .content_item
              cursor: pointer;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              padding-bottom: 20px;
              span
                display block
                width 16px
                height 16px
                line-height 16px
                text-align center
                color #fff
                background-color red
                border-radius 3px
                font-size 12px


              .itemContent
                font-size 12px
                display: block;
                width: 256px;
                white-space: nowrap;
                height: 16px;

             









        .watch
          width 285px
          height 404px
          margin-bottom 20px 
          //background-color blue
        .bottom_rank
          width 285px
          height 472px
          margin-bottom 20px
          
          


</style>