Page({

  data: {
    accounts: {}
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: "https://batur.91laysen.cn/api/blockchain/get/accounts",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        that.setData({
          accounts: data
        })
      }
    })
  },

  selectaccounts: function(name) {
    wx.navigateTo({
      url: '/pages/accountInfo/accountInfo?name=' + name,
    })
  }

})
