// components/TimeFormCard.js
var app = getApp();
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
    },

    pageLifetimes: {
        changeCircleColor: {
            
            

        },
        show: function () {

        }
    },

    ready: function(){
        console.log(this.form)
    }
})