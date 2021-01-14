// miniprogram/pages/Preview/Preview.js
var formList = require("../../data/formList");
var Users = require("../../data/Users.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,

    formItem:{
      formId:null,
      formName:null,
      formStatus: null,
      peopleCount: null,
      quest: null,
      date: null,
      notes: null,
      participant: null,
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let formId = "formItem.formId"
    let formName = "formItem.formName"
    let date = "formItem.date"
    let notes = "formItem.notes"
    this.setData({
      [formId]: options.formId,
      [formName]: options.formName,
      [date]: options.date,
      [notes]: options.notes
    })
    // console.log("this.data.formItem.formName",this.data.formItem.formName)
    console.log("this.data.formItem.date",this.data.formItem.date)
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