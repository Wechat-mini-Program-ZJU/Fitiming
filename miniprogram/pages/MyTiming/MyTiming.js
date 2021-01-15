const {
  formlist
} = require("../../data/formList");
// miniprogram/pages/MyTiming/MyTiming.js

// var formList = require("../../data/formList");
var app = getApp()

Page({
  data: {
    form: [],
    deletedForm: [],
    showQuestFlag: 0,
    a: 1,
    b: 2,
    index: null,
    formItem: [],
    refresh_control: true
  },
  showQuest: function (e) {
    // console.log("showQuestFlag", this.showQuestFlag)
    this.setData({
      showQuestFlag: 1
    })
  },
  handleCard: function (e) {
    // console.log("formList", formList)
    console.log("e.currentTarget.dataset.id", e.currentTarget.dataset.id)
    console.log("e.currentTarget.dataset.target", e.currentTarget.dataset.target)
    // console.log("e.currentTarget.dataset.target.quest", e.currentTarget.dataset.target.quest)
    // console.log("form before:",form)
    this.setData({
      index: e.currentTarget.dataset.id,
      formItem: e.currentTarget.dataset.target,
    })
    this.showQuest()
    console.log("formItem after:", this.data.formItem)
  },
  postForm: function (e) {
    const db = wx.cloud.database()
    db.collection('form').where({
      name: e.target.dataset.form.name,
      owner: e.target.dataset.form.owner
    }).update({
      data: {
        status: "已发布"
      }
    })
    this.onShow()
    this.hideModal()
  },
  startForm: function (e) {
    const db = wx.cloud.database()
    db.collection('form').where({
      name: e.target.dataset.form.name,
      owner: e.target.dataset.form.owner
    }).update({
      data: {
        status: "已发布"
      }
    })
    this.onShow()
    this.hideModal()
  },

  stopForm: function (e) {
    const db = wx.cloud.database()
    db.collection('form').where({
      name: e.target.dataset.form.name,
      owner: e.target.dataset.form.owner
    }).update({
      data: {
        status: "已停止"
      }
    })
    this.onShow()
    this.hideModal()
  },

  hideModal(e) {
    this.setData({
      // modalName: null,
      showQuestFlag: 0
    })
  },
  editForm: function (e) {
    wx.navigateTo({
      url: "../EditTiming/EditTiming?form=" + JSON.stringify(e.target.dataset.form),
    })
  },
  copyForm: function (e) {
    wx.navigateTo({
      url: "../CopyTiming/CopyTiming?form=" + JSON.stringify(e.target.dataset.form),
    })
  },
  analyseForm: function (e) {
    wx.navigateTo({
      url: "../Analysis/Analysis?form=" + JSON.stringify(e.target.dataset.form),
    })
  },
  shareForm: function (e) {
    this.onShareAppMessage(e)
  },
  previewForm: function (e) {
    wx.navigateTo({
      url: "../Preview/Preview?form=" + JSON.stringify(e.target.dataset.form),
    })
  },

  deleteForm: function (e) {
    const db = wx.cloud.database()
    db.collection('form').where({
      name: e.target.dataset.form.name,
      owner: e.target.dataset.form.owner
    }).remove()
    this.onShow()
    this.hideModal()
  },

  onShow: function () {
    var that = this;
    // wx.showLoading({
    //   title: '加载中',
    // })
    setTimeout(function () {
      that.setData({
        user: app.globalData.userInfo.nickName
      })
      wx.hideLoading()

      that.tabBar()
      var formList = []
      const db = wx.cloud.database()
      // console.log(that.data.user)
      db.collection('form').where({
        owner: that.data.user
      }).get({
        success: res => {
          // console.log(res)
          that.setData({
            form: res.data
          })
        }
      })
    }, 50)
  },

  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
      // console.log(that.data.form)
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

    this.setData({
      // modalName: null,
      showQuestFlag: 0
    })
    // console.log("MyTiming is onHide")
  },

  onShareAppMessage: function (e) {
    let title = '邀请你填写时间统计：' + this.data.formItem.name
    return {
      title: title,
      path: "/pages/Share/Preview?form=" + JSON.stringify(e.target.dataset.form),
      imageUrl: 'http://wychandsome12138.xyz:81/Fitiming_icon.png',
      success: function (shareTickets) {
        console.info(shareTickets + '分享成功');
        //转发成功
      },
      fail: function (res) {
        console.log(res + '分享失败');
      },
      complete: function (res) {}
    }
  }
})