//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'f-environment-9gqfkpv09164a036',
      traceUser: true
    })

    // console.log("app.js is onLaunch")
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // console.log(res.userInfo)
              const db = wx.cloud.database()
              db.collection('user').where({
                username: res.userInfo.nickName
              }).get({
                success: res => {
                  // console.log(res)
                  this.globalData.hasInfo = res.data.length == 1

                  // console.log(this.globalData.hasInfo)
                  if (0 == this.globalData.hasInfo) {
                    db.collection('user').add({
                      data: {
                        username: res.userInfo.nickName,
                        avatar: res.userInfo.avatarUrl,
                        form: [],
                        involved: [],
                        gender: res.userInfo.gender
                      },
                      success: res => {
                        // console.log("success")
                      },
                      fail: err => {
                        // console.log("error")
                      }
                    })
                    console.log("userinfo saved")
                  }
                },
                fail: err => {
                  wx.showToast({
                    icon: 'none',
                    title: '查询记录失败'
                  })
                  // console.error('数据库查询失败', err)
                }
              })

              // console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null,
    hasInfo: false
  }
})