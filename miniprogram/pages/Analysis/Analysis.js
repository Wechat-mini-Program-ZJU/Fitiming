// miniprogram/pages/Analysis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      Users:null,
      index:null,
  },
  
  showIndex: function(e){
    console.log("Analysis",this.data.index)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  returnIndexListener:function(e){
    console.log("returnIndexListener is run in Analysis.js")
    // console.log(e)
    // console.log("e.detail",e.detail)
    console.log("e.detail.index",e.detail.index)
    this.setData({
      index: e.detail.index
    })
  },
})