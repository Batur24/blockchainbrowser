Page({

  data: {
    accounts: {},
    searchPicker: "交易记录",
    array: ['交易记录', '区块链地址', '区块高度','数字货币'],
    objectArray: [
      {
        id: 0,
        name: '交易记录'
      },
      {
        id: 1,
        name: '区块链地址'
      },
      {
        id: 2,
        name: '区块高度'
      },
      {
        id: 3,
        name: '数字货币'
      }
    ],
    index: 0
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

  selectaccounts: function(event) {
    let name = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/accountInfo/accountInfo?name=' + name,
    })
  }

})
