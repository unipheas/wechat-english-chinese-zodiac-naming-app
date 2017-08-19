//index.js
// var app = getApp()
Page({
  data: {},
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },
  nextPage: function () {
    wx.navigateTo({
      url: '../chooseSex/chooseSex',
    })
  }
})
