// pages/chooseSign/chooseSign.js
Page({
  data: {},
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  sendSign: function (e) {
    wx.setStorage({ key: 'sign', data: e.target.dataset.sex });
    wx.navigateTo({
      url: '../payment/payment',
    })
  }
})