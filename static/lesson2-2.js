console.log('es5中的数组遍历方式')

// 第一种for循环
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
}

// 第二种forEach--->forEach循环不能够使用break和continue;必须将数组项全部循环完毕
arr.forEach((item) => {
//   console.log(item)
})

// 第三种every--->every默认执行第一次的循环，但是默认的返回值是false；
// 当某一次循环返回了false之后，那么之后的循环也就不会走了，可以实现break的效果；
// 在某次循环不执行任何代码的同时返回true，那么之后的循环会继续走，可以实现continue的效果；
// every的返回值是一个boolean值，只有当全部数组项都满足条件时才会返回true，所以就是当每一项循环时，都可以返回true，那么才会将数组全部循环完；
// 如果其中某一项是不能返回true的话，那么也就是false，这就代表其实该项之后的数组项，都不能继续循环了，也就返回了false
let result = arr.every((item) => {
//   if (item === 2) {
//   } else {
//     // console.log(item)
//   }
//   return true
  console.log('every迭代方法执行次数', item)
  return item % 2 === 0
})
console.log('every迭代方法返回的结果', result)
// 第四种for in本质上是循环object，但是array也是对象，所以可以使用for in，但是存在一个问题就是，给数组添加的属性同样能被循环出来；
// 注意：array的索引本质上也是一个属性名，所以虽然是0,1,2这样的形式，但是其实是字符串
// for in是可以使用break和continue的
arr.a = 8
for (let index in arr) {
//   console.log(index, arr[index])
}

// 第五种some，应该是every的相反的方式执行，也就是如果，某次循环都返回false的，那么就会继续循环，如果某次循环返回true
// 那么就会停止循环，和every刚好相反
// every和some默认都是返回false;
let res = arr.some((item) => {
  console.log('some迭代方法执行次数', item)
  return item % 2 === 0
})
console.log('some迭代方法返回的结果', res)
// 第六种filter，将数组的每一项满足要求的返回，同样会遍历整个数组;返回对于表达式为true的数组项
let newArr = arr.filter((item) => {
  return false
})
// console.log(newArr)

// 第七种map，将数组每一项进行相应的操作病返回，同样会遍历整个数组；

// 第八种for of，因为在es6之前，对于数组有迭代方法，以及for循环，同时因为数组是对象，所以也具备for in，
// 所以数组，object类型可以完成循环，但是对于es6中的新数据类型，并没有api可以完成循环，通时，因为for in对数组支持不好
// 在es6中出现了for of可以遍历数组，以及类数组对象
for (let item of arr) {
  console.log(item)
}

// 如果某个场景需要对数组进行全部遍历同时需要改变原数组，那么forEach是很好的选择；
// 如果需要判断数组项是否全部满足条件，那么every是很好的选择，因为其中一项返回false，那么也就结束了遍历
// 如果需要判断数组项是否有一项满足条件，那么some是很好的选择，因为其中一项返回true，那么就结束遍历
// 如果需要遍历全部数组项的同时，要加上break或者continue的话，那么for或者for in是好的选择
// 但是如果数组存在中途被添加属性的情况，是不能使用for in的

console.log('类数组对象（伪数组）的转换')

// arguments类数组对象的装换 es5的方法---->[].slice.call(类数组对象)--->返回数组
function test () {
  console.log('函数的arguments对象是', arguments)
  console.log('获取其中的一个参数', arguments[0])
  console.log('获取arguments的长度', arguments.length)
  let args = [].slice.call(arguments)
  console.log('es5方法转换类数组对象', args)
}
test(1, 2, 3, 4)

// 类数组：1.数据的存储使用和数组一样的索引方式：比如：{0:'a',1:'b'};
// 2.对象中存在length属性：{length:5};
// 其中必须满足第二点，也就是对象必须包含length属性，可以没有其他用索引表示的属性，那这样就是一个长度为length的空数组，
// 空数组是不能够调用es5中的数组迭代方法的
// eslint-disable-next-line standard/object-curly-even-spacing
let arr1 = [].slice.call({ 0: 'a', 1: 'b', length: 2 }) // 满足以索引形式存放属性，同时具备length属性
console.log('满足两点的类数组对象情况', arr1)
let arr2 = [].slice.call({ length: 3 })
console.log('满足一点的类数组对象情况', arr2)

// es6 将类数组转换为数组  Array.from(类数组，mapFn，this)
let obj = {
  name: 'wjr',
  age: 23
}
let arr3 = Array.from({ 0: '1', 1: '2', length: 2 }, function (item, index, arr) {
  console.log('每次循环的值', item, index)
  console.log('当前函数的this指向', this)
  return item + 1
}, obj)
console.log('es6方法装换的类数组对象', arr3)
// Array.from({},mapFn,this):具备三个参数，第一个参数是类数组对象（两点：1.以索引的形式来定义属性：{0:'1'};2.属性中有一个length属性）；
// 第二点是必须满足的，如果第一点没满足就是一个length长的空数组，并且空数组是不能使用es5的数组迭代方法的；
// 第二个参数mapFn，该函数可以有两个参数一个是item指类数组对象中的每一个属性值，index指类数组对象中当前值得索引，可以针对每一个属性值做操作；
// 然后返回给最后的转换出来的数组；
// 第三个参数，mapFn执行时的函数this执向；

console.log('创建新数组')
// es5创建新数组：new Array(length|数组项)---->如果给长度那么每一项就是空，需要循环push值，只能是for循环，数组迭代方法对数组项为空的数组
// 无效
// eslint-disable-next-line no-array-constructor
let a1 = new Array(1, 2, 3, 4, 5, 6)
console.log('构造函数创建数组给数组项', a1)
let a2 = new Array(6)
console.log('构造函数创建数组给长度', a2)
a2.forEach((item, index) => {
  item = index
})
console.log('通过循环给数组每一项赋值', a2)
// 数组项为空时，数组迭代方法无效
for (let i = 0; i < a2.length; i++) {
  a2[i] = i
}
console.log('for循环给数组每一项赋值', a2)
// es6创建新数组
let a3 = Array.of(1, 2, 3, 4, 5)
console.log('使用array.of创建的数组是', a3)
let a4 = a3.fill(8, 0, 3)
console.log('使用array.fill来替换数组项返回新数组', a4, '原数组', a3)
