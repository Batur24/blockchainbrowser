Page({

  data: {
    tokenInfo: {},
    searchPicker: "数字货币",
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
    index: 0,
  },

  onLoad: function (options) {
    let that = this;
    wx.request({
      url: "https://batur.91laysen.cn/api/blockchain/get/tokens",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data.filter(item => item.price);
        console.log(data)
        that.setData({
          tokens: data
        })
      }
    })
  },

  searchUrl: function() {
    switch (this.data.searchPicker) {
      case "交易记录":
        return "/pages/blockInfo/blockInfo?height="
      case "区块链地址":
        return "/pages/blockInfo/blockInfo?height="
      case "区块高度":
        return "/pages/blockInfo/blockInfo?height="
      case "数字货币":
        return "/pages/tokenInfo/tokenInfo?name="
      default:
        break;
    }
  },

  searchData: function(e) {
    let url = this.searchUrl();
    let value =e.detail.value;
    wx.navigateTo({
      url: url + value,
    })
  },

  selectToken: function(event) {
    let name = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/tokenInfo/tokenInfo?name=' + name,
    })
  }

})