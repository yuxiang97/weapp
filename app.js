import {apiBaseUrl} from './config.js'


App({
  http({ url, method = 'GET', success }) {
    wx.request({
      url: `${apiBaseUrl}${url}`,
      method,
      success(res){
        success(res)
      }
    })
  },
  onLaunch: function () {},
  globalData: {
    userInfo: null
  }
})