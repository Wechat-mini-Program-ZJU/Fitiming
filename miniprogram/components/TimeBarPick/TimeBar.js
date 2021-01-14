// components/TimeBar/TimeBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    formInfo: Array,
    peopleCount: Number,
    peopleCountTime: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    particle:[],
    index: null,
    item: null,
    _formInfo: null,
    density:[],
    pick:[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
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
    catchParticle: function(e){
      this.setData({
        index: e.currentTarget.dataset.id,
        item: e.currentTarget.dataset.target
      })
      console.log(this.data.index," is catchParticle")
      this.triggerEvent('returnIndex',{index: this.data.index})

      // this.setData({
      //   _formInfo: this.properties.formInfo
      // })
      // console.log("_formInfo after setData in catchParticle:",this.data._formInfo)
    },
    // onTap: function(e){
    //   console.log("onTap",e)
    //   var myEventDetail = {} // detail对象，提供给事件监听函数
    //   var myEventOption = {} // 触发事件的选项
    //   this.triggerEvent('myevent', myEventDetail, myEventOption)
    // }
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
      console.log("formInfo oringin:",this.properties.formInfo)
      this.setData({
        particle: temp,
        // _formInfo: this.properties.formInfo
      })
      // console.log(this.data.particle)
      // console.log("_formInfo after setData in attached:",this.data._formInfo)
    },
    ready: function(e){
      // this.setData({
      //   _formInfo: this.properties.formInfo
      // })
      // console.log("_formInfo after setData in ready:",this.data._formInfo)
      let t
      let _density=[]
      for( t=0; t<24; t++){
        let density_t = this.properties.formInfo[t].peopleCountTime/this.properties.peopleCount
        if( density_t == 0 ) _density.push('white')
        else if (density_t > 0.00 && density_t <= 0.33) _density.push('lightblue')
        else if (density_t > 0.33 && density_t <= 0.66) _density.push('lightcream')
        else if (density_t > 0.66) _density.push('deepcream')
        
      }
      this.setData({
        density: _density
      })
      // console.log("density after ready:",_density)
      // console.log("density after ready:",this.data.density)
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
