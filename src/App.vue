<template>
  <div class="app">
    <Headerlist/>
    <!-- <Musiclist/> -->
    <router-view></router-view>
    <Footerlist />
    <Forabout />
  </div>
</template>

<script type="text/ecmascript-6">
//import Musiclist from './pages/Musiclist/Musiclist'
import Headerlist from './components/Headerlist/Headerlist'
import Footerlist from './components/Footerlist/Footerlist'
import Forabout from './components/Forabout/Forabout'

  export default {
   
    name:'app',
    components:{
      Headerlist,
      //Musiclist,
      Footerlist,
       Forabout
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
body html
  width 100%
  height 100%
  .app
    width 100%
    height 100%
    position absolute
  
 
</style>
