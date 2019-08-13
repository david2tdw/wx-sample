var http = require('../../utils/http.js')
var app = getApp();

Page({

  data: {
    name: 'aaa',
    latestList: []
  },
  onShow: function () {
    this.fetchList()
  },
  async fetchList () {
    let that = this
    const res = await http.$http('get', '/topics/latest.json')
    // console.log(res)
    if (res.status === '0' || true) {
      that.setData({
        name: 'xxx',
        latestList: res
      })
    }
    if (res.status !== '0') {
      console.log('error')
    }
  }
})