import ajax from './ajax'

// 歌单列表
export const playlists = () => ajax({
  url:'/playlists',
})
// 歌曲列表
export const musiclist = () => ajax({
  url:'/singlist',
})

//mock数据- 用户名密码登录
export const phoneq =()=> ajax({
  url:'/phone'
})
export const getMusicianList=()=>ajax({
  url:'/musicianslist'
})
export const getSongList=()=>ajax({
  url:'/singmenu'
})
export const getSingList=()=>ajax({
  url:'singlist'
})
export const getSongdynamic=()=>ajax({
  url:'/songdynamic'
})
export const getMusicList = ()=>ajax({
  url:'/playlists'
})

export const getHot = ()=>ajax({
  url:'/songcircles'
})

export const getMusicer = ()=>ajax({
  url:'/musiclist'
})

export const getEverday =()=>ajax({
  url:'/singlist'
})

export const getMusician= ()=>ajax({
  url:'/musician'
})

export const getCustom= ()=>ajax({
  url:'/wang'
})