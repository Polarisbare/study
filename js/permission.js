if (localStorage.getItem('hm_token') === null) {
    // 没拿到就强制跳转到登录页面
    location.href = './login.html'
  }
  // 从本地拿出用户名在用户右上角登录页面显示
  document.querySelector('#wudi').innerHTML = localStorage.getItem('hm_username')
  // 退出绑定点击事件 清楚本地存储的数据，返回登录页面
  document.querySelector('#logout').addEventListener('click', e => {
    localStorage.clear()//清楚本地数据
    location.href = './login.html'
  })