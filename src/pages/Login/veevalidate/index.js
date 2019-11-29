import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.extend('mobile',{
  validate:value=>{
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
  },
  getMessage:field=>field+'必须是11位的手机号码'
})
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    pwd: '密码'
  }
})