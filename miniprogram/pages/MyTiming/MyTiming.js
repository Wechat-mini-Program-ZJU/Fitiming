const {
  formlist
} = require("../../data/formList");
// miniprogram/pages/MyTiming/MyTiming.js

// var formList = require("../../data/formList");
var app = getApp()

Page({
  /**
 * 页面的初始数据
 */
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
  // showModal(e) {
  //   this.setData({
  //     modalName: e.currentTarget.dataset.target
  //   })
  // },
  stopForm: function (e) {
    // console.log(this.data.form)
    // console.log(this.data.index)
    let index = this.data.index
    formList.formlist[index].formStatus = "已停止"
    this.onShow()
    this.hideModal()

  },
  postForm: function (e) {
    let index = this.data.index
    formList.formlist[index].formStatus = "已发布"
    this.onShow()
    this.hideModal()

  },
  startForm: function (e) {
    let index = this.data.index
    formList.formlist[index].formStatus = "已发布"
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
      url: `../EditTiming/EditTiming?formId=${this.data.formItem.formId}&formName=${this.data.formItem.formName}&date=${this.data.formItem.date}&notes=${this.data.formItem.notes}`,
    })
  },
  copyForm: function (e) {
    wx.navigateTo({
      url: `../CopyTiming/CopyTiming?formId=${this.data.formItem.formId}&formName=${this.data.formItem.formName}&date=${this.data.formItem.date}&notes=${this.data.formItem.notes}`,
    })
  },
  analyseForm: function (e) {
    wx.navigateTo({
      url: `../Analysis/Analysis?formId=${this.data.formItem.formId}&formName=${this.data.formItem.formName}`,
    })
  },
  shareForm: function (e) {
    this.onShareAppMessage()
  },
  previewForm: function (e) {
    wx.navigateTo({
      url: `../Preview/Preview?formId=${this.data.formItem.formId}&formName=${this.data.formItem.formName}&date=${this.data.formItem.date}&notes=${this.data.formItem.notes}`,
    })
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
      }), 50)
  },
  onShow: function () {
    this.tabBar()
    this.setData({
      form: formList.formlist
    })
    // console.log(this.data.form)
    console.log("MyTiming is onShow")
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


  onShareAppMessage: function (res) {
    let title = '邀请你填写时间统计：' + this.data.formItem.formName
    return {
      title: title,
      path: `../Share/Preview?formId=${this.data.formItem.formId}&formName=${this.data.formItem.formName}&date=${this.data.formItem.date}&notes=${this.data.formItem.notes}`,
      imageUrl: 'http://wychandsome12138.xyz:81/Fitiming_icon.png',
      success: function (shareTickets) {
        console.info(shareTickets + '分享成功');
        //转发成功
      },
      fail: function (res) {
        console.log(res + '分享失败');
      },
      complete: function (res) {

      }


    }
  }
})