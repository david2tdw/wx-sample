//logs.js
const util = require('../../utils/util.js')
const a = require('../../pages/index/index.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    wx.setStorageSync('key', '123123')
    console.log('1231')
  },
  handleMyEventClick: function (e) {
    console.log('2222')
    console.log(e)
  },
  onMyEvent: function (e) {
    e.detail // 自定义组件触发事件时提供的detail对象
  }
  // methods: {
  // }
})
