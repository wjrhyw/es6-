console.log('es5,es6字符串&数组方法')
// string
let str = 'wjr ai hyw'

// 是否存在某个字符
// es5:indexOf:存在返回下标，不存在返回-1
console.log('indexxOf', str.indexOf('a'))
console.log('indexxOf', str.indexOf('!'))
// es5:lastIndexOf:存在返回下标，不存在返回-1,反方向找
console.log('lastIndexOf', str.lastIndexOf('w', 8))
// es5:search:存在反下标,不存在反-1
console.log('search', str.search('h'))
console.log('search', str.search('!'))
// es6:includes：存在返回true,不存在反false
console.log('includes', str.includes('w'))
console.log('includes', str.includes('!'))
// es6:startsWith('',start),endWith('',start)判断是否已某个字符开头或者结尾，返回boolean，

// 截取字符串
// es5:slice(start,end)==>返回截取结果字符串，不改变原字符
console.log('slice', str.slice(0, 6), '原字符', str)
// es5:substring(start,end)==>和slice一样，只是不能传负值
console.log('substring', str.substring(0, 6), '原字符', str)
// es5:substr(start,length)==>起始位置，截取长度
console.log('substr', str.substr(0, 6), '原字符', str)

// 连接多个字符（和连接多个数组一样）
// es5: concat('x','y',...)==>将多个字符串连接，返回新的字符串
console.log('concat', str.concat(' yi zhi', 'hen ai', ' ta'), '原字符', str)

// 去除字符串两端的空格
// es5 trim:改变原字符串
let str1 = '   wo ai hyw     '
console.log('trim', str1.trim(), '原字符', str)

// 将字符串截取为数组
// es5 split()=>参数是指定通过什么来截取当前字符串,字符串两边的空格也会算为一项
console.log('split', str.split(''))
let str3 = '  wo ai hyw  '
console.log('split', str3.split(' '))

// 替换字符串中的字符
// es5 replace('被替换字符','替换字符')=>可以传入正则,不改变原字符
console.log('replcae', str.replace('wjr', 'wo'), '原字符', str)

// 重复字符串
// es6 repeat(n)
console.log('repeat', str.repeat(3))

// 填充字符串
// es6 pndStart(length,'') pndEnd(length,'')

// array
let arr = [1, 2, 3, 4, 5]
// 数组中是否存在某一项
// es5:indexOf,lastIndexOf
console.log('index', arr.indexOf(2, 0))
// es6:includes

// 填充数组,也可以用来初始化数组fill
// es6:fill(x,start,end)=>x表示填充值
console.log('fill', arr.fill(6))
// 初始化一个数组
let arr1 = new Array(6)
console.log('fill初始化数组项', arr1.fill(6))

// 类数组转为数组
// es5:[].slice.call(likeArray)
let likeArray = { length: 6 }
console.log('es5类数组转数组', [].slice.call(likeArray))
// es6:from(likeArray,mapFn,this),也可以初始化数组，和fill一样
console.log('es6类数组转数组', Array.from(likeArray, function (item, index) {
  return index + 1
}))

// 创建数组
// es6:Array.of()
console.log('of', Array.of(1, 2, 3, 'wjr', 'ai', 'hyw'))
