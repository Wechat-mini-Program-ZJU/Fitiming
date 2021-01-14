const util = require("../../utils/util");
var app = getApp()

Page({
    data: {
        date: null,
        today: null,
        formName: null,
        formNotes: null,
        form: null,
        old_name: null
    },

    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },

    save: function (e) {
        const db = wx.cloud.database()
        // console.log(this.data.formName, this.data.form.owner)
        db.collection('form').where({
            name: this.data.old_name,
            owner: this.data.form.owner
        }).update({
            data: {
                name: this.data.formName,
                date: this.data.date,
                note: this.data.formNotes,
            }
        })
        wx.switchTab({
            url: '../MyTiming/MyTiming',
        })
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
        // console.log(options)
        var form = JSON.parse(options.form)
        this.setData({
            today: tmp.getFullYear() + "-" + (tmp.getMonth() + 1 < 10 ? "0" : "") + (tmp.getMonth() + 1) + "-" + tmp.getDate(),
            date: tmp.getFullYear() + "-" + (tmp.getMonth() + 1 < 10 ? "0" : "") + (tmp.getMonth() + 1) + "-" + tmp.getDate(),
            formName: form.name,
            formNotes: form.note,
            form: form,
            old_name: form.name
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