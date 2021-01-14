// miniprogram/pages/Analysis.js
Page({
  data: {
    Users: null,
    index: null,
    lenUsers: null,

    formItem: null,

    analysisFormInfo: {
      timeDuration: null,
      peopleCountTime: null,
      participantTime: [],
    },

    formInfo: [],
  },

  generateFormItem: function () {
  },

  generateFormInfo: function (formId) {
    var _this = this
    //变量定义
    let i, j, k, t //循环下标
    let peopleCountTime = [] //临时存储各时间段人数
    let participantTime = [] //临时存储各时间段参与者下标
    for (t = 0; t < 24; t++) { //t作为时间点（段）的Index
      _this.data.formInfo.push({
        timeDuration: t + ":00 - " + (t + 1) + ":00",
        peopleCountTime: 0,
        participantTime: [],
      })
      peopleCountTime.push(0)
      participantTime.push([])
    }

    const db = wx.cloud.database()
    console.log(this.data)
    console.log(this.data.formItem.name, this.data.formItem.owner)
    db.collection('form').where({
      name: this.data.formItem.name,
      owner: this.data.formItem.owner
    }).get({
      success: res => {
        console.log("res.data", res.data)
      }
    })
    for (i = 0; i < Users.users.length; i++) { //i作为User.users的Index
      for (j = 0; j < _this.data.formItem.participant.length; j++) { //j作为data.formItem.participant的Index
        if (_this.data.formItem.participant[j].userid == Users.users[i].userid) { //如果users和participant中的userid成功匹配，说明该用户确实参与这一表单，则查验users中的表单信息
          for (k = 0; k < Users.users[i].formInfo.length; k++) { //k作为User.users[i].formInfo的Index
            if (Users.users[i].formInfo[k].formid == _this.data.formItem.formId) { //如果users[i].formInfo和formItem中的formid成功匹配,说明找到用户对应的表单，可以进行数据填入
              for (t = 0; t < 24; t++) { //t作为时间点（段）的Index
                if (Users.users[i].formInfo[k].availabletime[t] == true) { //如果这一用户该表单t时间点有空
                  peopleCountTime[t]++
                  participantTime[t].push(i)
                }
              }
              break //跳出寻找users[i].formInfo中对应formid的循环
            }
          }
          break //跳出寻找participant中对应userid的循环
        }
      }
    }
    console.log("peopleCountTime after traverse:", peopleCountTime)//打印初始化后的peopleCountTime
    console.log("participantTime after traverse:", participantTime)//打印初始化后的formInfoparticipantTime

    for (t = 0; t < 24; t++) { //t作为时间点（段）的Index
      // let _timeDuration= 'formInfo['+t+'].timeDuration'
      let _peopleCountTime = 'formInfo[' + t + '].peopleCountTime'
      let _participantTime = 'formInfo[' + t + '].participantTime'
      _this.setData({
        // [_timeDuration]: indexTime+":00 - "+(indexTime+1)+":00",
        [_peopleCountTime]: peopleCountTime[t],
        [_participantTime]: participantTime[t],
      })
    }
    console.log("formInfo after setData:", _this.data.formInfo) //打印setData后的formInfo

  },

  generateAalysisFormInfo: function (indexTime) {

    // console.log("generateAalysisFormInfo is run in Analysis.js")
    // console.log("generateAalysisFormInfo.indexTime:" ,indexTime)

    var _this = this
    // console.log("analysisFormInfo before gen:",_this.data.analysisFormInfo)

    let indexUsers
    let indexParticipant
    let indexFormInfo
    let lenUsers = Users.users.length
    let lenParticipant = _this.data.formItem.participant.length
    // console.log("lenParticipant:",lenParticipant)
    let lenParticipantTime = 0
    let participantTime = []

    for (indexUsers = 0; indexUsers < lenUsers; indexUsers++) {
      for (indexParticipant = 0; indexParticipant < lenParticipant; indexParticipant++) {
        if (Users.users[indexUsers].userid == _this.data.formItem.participant[indexParticipant].userid) {
          // console.log(Users.users[indexUsers].userid,"is mateched")
          for (indexFormInfo = 0; indexFormInfo < Users.users[indexUsers].formInfo.length; indexFormInfo++) {
            if (Users.users[indexUsers].formInfo[indexFormInfo].formid == _this.data.formItem.formId) {
              // console.log(Users.users[indexUsers].formInfo[indexFormInfo],"is finded")
              if (Users.users[indexUsers].formInfo[indexFormInfo].availabletime[indexTime] == true) {
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

    // console.log("participantTime:",participantTime)
    // console.log("lenParticipantTime", lenParticipantTime)


    let _timeDuration = "analysisFormInfo.timeDuration"
    let _peopleCountTime = "analysisFormInfo.peopleCountTime"
    let _participantTime = "analysisFormInfo.participantTime"

    _this.setData({
      [_timeDuration]: indexTime + ":00 - " + (indexTime + 1) + ":00",
      [_peopleCountTime]: lenParticipantTime,
      [_participantTime]: participantTime,
    })
    // console.log("analysisFormInfo after gen:",_this.data.analysisFormInfo)

  },

  showIndex: function (e) {
    console.log("Analysis",this.data.index)
  },

  returnIndexListener: function (e) {
    // console.log("e.detail",e.detail)
    // console.log("e.detail.index",e.detail.index)
    this.setData({
      index: e.detail.index
    })
    this.onShow()
    this.generateAalysisFormInfo(this.data.index)
  },

  onLoad: function (option) {
    this.setData({
      formItem: JSON.parse(option.form),
    })
    this.generateFormItem()
    this.generateFormInfo()
  }
})