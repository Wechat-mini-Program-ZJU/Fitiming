// components/TimePoint/TimePoint.js
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
    point:[],

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes:{
    // created: function(e){
    //   console.log("TimeBar is created.")
    attached: function(e){
      console.log("TimePoint is attached.")
      var i,temp=[];
      for( i=0; i<=24; i++){
        temp.push({
          idx: i,
          density: 0
        })
      }
      this.setData({
        point: temp
      })
      console.log(this.data.point)
    }
  },
})
