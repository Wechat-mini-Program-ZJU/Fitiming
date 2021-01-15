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

  generateFormItem: function () {},

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
    // console.log(this.data)
    // console.log(this.data.formItem.name, this.data.formItem.owner)
    db.collection('form').where({
      name: this.data.formItem.name,
      owner: this.data.formItem.owner
    }).get({
      // 在数据库中查找问卷
      success: res => {
        console.log("res: ", res)
        // 对问卷的所有填写结果进行统计
        res.data[0].result.forEach(e => {
          // console.log(e)
          // 查找参与者信息
          db.collection('user').where({
            username: e.participant
          }).get({
            success: res => {
              // console.log("res.data:", res.data)
              // 统计
              for (t = 0; t < 24; t++) {
                if (e.availabletime[t] == true) {
                  peopleCountTime[t]++
                  // console.log(peopleCountTime)
                  participantTime[t].push({
                    username: e.participant,
                    gender: res.data[0].gender,
                    avatar: res.data[0].avatar
                  })
                }
              }

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
              // console.log("formInfo after setData:", _this.data.formInfo) //打印setData后的formInfo
            }
          })
        })
      }
    })
    // console.log("part: ", peopleCountTime, participantTime)
  },

  generateAalysisFormInfo: function (indexTime) {
    let lenParticipantTime = 0
    let participantTime = []
    const db = wx.cloud.database()
    db.collection('form').where({
      name: this.data.formItem.name,
      owner: this.data.formItem.owner
    }).get({
      success: res => {
        res.data[0].result.forEach(e => {
          if (e.availabletime[indexTime] == true) {
            lenParticipantTime++
            db.collection('user').where({
              username: e.participant
            }).get({
              success: res => {
                participantTime.push({
                  nickName: e.participant,
                  avatarUrl: res.data[0].avatar,
                  gender: res.data[0].gender
                })
              }
            })
          }
        })
        this.setData({
          analysisFormInfo: {
            timeDuration: indexTime + ":00 - " + (indexTime + 1) + ":00",
            peopleCountTime: lenParticipantTime,
            participantTime: participantTime
          }
        })
        // console.log("analysisFormInfo after gen:", this.data.analysisFormInfo)
      }
    })
  },

  showIndex: function (e) {
    console.log("Analysis", this.data.index)
  },

  returnIndexListener: function (e) {
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
    this.onShow()
  }
})