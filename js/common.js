// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})
// 设置基地址
axios.defaults.baseURL = 'http://ajax-api.itheima.net'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config值：请求的配置对象
  // 所以可以往config身上添加一些参数例如统一携带Authorization请求头和token值
  let token = localStorage.getItem('hm_token')
  if(token){
    config.headers.Authorization  =  token
  }
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});