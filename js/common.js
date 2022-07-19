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
  // console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log(response)//response里面就是返回给逻辑页面的结果对象axios封装结果
  console.log(response.data)
  // 例如我不想让页面那边在点两个data
  // return会把结果返回到use方法（axios源码内），然后axios掩码会交给逻辑页面（axios请求的地方）为Promise的成功结果
  // 我们在这里去除后台返回的真正数据对象，交给逻辑页面

  return response.data;
}, function (error) {
  if(error.response.status === 401){
    // 非法或者token过期  -----   退出登录
    localStorage.clear()
    location.href = './login.html'
  }




  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});