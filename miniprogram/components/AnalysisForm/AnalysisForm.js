// components/AnalysisForm/AnalysisForm.js
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
<<<<<<< Updated upstream

=======
    users: []
  },

  pageLifetimes: function () {
    this.setData({
      users: Users.users
    })
    console.log(this.data.users)
>>>>>>> Stashed changes
  },

  /**
   * 组件的方法列表
   */
  methods: {

<<<<<<< Updated upstream
=======
  },
  lifetimes: {
    attached: function (e) {
      console.log("AnalysisForm is attached.")
      // console.log("this.properties.analysisFormInfo.peopleCountTime: ",this.properties.analysisFormInfo.peopleCountTime)
      console.log("this.properties.formInfo: ", this.properties.formInfo)
      console.log("this.properties.analysisFormInfo:", this.properties.analysisFormInfo)
      // var i,temp=[];

      this.setData({
        users: Users.users
      })
      console.log("this.data.users", this.data.users)
    }
>>>>>>> Stashed changes
  }
})