//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    names: {
      'male': {
        'rat': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'ox': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'tiger': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'rabbit': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'dragon': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'snake': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'horse': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'sheep': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'monkey': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'rooster': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'dog': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James'],
        'pig': ['John', 'Bob', 'Carl', 'Jason', 'Brian', 'James']
      },
      'female': {
        'rat': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'ox': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'tiger': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'rabbit': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'dragon': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'snake': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'horse': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'sheep': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'monkey': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'rooster': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'dog': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare'],
        'pig': ['Mary', 'Susan', 'Jenny', 'Jessica', 'Britney', 'Clare']
      }
    },
    meaning: {
      'rat': ['random meaning', 'random meaning', 'random meaning'],
      'ox': ['random meaning', 'random meaning', 'random meaning'],
      'tiger': ['random meaning', 'random meaning', 'random meaning'],
      'rabbit': ['random meaning', 'random meaning', 'random meaning'],
      'dragon': ['random meaning', 'random meaning', 'random meaning'],
      'snake': ['random meaning', 'random meaning', 'random meaning'],
      'horse': ['random meaning', 'random meaning', 'random meaning'],
      'sheep': ['random meaning', 'random meaning', 'random meaning'],
      'monkey': ['random meaning', 'random meaning', 'random meaning'],
      'rooster': ['random meaning', 'random meaning', 'random meaning'],
      'dog': ['random meaning', 'random meaning', 'random meaning'],
      'pig': ['random meaning', 'random meaning', 'random meaning']
    }
  }
})
