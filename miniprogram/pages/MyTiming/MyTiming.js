const { formlist } = require("../../data/formList");
// miniprogram/pages/MyTiming/MyTiming.js

var formList = require("../../data/formList");

Page({
      /**
     * 页面的初始数据
     */
    data: {
        form: [],
        showQuestFlag: 0,
        

    },
    showQuest: function(e){
      console.log("showQuestFlag", this.showQuestFlag)
      this.setData({
        showQuestFlag: 1
      })
    },
    handleCard: function(e){
      // console.log("formList", formList)
      console.log("e.currentTarget.dataset.target", e.currentTarget.dataset.target)
      console.log("e.currentTarget.dataset.target.quest", e.currentTarget.dataset.target.quest)
      //console.log("form before:",form)
      this.setData({
        
        // form.quest : !form.quest
        formItem: e.currentTarget.dataset.target,
        quest: e.currentTarget.dataset.target.quest,
        formName: e.currentTarget.dataset.target.formName,
        formStatus: e.currentTarget.dataset.target.formStatus,
        peopleCount: e.currentTarget.dataset.target.peopleCount,
        //formList.formlist.quest: !formList.formlist.quest//
      })
      this.showQuest()
      //console.log("formItem after:",formItem)
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
    analyseForm: function(e){
      wx.navigateTo({
        url: `../Analysis/Analysis?formName=${this.data.form.formName}`,
      })
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
      this.setData({
        // modalName: null,
        showQuestFlag: 0
      })
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