const util = require("../../utils/util");
var formList = require("../../data/formList.js")

// miniprogram/pages/EditTiming/EditTiming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    today: null,
    formName: null,
    formNotes: null,
    formId: null,
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  submit_save: function (e) {
    console.log("submit is run in EditTiming.js")
    let _this = this
    wx.switchTab({
      url: '../MyTiming/MyTiming',
    })
    // formList.NewTimeForm({
    //   formId: this.data.date+' '+this.data.formName,
    //   formName: this.data.formName,
    //   formStatus: "未发布",
    //   peopleCount: 0,
    //   quest: false,
    //   date: this.data.date,
    //   notes: this.data.formNotes,
    let k
    for( k =0; k < formList.formlist.length; k++){//k作为formList.formlist[i]的Index
      if( formList.formlist[k].formId == _this.data.formId){//如果formList.formlist[i]和this.data中的formid成功匹配,说明找到用户对应的表单，可以进行数据填入
        console.log("find formList.formlist[i]")
        formList.formlist[k].formStatus = "未发布"
        formList.formlist[k].formName = _this.data.formName
        formList.formlist[k].formNotes = _this.data.formNotes
        formList.formlist[k].date = _this.data.date
        break//跳出寻找users[i].formInfo中对应formid的循环
      }
    }
    // })
    // console.log("NewTimeForm is run in NewTiming.js")
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
      formName: options.formName,
      formNotes: options.notes,
      today: options.date,
      date: options.date,
      formId: options.formId
    })
    // console.log(this.data.date)
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