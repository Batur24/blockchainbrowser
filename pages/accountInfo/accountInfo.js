// pages/tokenInfo/tokenInfo.js
Page({

  data: {
    accountInfo: {}
  },

  onLoad: function (options) {
    console.log(options)
    let name = options.address;
    this.getaccountInfo(name)
  },

  getaccountInfo: function(name) {
    let that = this;
    wx.request({
      url: "http://10.30.95.156:8080/api/blockchain/get/address/" + name,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        that.setData({
          accountInfo: data
        })
      }
    })
  }
})
