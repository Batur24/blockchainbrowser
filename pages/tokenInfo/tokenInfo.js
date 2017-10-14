// pages/tokenInfo/tokenInfo.js
Page({

  data: {
    tokenInfo: {}
  },

  onLoad: function (options) {
    let name = options.name;
    this.getTokenInfo(name)
  },

  getTokenInfo: function(name) {
    let that = this;
    wx.request({
      url: "https://batur.91laysen.cn/api/blockchain/get/token/" + name,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        console.log(data)
        that.setData({
          tokenInfo: data
        })
      }
    })
  }
})