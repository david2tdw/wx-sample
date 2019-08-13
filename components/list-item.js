// components/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData: {},
    numberA: '',
    numberB: '',
    sum: ''
  },
  attached: function () {
    this.setData({
      numberA: 1,
      numberB: 2
    })
  },
  /**
   * 组件的方法列表
   * Component 构造器的主要区别是：方法需要放在 methods: {} 里面。
   */
  
  methods: {
    customerMethod: function () {
      
    },
    onTap: function () {
      console.log('list-item onTap')
      let myEventDetail = {
        a: 5
      }
      let myEventOption = {}
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  },
  observers: {
    'numberA, numberB': function (numberA1, numberB) {
      this.setData({
        sum: numberA1 + numberB
      })
    }
  }
})
