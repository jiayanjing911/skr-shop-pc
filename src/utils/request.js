// 用来封装网络请求 
import axios from "axios";
let instance = axios.create({
    // baseURL:process.env.VUE_APP_BASE_URL, //开发环境 配置请求根路径
    baseURL:process.env.VUE_APP_BASE_URL_JIA, //开发环境 配置请求根路径
    timeout:5000, //5s后没有响应认为失败
})
export default instance