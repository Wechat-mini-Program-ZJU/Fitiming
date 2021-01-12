// const { formlist } = require("../../data/formList");
// miniprogram/pages/MyTiming/MyTiming.js

var formList = require("../../data/formList");

Page({
      /**
     * 页面的初始数据
     */
    data: {
        form: [],
        deletedForm:[],
        showQuestFlag: 0,
        a:1,
        b:2,
        index:null,
        formItem: [],
        refresh_control: true
        

    },
    showQuest: function(e){
      // console.log("showQuestFlag", this.showQuestFlag)
      this.setData({
        showQuestFlag: 1
      })
    },
    handleCard: function(e){
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
      console.log("formItem after:",this.data.formItem)
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
        url: `../Analysis/Analysis?formId=${this.data.formItem.formId}&formName=${this.data.formItem.formName}`,
      })
    },
    deleteForm: function(e){
      console.log("index", this.data.index)
      formList.DeleteTimeForm(this.data.index,1)
      console.log("NewTimeForm is run in NewTiming.js")
      console.log(formList.formlist)
      this.onShow()
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
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // this.setData({
      //   form: formList.formlist
      // })
      // console.log(formList)
      // console.log(this.data.form)
      console.log("MyTiming is onLoad")
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log("MyTiming is onReady")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.tabBar()
        this.setData({
          form: formList.formlist
        })
        console.log(this.data.form)
        console.log("MyTiming is onShow")
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
      console.log("MyTiming is onHide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      console.log("MyTiming is onUnload")
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