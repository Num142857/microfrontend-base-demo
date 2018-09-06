import axios from 'axios'
import { notification } from 'antd'
import MockAdapter from 'axios-mock-adapter'
import { apiPathProgress } from 'Common/apiPath'
import { loginPage, logoutPage } from './url'
// 是否禁用代理
const ENV_MOCK = process.env.MOCK === 'true'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  }

  const errortext = codeMessage[response.status] || response.statusText
  notification.error({
    message: `请求错误 ${response.status}: ${response.config.url || null}`,
    description: errortext,
  })
}

// 拦截器,response之后
axios.interceptors.response.use(function (response) {
  return checkStatus(response)
}, function (e) {
  checkStatus(e.response)
  return Promise.reject(e)
})

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置loading动画显示
  return config
}, error => {
  // 请求错误时做些事
  return Promise.reject(error)
})

axios.interceptors.request.use(config => {
  return config
}, function (error) {
  return Promise.reject(error)
})

// axios.interceptors.response.use(function (response) {
//   if (response.data.code === 2) {
//     location.href = loginPage
//   }
//   return response.data
// }, function (error) {
//   return Promise.reject(error)
// })

export default axios
export const post = axios.post
export const put = axios.put
export const get = axios.get
export const del = (url, params) => {
  return axios.delete(url, { params })
}
