// pages/getName/getName.js
var app = getApp()
Page({
  data: {
    sex: '',
    sign: '',
    finalNames: []
  },
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        _this.setData({
          sex: res
        })
        console.log(res);
      },
    })

    wx.getStorage({
      key: 'sign',
      success: function (res) {
        _this.setData({
          sign: res
        })
        console.log(res);
      },
    })
  },
  onReady: function () {
    var _this = this;
    // Generate random names
    var tempArray = [];
    var n01 = app.globalData.names[this.data.sex.data];
    var n02 = n01[this.data.sign.data];
    var z = n02.length;

    // loop to put the values of names object into temp array
    for (var i =0; i < n02.length; i++) {
      tempArray[i] = n02[i];
    }

    // Loop to randomly pick names and have unique values
    for (var x = 0; x < 1; x++) {
      var y = Math.floor(Math.random()*(z - 0)) + 0;
      _this.setData({
        finalNames: this.data.finalNames += tempArray[y]
      })
      var removed = tempArray.splice(y, 1);
      z--;
    }
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})