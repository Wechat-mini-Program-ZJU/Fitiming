// miniprogram/pages/Preview/Preview.js
var formList = require("../../data/formList");
var Users = require("../../data/Users.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
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
})