// pages/getName/getName.js
var app = getApp()
Page({
  data: {
    sex: '',
    sign: '',
    finalNames: [],
    finalMeaning: []
  },
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        _this.setData({
          sex: res
        })
      },
    })

    wx.getStorage({
      key: 'sign',
      success: function (res) {
        _this.setData({
          sign: res
        })
      },
    })
  },
  onReady: function () {
    var _this = this;
    // Generate random names
    var n01 = app.globalData.names[this.data.sex.data];
    var n02 = n01[this.data.sign.data];
    var n03 = app.globalData.meaning[this.data.sign.data];
    var z = n02.length;
    var zz = n03.length;

    // Loop to randomly pick names and have unique values
    for (var x = 0; x < 1; x++) {
      var y = Math.floor(Math.random()*(z - 0)) + 0;
      _this.setData({
        finalNames: n02[y]
      })
      z--;
    }

    for (var x = 0; x < 1; x++) {
      var y = Math.floor(Math.random()*(zz - 0)) + 0;
      _this.setData({
        finalMeaning: n03[y]
      })
      zz--;
    }
    
    // Image Generator
    var canvas = document.getElementById('myCanvas');
    canvas.width = 300;
    canvas.height = 300;
    var ctx = canvas.getContext('2d');
    var img = document.getElementById('imageNames');
    var x = canvas.width / 2 - img.width / 2;
    var y = canvas.height / 2 - img.height / 2;
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '25px arial';
    ctx.lineWidth = 3;

    img.onload = function () {
      ctx.drawImage(img, x, y);
    }
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})