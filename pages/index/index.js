//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    blocks: [],
    searchArray: ["txhash","address","block"],
    searchPicker: "",
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
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    this.testapi()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindPickerChange: function(e) {
    let that = this;
    that.setData({
      searchPicker: that.data.array[e.detail.value]
    })
  },

  selectBlock: function(event) {
    let height = event.currentTarget.dataset.height;
    console.log(height)
    wx.navigateTo({
      url: '/pages/blockInfo/blockInfo?height=' + height,
    })
  },
  
  testapi: function() {
    let that = this
    wx.request({
      url: "http://10.30.95.156:8080/api/blockchain/get/blocks/1",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data
        console.log(data)
        that.setData({
          blocks: data
        })
      }
    })
  }
})
