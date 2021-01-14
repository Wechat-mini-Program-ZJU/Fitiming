// components/TimeBar/TimeBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    peopleCount: {
      type: Number,
      observer: function (newval, oldval) {
        // console.log("传过来的值", newval);
      }
    },
    formInfo: {
      type: Array,
      observer: function (newval, oldval) {
        if (this.data.formInfo.length == 24) {
          let t
          let _density = []
          // console.log(this.properties.formInfo, this.properties.peopleCount)
          for (t = 0; t < 24; t++) {
            let density_t = this.properties.formInfo[t].peopleCountTime / this.properties.peopleCount
            if (density_t == 0) _density.push('white')
            else if (density_t > 0.00 && density_t <= 0.33) _density.push('lightblue')
            else if (density_t > 0.33 && density_t <= 0.66) _density.push('lightcream')
            else if (density_t > 0.66) _density.push('deepcream')
          }
          this.setData({
            density: _density
          })
          // console.log("density after ready:", _density)
          // console.log("density after ready:", this.data.density)
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    density: ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    catchParticle: function (e) {
      this.setData({
        index: e.currentTarget.dataset.id,
        item: e.currentTarget.dataset.target
      })
      // console.log(this.data.index," is catchParticle")
      this.triggerEvent('returnIndex', {
        index: this.data.index
      })
    },
  },

  lifetimes: {
    created: function (e) {

    },
    attached: function (e) {
      var i, temp = [];
      for (i = 0; i < 24; i++) {
        temp.push({
          idx: i,
          density: 0
        })
      }
      // console.log("formInfo oringin:",this.properties.formInfo)
      this.setData({
        particle: temp,
        // _formInfo: this.properties.formInfo
      })
    },

    ready: function (e) {

    }
  },
})