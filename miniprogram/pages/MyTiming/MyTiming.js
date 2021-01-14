const {
  formlist
} = require("../../data/formList");
// miniprogram/pages/MyTiming/MyTiming.js

// var formList = require("../../data/formList");
var app = getApp()

Page({
<<<<<<< Updated upstream
  handleCard: function (e) {
    // console.log("formList", formList)
    console.log("e.currentTarget.dataset.target", e.currentTarget.dataset.target)
    //console.log("form before:",form)
    this.setData({

      // form.quest : !form.quest
      formItem: e.currentTarget.dataset.target
      //formList.formlist.quest: !formList.formlist.quest//
    })
    //console.log("formItem after:",formItem)
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    form: {
      formName: null,
      formStatus: null,
      peopleCount: null,
      quest: null,
    },


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      form: formList.formlist
    })
    console.log(formList)
    console.log(this.data.form)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
=======
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
    refresh_control: true,
    user: null
  },
  showQuest: function (e) {
    // console.log("showQuestFlag", this.showQuestFlag)
    this.setData({
      showQuestFlag: 1
    })
  },
  handleCard: function (e) {
    // console.log("formList", formList)
    // console.log("e.currentTarget.dataset.id", e.currentTarget.dataset.id)
    // console.log("e.currentTarget.dataset.target", e.currentTarget.dataset.target)
    // console.log("e.currentTarget.dataset.target.quest", e.currentTarget.dataset.target.quest)
    // console.log("form before:",form)
    this.setData({
      index: e.currentTarget.dataset.id,
      formItem: e.currentTarget.dataset.target,
    })
    this.showQuest()
    // console.log("formItem after:", this.data.formItem)
  },
  // showModal(e) {
  //   this.setData({
  //     modalName: e.currentTarget.dataset.target
  //   })
  // },
  hideModal(e) {
    this.setData({
      // modalName: null,
      showQuestFlag: 0
    })
  },
  analyseForm: function (e) {
    wx.navigateTo({
      url: "../Analysis/Analysis?form=" + JSON.stringify(e.target.dataset.form)
    })
  },
  deleteForm: function (e) {
    // console.log("index", this.data.index)
    // formList.DeleteTimeForm(this.data.index, 1)
    // console.log("NewTimeForm is run in NewTiming.js")
    // console.log(formList.formlist)
    const db = wx.cloud.database()
    // console.log(e.target.dataset.form.name, e.target.dataset.form.owner)
    db.collection('form').where({
      name: e.target.dataset.form.name,
      owner: e.target.dataset.form.owner
    }).remove()
    this.onShow()
    const _ = db.command
    db.collection('user').where({
      username: e.target.dataset.form.owner
    }).update({
      data: {
        form: _.remove()
      }
    })
    this.setData({
      showQuestFlag: 0,
    })
  },
  // submit_create: function(e){
  //   this.setData({
  //     refresh_control: tur,
  //     showQuestFlag: 0,
  //   })
  // },


  onLoad: function (options) {

  },

>>>>>>> Stashed changes
  onReady: function () {

  },

<<<<<<< Updated upstream
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.tabBar()
  },
=======
>>>>>>> Stashed changes
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
<<<<<<< Updated upstream
      })
    }
=======
      })
    }
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
          // console.log(that.data.form)
        }
      })
    }, 50)
>>>>>>> Stashed changes
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

<<<<<<< Updated upstream
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
=======
    this.setData({
      // modalName: null,
      showQuestFlag: 0
    })
    // console.log("MyTiming is onHide")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
>>>>>>> Stashed changes

  },

  /**
<<<<<<< Updated upstream
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
=======
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
>>>>>>> Stashed changes

  },

  /**
<<<<<<< Updated upstream
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

=======
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
  },

  editForm: function (e) {
    wx.navigateTo({
      url: "../EditForm/EditForm?form=" + JSON.stringify(e.target.dataset.form)
    })
>>>>>>> Stashed changes
  }
})