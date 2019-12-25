Page({
  data: {
    img: [
    'http://b.hiphotos.baidu.com/image/h%3D300/sign=05b297ad39fa828bce239be3cd1e41cd/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
    'http://img1.imgtn.bdimg.com/it/u=1734073965,524448280&fm=26&gp=0.jpg',
    'http://attach.bbs.miui.com/forum/201111/21/205700txzuacubbcy91u99.jpg'
    ],
    list:[
     '代办事项',
     '代办事项1',
     '代办事项2',
     '代办事项3',
     '代办事项4',
     '代办事项5',
     '代办事项6',
    ],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    itemVal: ''
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
