const util = require("../../utils/util");
var formList = require("../../data/formList.js")
var app = getApp()
// miniprogram/pages/CopyTiming/CopyTiming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    today: null,
    formName: null,
    formNotes: null,
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  submit_copy: function (e) {
    console.log("submit is run in CopyTiming.js")
    wx.switchTab({
      url: '../MyTiming/MyTiming',
    })
    const db = wx.cloud.database()
    db.collection('form').add({
      data: {
        name: this.data.formName,
        status: "未发布",
        peopleCount: 0,
        owner: app.globalData.userInfo.nickName,
        date: this.data.date,
        note: this.data.formNotes,
        result: []
      }
    })
    console.log("NewTimeForm is run in CopyTiming.js")
    console.log(formList.formlist)
  },

  return: function (e) {
    wx.navigateBack({
      delta: 0,
    })
  },

  onLoad: function (options) {
    var tmp = new Date()
    var form = JSON.parse(options.form)
    this.setData({
      formName: form.name,
      formNotes: form.note,
      today: tmp.getFullYear() + "-" + (tmp.getMonth() + 1 < 10 ? "0" : "") + (tmp.getMonth() + 1) + "-" + tmp.getDate(),
        date: tmp.getFullYear() + "-" + (tmp.getMonth() + 1 < 10 ? "0" : "") + (tmp.getMonth() + 1) + "-" + tmp.getDate(),
    })
    // console.log(this.data.date)
  },
})