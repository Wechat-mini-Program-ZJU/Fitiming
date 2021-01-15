// miniprogram/pages/Preview/Preview.js
var formList = require("../../data/formList");
var Users = require("../../data/Users.js");
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    formItem: {
      type: Object,
      observe: function (newval, oldval) {
        console.log(this.data.formItem)
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      formItem: JSON.parse(options.form)
    })
    // console.log(this.data.form)
    // console.log("this.data.formItem.formName",this.data.formItem.formName)
    // console.log("this.data.formItem.date",this.data.formItem.date)
  },

  showChoice: function (e) {

  },

  submit_create: function (e) {
    var pick = this.selectAllComponents(".choose")[0].data.pick
    const db = wx.cloud.database()
    var _ = db.command
    db.collection('form').where({
      name: this.data.formItem.name,
      owner: this.data.formItem.owner
    }).get({
      success: suc => {
        console.log(suc.data[0].peopleCount)
        db.collection('form').where({
          name: this.data.formItem.name,
          owner: this.data.formItem.owner
        }).update({
          data: {
            result: _.push({
              availabletime: pick,
              participant: app.globalData.userInfo.nickName
            }),
            peopleCount: suc.data[0].peopleCount + 1
          },
          success: res => {
            wx.showToast({
              title: '提交成功',
              icon: 'success'
            })
          }
        })
      }
    })
  }
})