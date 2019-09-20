/**
 * @file: index.
 * @intro: 数据请求统一封装.
 */
//导入模块
import axios from 'axios'
import { message } from 'antd';
// import {port_code} from 'common/port_uri'
// import router from 'src/router'
import {Message} from 'element-ui'
//import store from 'store'
//import {SET_USER_INFO} from 'store/actions/type'
import {server_base_url} from 'common/config'

// import {cookieStorage} from 'common/storage'
//import {mapGetters, mapActions} from 'vuex'
//import {GET_USER_INFO} from 'store/getters/type'

const qs = require('qs')

//设置用户信息action
// const setUserInfo = function (user) {
//   store.dispatch(SET_USER_INFO, user)
// }

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      baseURL: 'https://abstest.tenpay.com/abs-gateway',
      //设置请求超时设置
      timeout: 10000,
      //设置请求时的header text/plain,*/*
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Accept': 'application/json'

        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json,text/plain,*/*',
        'userType':'3'
      }
    })
    instance.interceptors.request.use(options => {
      // let is_login = store.state.user_info
      // if (Boolean(is_login.login)) {
      //   options.headers['Authorization'] = is_login.user.token// 让每个请求携带token--['token']为自定义key, 本项目不用 token
      // }
      // options.data = qs.stringify(options.data);
      options.data = options.data;
      return options;
    }, error => {
      Promise.reject(error);
    })
    //请求处理
    instance(options).then(({data: {code, msg, data, total}}) => {
      console.info(data);
      // 请求成功时,根据业务判断状态
      if (code == 200) {
        resolve({code, msg, data, total})
        return false
      } else if (code == 520||code == 521) {
        if(code==521){
          alert(msg)
        }
       // setUserInfo(null)
        // router.replace({
        //   name: "login"
        // })
        return false
      }
      Message.warning(msg)
      reject({code, msg, data})
    }).catch((error) => {
      //请求失败时,根据业务判断状态
      if (error.response) {
        let resError = error.response
        let resCode = resError.status
        let resMsg = error.message
        Message.error('操作失败！错误原因 ' + resMsg)
        reject({code: resCode, msg: resMsg})
      }
    })
  })
}
