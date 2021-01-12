// miniprogram/pages/Analysis.js
var formList = require("../../data/formList");
var Users = require("../../data/Users.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Users:null,
    index:null,
    lenformList: null,
    lenUsers: null,

    formItem:{
      formId:null,
      formName:null,
      formStatus: null,
      peopleCount: null,
      quest: null,
      date: null,
      notes: null,
      participant: null,
    },
    
    analysisFormInfo:{
      timeDuration: null,
      peopleCountTime: null,
      participantTime: [],
    },

  },

  generateFormItem: function(formId){
    console.log("generateFormItem is run in Analysis.js")
    // console.log("genFormItem.formId:" ,formId)

    var _this = this
    _this.setData({
      lenformList: formList.formlist.length
    })
    // console.log("lenformList", _this.data.lenformList)

    let index
    // console.log("index before:", index)
    for( let i=0; i<_this.data.lenformList; i++){
      if(formList.formlist[i].formId == formId) {
        index = i
        break
      }
    }
    // console.log("index after:", index)

    let formName = "formItem.formName"
    let formStatus= "formItem.formStatus"
    let peopleCount= "formItem.peopleCount"
    let quest= "formItem.quest"
    let date= "formItem.date"
    let notes= "formItem.notes"
    let participant= "formItem.participant"
    
    _this.setData({
      [formName]: formList.formlist[index].formName,
      [formStatus]: formList.formlist[index].formStatus,
      [peopleCount]: formList.formlist[index].peopleCount,
      [quest]: formList.formlist[index].quest,
      [date]: formList.formlist[index].date,
      [notes]: formList.formlist[index].notes,
      [participant]: formList.formlist[index].participant,
    })
    console.log("formItem after gen:",_this.data.formItem)
  },

  generateAalysisFormInfo: function(indexTime){
    
    console.log("generateAalysisFormInfo is run in Analysis.js")
    console.log("generateAalysisFormInfo.indexTime:" ,indexTime)

    var _this = this
    console.log("analysisFormInfo before gen:",_this.data.analysisFormInfo)

    let indexUsers
    let indexParticipant
    let indexFormInfo
    let lenUsers = Users.users.length
    let lenParticipant = _this.data.formItem.participant.length
    // console.log("lenParticipant:",lenParticipant)
    let lenParticipantTime = 0
    let participantTime = []

    for ( indexUsers =0; indexUsers < lenUsers; indexUsers++){
      for( indexParticipant = 0; indexParticipant < lenParticipant; indexParticipant++){
        if( Users.users[indexUsers].userid == _this.data.formItem.participant[indexParticipant].userid){
          // console.log(Users.users[indexUsers].userid,"is mateched")
          for( indexFormInfo =0; indexFormInfo < Users.users[indexUsers].formInfo.length; indexFormInfo++){
            if( Users.users[indexUsers].formInfo[indexFormInfo].formid == _this.data.formItem.formId){
              // console.log(Users.users[indexUsers].formInfo[indexFormInfo],"is finded")
              if(Users.users[indexUsers].formInfo[indexFormInfo].availabletime[indexTime] == true) {
                lenParticipantTime++
                participantTime.push(Users.users[indexUsers].userInfo)
              }
              break
            }
          }
          break
        }
      }
    }

    console.log("participantTime:",participantTime)
    console.log("lenParticipantTime", lenParticipantTime)


    let _timeDuration= "analysisFormInfo.timeDuration"
    let _peopleCountTime= "analysisFormInfo.peopleCountTime"
    let _participantTime= "analysisFormInfo.participantTime"

    _this.setData({
      [_timeDuration]: indexTime+":00 - "+(indexTime+1)+":00",
      [_peopleCountTime]: lenParticipantTime,
      [_participantTime]: participantTime,
    })
    console.log("analysisFormInfo after gen:",_this.data.analysisFormInfo)
    
  },

  showIndex: function(e){
    console.log("Analysis",this.data.index)
  },
  returnIndexListener:function(e){
    console.log("returnIndexListener is run in Analysis.js")
    // console.log(e)
    // console.log("e.detail",e.detail)
    console.log("e.detail.index",e.detail.index)
    this.setData({
      index: e.detail.index
    })
    this.generateAalysisFormInfo(this.data.index)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // console.log("Analysis.js is onLoad")
    // console.log("options.formId:",option.formId)
    let formId = "formItem.formId"
    let formName = "formItem.formName"
    this.setData({
      // formId: option.formId,
      [formId]: option.formId,
      // [formName]: option.formName
    })
    // console.log("formId:",this.data.formId)
    // console.log("formName:",formName)
    console.log("formItem:",this.data.formItem)
    this.generateFormItem(this.data.formItem.formId)
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
  
})