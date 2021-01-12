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
    formName: String,
    analysisFormInfo: Object,
    // participantTime: Array,

  },

  /**
   * 组件的初始数据
   */
  data: {
      users:[]
  },

  pageLifetimes:function(){
    this.setData({
      users:Users.users
    })
    console.log(this.data.users)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    attached: function(e){
      console.log("Analysis is attached.")
      // var i,temp=[];
      
      this.setData({
        users:Users.users
      })
      console.log(this.data.users)
    }
  }
})
