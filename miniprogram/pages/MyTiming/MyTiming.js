const { formlist } = require("../../data/formList");
// miniprogram/pages/MyTiming/MyTiming.js

var formList = require("../../data/formList");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        form: {
            // formName: "大内建时间意向调查",
            // formStatus: "已发布",
            // peopleCount: 29,
          }

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
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.tabBar()
    },
    tabBar() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
          this.getTabBar().setData({
            selected: 0
          })
        }
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