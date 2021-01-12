const util = require("../../utils/util");
var formList = require("../../data/formList.js")

// miniprogram/pages/NewTiming/NewTiming.js
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

  submit_create: function (e) {
    console.log("submit is run in NewTiming.js")
    wx.switchTab({
      url: '../MyTiming/MyTiming',
    })
    formList.NewTimeForm({
      formId: this.data.date+' '+this.data.formName,
      formName: this.data.formName,
      formStatus: "未发布",
      peopleCount: 0,
      quest: false,
      date: this.data.date,
      notes: this.data.formNotes,
    })
    console.log("NewTimeForm is run in NewTiming.js")
    console.log(formList.formlist)
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
      today: tmp.getFullYear() + "-" + (tmp.getMonth() + 1) + "-" + tmp.getDate(),
      date: tmp.getFullYear() + "-" + (tmp.getMonth() + 1) + "-" + tmp.getDate()
    })
    console.log(this.data.date)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})