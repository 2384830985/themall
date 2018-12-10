/**
 * Created by Administrator on 2018/3/8.
 */
// ajax 的配置
import Axios from 'axios'
import {Message, Loading} from 'element-ui'
import qs from 'qs'
let needLoginindex = 1
let loadingInstance
// Axios.defaults.baseURL = '/zq-admin/manager'
Axios.defaults.baseURL = '/api/c'
const httpServer = (opts, data) => {
    // loadingInstance = Loading.service({ fullscreen: true })
    // let Public = { //公共参数  
    //   'srAppid': ""
    // }

    // onUploadProgress: function(progressEvent) {
    //     // Do whatever you want with the native progress event
    // },
    let httpDefaultOpts = { //http默认配置 
          method:opts.method,
          // baseURL: 'https://api.iyuedian.com/iyd-imall-manage/imall/v1',  // 线上
          // baseURL: 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1',  // 测试
          url: opts.url,
          timeout: 100000,
            // onUploadProgress: function(progressEvent) {
            //     // Do whatever you want with the native progress event
            // },
          // params:Object.assign(Public, data),  
          // data:qs.stringify(Object.assign(Public, data)),  
          // params:opts.params,
          data:opts.params,
          headers: opts.method=='get'?{
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }:{  
            // 'X-Requested-With': 'XMLHttpRequest',  
            'Content-Type': 'application/json;charset=UTF-8' 
          }  
    }

    if (process.env.TESTING){
        httpDefaultOpts.baseURL = 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1'
    } else {
        if (process.env.NODE_ENV === 'production') {
            httpDefaultOpts.baseURL = 'https://api.iyuedian.com/iyd-imall-manage/imall/v1'
        }else {
            httpDefaultOpts.baseURL = 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1'
        }
    }

    if (!opts.sysTokenLogin){
        if (localStorage.getItem('userList')){
            let user = JSON.parse(localStorage.getItem('userList'))
            if (user.systoken&&user.systoken!=''){
                httpDefaultOpts.headers.systoken = user.systoken
            }
        }else {
            this.$message('未识别到用户，请重新登陆');
            this.$router.push({
                path: '/login', // 退出登录
            })
        }
    }

    // console.log(httpDefaultOpts.params)
    if(opts.method=='get'){  
      delete httpDefaultOpts.data  
    }else{  
      delete httpDefaultOpts.params  
    }  
      
    let promise = new Promise(function(resolve, reject) {  
      Axios(httpDefaultOpts).then(
        (res) => {  
          if (res.data.code==-3) {
              resolve(res.data)
          }else{
              resolve(res.data)
          }
           // loadingInstance.close()
        }  
      ).catch(  
        (response) => {  
          reject(response)  
           // loadingInstance.close()
        }  
      )  
  
    })  
  return promise  
}  
  
export default httpServer 