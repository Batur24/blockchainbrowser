// pages/tokenInfo/tokenInfo.js
Page({

  data: {
    accountInfo: {}
  },

  onLoad: function (options) {
    let name = options.address;
    this.getaccountInfo(name)
  },

  getaccountInfo: function(name) {
    let that = this;
    wx.request({
      url: "https://batur.91laysen.cn/api/blockchain/get/address/" + name,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        console.log(data)
        that.setData({
          accountInfo: data
        })
      }
    })
  }
})
