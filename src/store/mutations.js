import {
  SONG_PLAYLISTS,
  SONG_MUSICLIST,
  GET_MUSICIANLIST,GET_SONGLIST,
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
  [SONG_PLAYLISTS](state,{playlists}){
    console.log(playlists)
    state.playlists = playlists
    //console.log(state.playlists)
  },

  [SONG_MUSICLIST](state,{musiclist}){
    console.log(musiclist)
    state.musiclist = musiclist
    console.log(state.musiclist)
  },
  [GET_MUSICIANLIST](state,{musician}){
    state.musician=musician
  },
  [GET_SONGLIST](state,{songs}){
    state.songs=songs
  },
  [GET_SINGLIST](state,{sings}){
    state.sings=sings
  },
  [GET_SONGDY](state,{songdy}){
    state.songdy=songdy.splice(0,6)
  },
  [SAVE_MUSICLIST](state, {mousiclist}){
    state.mousiclist = mousiclist
  },
  [SAVE_HOT](state, {songcircles}){
    state.songcircles = songcircles.splice(0,6)
  },
  [SAVE_MUSICAL](state, { musiclist}){
    state.musiclist =  musiclist
  },
  [SAVE_EVERLIST](state, {everday}){
    state.everday = everday.splice(0,10)
  },
  [SAVE_MUSICER](state, {musician}){
    state.musician = musician
  },
  [SAVE_CUSTOM](state, {custom}){
    state.custom = custom
  }
}