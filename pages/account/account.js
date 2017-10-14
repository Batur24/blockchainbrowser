Page({

  data: {
    accounts: {}
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: "http://10.30.95.156:8080/api/blockchain/get/accounts",
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
      url: '/pages/tokenInfo/accountsInfo?name=' + name,
    })
  }

})
