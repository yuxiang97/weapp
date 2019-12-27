import drawQrcode from './weapp.qrcode.min.js'
Page({


})
drawQrcode({
  width: 200,
  height: 200,
  canvasId: 'myQrcode',
  // ctx: wx.createCanvasContext('myQrcode'),
  text: 'https://github.com/yingye',
  // v1.0.0+版本支持在二维码上绘制图片
  typeNumber:8,

})

