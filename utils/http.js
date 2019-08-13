const baseUrl = 'https://www.v2ex.com/api'

function $http (method = 'GET', url, data = {}) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'X-Nideshop-Token': wx.getStorageSync('token')
      },
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        }
      },
      fail: function (err) {
        console.log(err)
        reject(err)
      }
    })
  })
}

module.exports = {
  $http
}