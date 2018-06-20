import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: "http://192.168.1.182:8200", // api的base_url
  timeout: 15000 // 请求超时时间
})

export default service
