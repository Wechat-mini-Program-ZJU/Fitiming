// components/AnalysisForm/AnalysisForm.js
var Users = require("../../data/Users.js")
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    formName: {
      type: String
    },
    analysisFormInfo: {
      type: Object
    },
    peopleCount: {
      type: Number
    },
    formInfo: {
      type: Array,
      observer: function (newval, oldval) {
        if (this.data.formInfo.length == 24)
        {
          // console.log(this.data.formInfo)
          // console.log(this.data.formInfo[0].participantTime)
          this.setData({
            formInfo: newval
          })
        }
      }
    },
    _index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  pageLifetimes: {
    show: function(e) {

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function (e) {

    }
  }
})