Page({

  data: {
    tokenInfo: {}
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: "http://10.30.95.156:8080/api/blockchain/get/tokens",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        that.setData({
          tokens: data
        })
      }
    })
  },

  selectToken: function(event) {
    let name = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/tokenInfo/tokenInfo?name=' + name,
    })
  }

})