// pages/tokenInfo/tokenInfo.js
Page({

  data: {
    tokenInfo: {}
  },

  onLoad: function (options) {
    console.log(options)
    let name = options.name;
    this.getTokenInfo(name)
  },

  getTokenInfo: function(name) {
    let that = this;
    wx.request({
      url: "http://10.30.95.156:8080/api/blockchain/get/token/" + name,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        that.setData({
          tokenInfo: data
        })
      }
    })
  }
})