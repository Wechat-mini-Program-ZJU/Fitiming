// components/TimeFormQuest/TimeFormQuest.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        form: {
            type: Object,
            value: {}
        },
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        showModal(e) {
            this.setData({
              modalName: e.currentTarget.dataset.target
            })
          },
          hideModal(e) {
            this.setData({
              modalName: null,
              showQuestFlag: 0
            })
          },

    }
})
