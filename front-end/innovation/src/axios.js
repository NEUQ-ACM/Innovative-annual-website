/* eslint-disable */
//简化后的代码，其中具体业务处理部分按自己项目需求添加
import axios from 'axios'

const instance = axios.create({
  baseURL: '',//请求基础路径
  timeout: 3000,//超时设置，根据具体需求
});

//请求拦截器可以在请求前做一些统一处理，比如加请求头、超时处理等
instance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8' 
    return config
  },
  error => {
   	console.log(error)
    return Promise.reject(error)
  }
)
// http响应拦截器
instance.interceptors.response.use(res => {
    //可以根据后端返回的状态码判断，比如登录失效，请求返回错误等的处理
    if(res.data.error == 404){
      //登录token失效的时候可以进行一些操作，比如提示，跳转登录页
    }
    return res
  },
  error => {
  	return Promise.reject(error)
  }
)

export default instance

