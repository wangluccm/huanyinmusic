import { phoneq } from "../../api";
import { SAVE_PHONEDATAS ,ADD_PHONE,DELETE_DATA} from "../mutation-type";
let phoneDatas = JSON.parse(localStorage.getItem("PhoneDatas_key"))||''
let pwd = JSON.parse(localStorage.getItem("pwd_key"))||''
let phon = JSON.parse(localStorage.getItem("phone_key"))||''
const state = {
  lalla:'zunzun',
  phoneDatas,  //初始化数据
  pwd,
  phone:phon
}

const actions = {
  async gitPhoneDatasAction({commit}){
    let result = await phoneq()
    console.log(result.data)
    commit(SAVE_PHONEDATAS,{PhoneDatas:result.data})
  }
}
const mutations = {
  [SAVE_PHONEDATAS](state,{PhoneDatas}){
    localStorage.setItem("PhoneDatas_key",JSON.stringify(PhoneDatas))
    state.PhoneDatas = PhoneDatas
  },
  [ADD_PHONE](state,{pwd,phone}){
    localStorage.setItem("pwd_key",JSON.stringify(pwd))
    localStorage.setItem("phone_key",JSON.stringify(phone))
    state.pwd = pwd
    state.phone = phone
    localStorage.removeItem("pwd_key","phone_key")
  },
   [DELETE_DATA](state,{shanchushuju}){
     
     state. phone = ''
   },
  
}






export default{
  state,
  actions,
  mutations
  
}