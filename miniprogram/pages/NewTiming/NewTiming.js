const util = require("../../utils/util");
var formList = require("../../data/formList.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    today: null,
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  submit_create: function (e) {
    const db = wx.cloud.database()
    db.collection('form').add({
      data: {
        name: this.data.formName,
        status: "已发布",
        peopleCount: 0,
        result: [],
        owner: app.globalData.userInfo.nickName,
        date: this.data.date,
        note: this.data.formNotes,
      }
    })
    const _ = db.command
    db.collection('user').where({
      username: app.globalData.userInfo.nickName
    }).update({
      data: {
        form: _.push(this.data.formName)
      }
    })
    wx.switchTab({
      url: '../MyTiming/MyTiming',
    })
  },

  return: function (e) {
    wx.navigateBack({
      delta: 0,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tmp = new Date();
    this.setData({
      today: tmp.getFullYear() + "-" + (tmp.getMonth() + 1 < 10 ? "0" : "") + (tmp.getMonth() + 1) + "-" + tmp.getDate(),
      date: tmp.getFullYear() + "-" + (tmp.getMonth() + 1 < 10 ? "0" : "") + (tmp.getMonth() + 1) + "-" + tmp.getDate()
    })
    // console.log(this.data.date)
  }
})