let Login =()=>import('../pages/Login/Login')
let MyMusic =()=>import('../pages/MyMusic/MyMusic')
let Musician=()=>import('../pages/Musician/Musician')
let Playlists=()=>import('../pages/Playlists/Playlists.vue')
let Musiclist=()=>import('../pages/Musiclist/Musiclist.vue')
let Home=()=>import('../pages/Home/Home')
let Songlist=()=>import('../pages/Songlist/Songlist.vue')
let Tribes=()=>import('../pages/Tribes/Tribes.vue')
let ranking=()=>import('../pages/ranking/ranking.vue')
let Comment=()=>import('../pages/Comment/Comment.vue')



export default [
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/myMusic',
    component:MyMusic
  },
  {
    path:'/musician',
    component:Musician
  },
  {
    path:'/playlists',
    component:Playlists
  },
  {
    path:'/musiclist',
    component:Musiclist
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/songlist',
    component:Songlist
  },
  {
    path:'/tribes',
    component:Tribes
  },
  {
    path:'/ranking',
    component:ranking
  },
  {
    path:'/comment',
    component:Comment
  },
  {
    path: '/',
    redirect: '/home'
  }
  
]
