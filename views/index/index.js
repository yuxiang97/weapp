
Page({

  scanCode() {
    wx.scanCode({
      success (res) {
        console.log(res)
        wx.showModal({
          title: '提示',
          content: res.result
        })
      }
    })
  },

  getLocation() {
    wx.getSetting({
      success (res) {
        const userLocation = res.authSetting['scope.userLocation']

        if (userLocation) {
          wx.chooseLocation({
            success(res) {
              console.log(res)
            },
            fail(error){
              console.log(error)
            }
          })
        } else {
        //
        }

      }
    })
  },
  pay() {
    wx.request({
      url: '/pay',
      data: '88.88',
      method: 'POST',
      success(res) {
        // res
        /*
          timeStamp: '',
          nonceStr: '', // 随机字符串
          package: '', // 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
          signType: 'MD5', // 签名算法
          paySign: '', // 签名
          // 凡是牵扯到金钱的交易功能都不简单
        * */
        wx.requestPayment({
          timeStamp: '',
          nonceStr: '',
          package: '',
          signType: 'MD5',
          paySign: '',
          success (res) {

          },
          fail (res) {

          }
        })
      }
    })
  },

  onLoad() {

    // 使手机发生较长时间的振动（400 ms)


    /*setInterval(() => {
      wx.vibrateLong()
    }, 1000)*/

    // const accountInfo = wx.getAccountInfoSync();
    // console.log(accountInfo)
    /*wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })*/
    /*wx.getLocation({
      type: 'wgs84',
      // altitude: true,
      // isHighAccuracy: true,
      success (res) {
        console.log(res)
        /!*const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy*!/
      }
    })*/


    /*wx.getSetting({
      success (res) {
        console.log(res.authSetting)
      }
    })*/

    /*wx.chooseLocation({
      success(res) {
        console.log(res)
      }
    })*/

    /*wx.startRecord({
      success (res) {
        const tempFilePath = res.tempFilePath
        console.log(res)
      }
    })
    setTimeout(function () {
      wx.stopRecord() // 结束录音
    }, 10000)*/

    /*wx.getImageInfo({
      src: '/discount.png',
      success(res) {
        console.log(res)
      }
    })*/
    /*wx.compressImage({
      src: '', // 图片路径
      quality: 80 // 压缩质量
    })*/


    /*wx.showNavigationBarLoading({
      success(res) {
        wx.setNavigationBarTitle({
          title: '当前页面'
        })
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#ff0000',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      }
    })*/
    /*wx.showLoading({
      mask: true,
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 4000)*/

    /*wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      // showCancel: false,
      cancelText: 'cancel',
      cancelColor: 'red',
      confirmText: 'confirm',
      confirmColor: 'blue',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })*/

    /*wx.showToast({
      title: '成功',
      // icon: 'loading',
      // image: '/discount.png',
      duration: 10000,
      mask: true,
      success(res) {
        console.log(res)
      }
    })*/
    // console.log(wx.getSystemInfoSync())
    /*wx.getSystemInfo({
      success(res) {
        console.log(res)
      }
    })*/
  },
  saveIcon() {
    wx.saveImageToPhotosAlbum({
      filePath: '/discount.png',
      success(res) {
        console.log(res)
      }
    })
  },
  reLaunch() {
    wx.reLaunch({
      url: '/pages/index/index?id=1'
    })
  },
  linkTo() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  choose() {
    wx.showActionSheet({
      itemList: ['从相册选择', '相机'],
      success (res) {
        switch (res.tapIndex) {
          case 0:
            wx.chooseImage({
              count: 1,
              sizeType: ['original', 'compressed'],
              sourceType: ['album'],
              success (res) {
                console.log(res)
                const tempFilePaths = res.tempFilePaths
              }
            })
            break
          case 1:
            wx.chooseImage({
              count: 1,
              sizeType: ['original', 'compressed'],
              sourceType: ['camera'],
              success (res) {
                console.log(res)
                const tempFilePaths = res.tempFilePaths
              }
            })
            break
        }
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  }
})
