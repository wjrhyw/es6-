'use strict'
console.log('class语法')

let Animal = class w {
    name = 'wjr';
    age;
    #love = 'hyw'
  constructor (height, width) {
    this.height = height
    this.width = width
  }
  get length () {
    Animal.dobuleLength()
    return this.height + this.width + this.#love
  }
  est () {
    console.log('实例方法中的this', this)
  }
  //  es5中静态方法就是函数的一个属性，这里也是
  static dobuleLength () {
    console.log('两倍周长', this)
  }
}
Animal.prototype.do = function () {
    console.log('跑')
}
Animal.fun = function () {
    console.log('玩')
}
let a = new Animal(10, 10)
console.log('实例是', a.length)
