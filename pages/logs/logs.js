const app = getApp()

Page({
  data: {
    article: {},
    isEdit: false
  },
  onLoad: function (e) {
    const {objectId} = e
    const self = this
    app.http({
      url: `/articles/${objectId}`
    }).then(res => {
      self.setData({
        article: res.data
      })
    })
    // console.log(objectId)
  },
  onEdit() {
    console.log('3456789')
    if (this.data.isEdit) {
      console.log(this.data.article)
      /*this.setData({
        isEdit: false
      })*/
    } else {
      this.setData({
        isEdit: true
      })
    }
  }
})
