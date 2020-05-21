console.log('proxy--代理')
// 代理简单来说，通过代理能够改变原始js访问数据的行为，比如遍历，读写等操作；
// 也就是说，通过代理，能够在操作原始数据之间加一些拦截，来做到想做的事情

// 通过代理来改变读操作的行为
let objGet = {
  name: 'wjr',
  age: 23
}

let pGet = new Proxy(objGet, {
  get (target, key) {
    if (Reflect.has(target, key)) {
      return target[key]
    } else {
      return '读取的属性不存在'
    }
  }
})

console.log('代理的对象', pGet)
console.log('读取其中的属性', pGet.age)
console.log('读取其中不存在的属性，如果按照原始操作会返回undefined，但是通过代理，可以改变这种行为', pGet.love)
pGet.love = 'hyw'
console.log('当前没有限制写操作，所以会被赋值成功', pGet.love)

// 限制读操作的基础上，来限制写操作，因为某些情况下，一些属性是不可以被改变的
let objGetSet = {
  name: 'wjr',
  age: 23,
  sex: 'man'
}

// es5实现：将sex变更为不可写的属性
// Object.defineProperty(objGetSet,'sex',{
//     writable:false
// })

// es6实现
objGetSet.sex = 'woman'
console.log(objGetSet.sex);

let pGetSet = new Proxy(objGetSet, {
  get (target, key) {
    return Reflect.has(target, key) ? target[key] : '没有这个属性'
  },
  set (target, key, value) {
    if ( key == 'sex' ) {
        return '当前属性不可被修改'
    }else{
        if(key==='name'){
            if(value==='hyw'){
                throw err('错误');
                
            }else{
                return '名字不正确'
            }
        }else{
            target[age]=value
        }
    }
  }
})
pGetSet.name='www'
console.log(pGetSet.name)

// 实现一个实例，存在一个特定id，并且不能不修改
// let o = {
//     id:Math.random()
// }
// let p = new Proxy(o,{})
// console.log('原始Id',p.id)
// p.id=1
// console.log('修改后id',p.id)

// class test {
//     constructor(){
//         this.id=Math.random()
//     }
// }
// let p = new test();
// let proxy = new Proxy(p,{
//     set (target,key,value) {
//         return false
//     }
// })
// console.log('原始id',proxy.id)
// proxy.id=1
// console.log('修改后id',proxy.id)
// 以上处理，过于繁琐
// 可以通过多类的get和set来限制一个属性的读写操作
// class test {
//     constructor(){
//         this.proxy = new Proxy({
//             id:Math.random()
//         },{})
//     }
//     get id () {
//         return this.proxy.id
//     }
// }

// let t = new test()
// console.log('原始的id',t.id);
// t.id=1;
// console.log('修改后id',t.id);


// proxy拓展构造函数
function extends (sup,base) {
  let describe=Reflect.getOwnPropertyDescriptor(base.prototye,'constructor')
  console.log('base的原型上的constructor的描述符',describe);
  base.prototye = Object.create(sup.prototye);
  let handler = {
    construct(target,arges){
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  let proxy = new Proxy(base,handler);
  describe.value=proxy;
  Reflect.defineProperty(base.prototye,'constructor',describe);
  return proxy
}