import{
  playlists,
  musiclist,
  getMusicianList, 
  getSongList,
  getSingList,
  getSongdynamic,
  getMusicList,
  getHot,
  getMusicer,
  getEverday,
  getMusician,
  getCustom
} from '../api'
import {
  SONG_PLAYLISTS,
  SONG_MUSICLIST,
  GET_MUSICIANLIST,
  GET_SONGLIST,
  GET_SINGLIST,
  GET_SONGDY,
  SAVE_MUSICLIST,
  SAVE_HOT,
  SAVE_MUSICAL,
  SAVE_EVERLIST,
  SAVE_MUSICER,
  SAVE_CUSTOM
} from './mutation-type'

export default {
  //歌曲列表
  async getSongLists({commit}){
    let result = await playlists()
    if (result.code === 0) {
      commit(SONG_PLAYLISTS,{playlists:result.data})  
      //console.log(result.data)    
    }
  },
  //歌曲列表
  async getSongmusic({commit}){
    let result = await musiclist()
    if (result.code === 0) {
      commit(SONG_MUSICLIST,{musiclist:result.data})  
      //console.log(result.data)    
    }
  },
  async getMusicianListAction({commit}){
    let result=await getMusicianList()
    console.log(result)
    if (result.code===0) {
      commit(GET_MUSICIANLIST,{musician:result.data})
    }
 },
 async getSongListAction({commit}){
   let result=await getSongList()
   if (result.code===0) {
     commit(GET_SONGLIST,{songs:result.data})
   }
 },
 async getSingListAction({commit}){
   let result=await getSingList()
   if (result.code===0) {
     commit(GET_SINGLIST,{sings:result.data})
   }
 },
 async getSongdynamicAction({commit}){
   let result=await getSongdynamic()
   if (result.code===0) {
     commit(GET_SONGDY,{songdy:result.data})
   }
 },
 async getMusicAction({commit}){
  //1. 发送请求获取数据
  let result = await getMusicList()
  if(result.code === 0){
    // 2. 调用mutation，将数据交给mutation
    commit(SAVE_MUSICLIST, {mousiclist: result.data})
  }
  },

  async getSongcircles({commit}){
  //1. 发送请求获取数据
  let result = await getHot()
  if(result.code === 0){
    // 2. 调用mutation，将数据交给mutation
    commit(SAVE_HOT, {songcircles: result.data})
  }
  },

  async getMusicListt({commit}){
  //1. 发送请求获取数据
  let result = await getMusicer()
  if(result.code === 0){
    // 2. 调用mutation，将数据交给mutation
    commit(SAVE_MUSICAL, { musiclist: result.data})
  }
  },

  async getEverdayList({commit}){
  //1. 发送请求获取数据
  let result = await getEverday()
  if(result.code === 0){
    // 2. 调用mutation，将数据交给mutation
    commit(SAVE_EVERLIST, { everday: result.data})
  }
  },

  async getMusicianList({commit}){
  //1. 发送请求获取数据
  let result = await getMusician()
  if(result.code === 0){
    // 2. 调用mutation，将数据交给mutation
    commit(SAVE_MUSICER, { musician: result.data})
  }
  },

  async getCustomList({commit}){
  //1. 发送请求获取数据
  let result = await getCustom()
  if(result.code === 0){
    // 2. 调用mutation，将数据交给mutation
    commit(SAVE_CUSTOM, { custom: result.data})
  }
  },

}