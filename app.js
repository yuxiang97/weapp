import {apiBaseUrl} from './config.js'


App({
  http({ url, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${apiBaseUrl}${url}`,
        method,
        success(res){
          resolve(res)
        },
        fail(error) {
          reject(error)
        }
      })
    })
  },
  onLaunch: function () {},
  globalData: {
    userInfo: null
  }
})