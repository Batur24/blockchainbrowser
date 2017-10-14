Page({

  data: {
    height: "",
    blockInfo: {}
  },

  onLoad: function (options) {
    let height = options.height
    this.getBlockInfo(height)
  },

  getBlockInfo: function(height) {
    let that = this
    wx.request({
      //url: "http://10.30.95.156:8080/api/blockchain/get/block/" + height,
      url: "https://batur.91laysen.cn/api/blockchain/get/block/" + height,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        that.setData({
          height: height,
          blockInfo: data
        })
      }
    })
  },

  onShareAppMessage: function () {
  
  }
})