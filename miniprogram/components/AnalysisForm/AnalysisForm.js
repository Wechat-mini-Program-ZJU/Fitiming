// components/AnalysisForm/AnalysisForm.js
var Users = require("../../data/Users.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      Users:{}
  },

  pageLifetimes:function(){
    this.setData({
      Users:Users.Users
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
