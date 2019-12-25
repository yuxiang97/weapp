import {apiBaseUrl} from '../../config.js'

Page({
  data: {},
  onLoad: function (e) {
    const {objectId} = e
    const self = this

    wx.request({
      url: `${apiBaseUrl}/articles/${objectId}`,
      method: 'GET',
      success(res){
        self.setData({
          list: res.data
        })
        console.log(res.data)
      }
    })

    console.log(objectId)
  }
})
