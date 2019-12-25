const app = getApp()

Page({
  data: {
    img: [
    'http://img.zcool.cn/community/0104865de899d5a80120956878d1a6.jpg@2o.jpg',
    'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1511/12/c0/15185530_1447338507086_800x600.jpg',
    'http://pic1.win4000.com/wallpaper/f/58cf406144416.jpg'
    ],
    list:[],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    itemVal: ''
  },
  previewImage(e) {
    // console.log(e.currentTarget.dataset.src)
    wx.previewImage({
      urls: [e.currentTarget.dataset.src], // 当前显示图片的http链接
      success(res) {
        console.log(res)
      }
    })
  },
  onLoad(e) {
    console.log(e)
  },
  onShow() {
    const self = this

    app.http({
      url: '/articles',
    }).then((res) => {
      self.setData({
        list: res.data
      })
    })

    /*try {
      const res = app.http({
        url: '/articles',
      })
      self.setData({
        list: res.data
      })
    } catch (e) {
      console.log(e)
    }*/
    /*wx.request({
      url: `${apiBaseUrl}/articles`,
      method: 'GET',
      success(res){
        self.setData({
          list: res.data
        })
        // console.log(res.data)
      }
    })*/
  },
  getVal() {
    const self = this
    if (self.data.itemVal) {
      // console.log(this.data.itemVal)
      wx.showModal({
        title: '提示',
        content: this.data.itemVal,
        success (res) {
          if (res.confirm) {
            self.setData({
              itemVal: ''
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '不能为空！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onInputChange(e) {
    // this.data.itemVal = e.detail.value
    this.setData({
      itemVal: e.detail.value
    })
  }
})
