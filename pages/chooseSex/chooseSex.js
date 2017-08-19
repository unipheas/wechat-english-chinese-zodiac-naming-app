// pages/chooseSex/chooseSex.js
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
  male: function () {
    wx.setStorage({ key: 'sex', data: 'male' });
    wx.navigateTo({
      url: '../chooseSign/chooseSign',
    })
  },

  female: function () {
    wx.setStorage({ key: 'sex', data: 'female' });
    wx.navigateTo({
      url: '../chooseSign/chooseSign',
    })
  }
})