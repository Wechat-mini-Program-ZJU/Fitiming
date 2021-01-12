// components/TimeBar/TimeBar.js
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
    particle:[],
    // array: [{
    //   message: 'foo',
    // }, {
    //   message: 'bar'
    // }]
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
      console.log("TimeBar is attached.")
      var i,temp=[];
      for( i=0; i<24; i++){
        temp.push({
          idx: i,
          density: 0
        })
      }
      this.setData({
        particle: temp
      })
      // console.log(this.data.particle)
    }
  },

  pageLifetimes:{
    // show: function(e){
    //   console.log("TimeBar of page shows.")
    //   var i;
    //   for( i=0; i<24; i++){
    //     this.data.particle.push({
    //       idx: i,
    //       density: 0
    //     })
    //   }
    //   console.log(this.data.particle)
    // }
  }
})
