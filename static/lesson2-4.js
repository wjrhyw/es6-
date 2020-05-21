console.log("set&map数据结构");
// set数据结构：本质上来说键名和键值是一样的，并且其实set中并没有键名，而是一种和数组一样的数据结构，只是类似于对象
// eg:[1,2,3]==>array {1,2,3}==>set

// 创建一个set实例,如果传递参数的话，需要是一个可以遍历的对象
let s = new Set([1, 2, 3, 4]);
console.log("创建的set实例", s);
// 因为set本质上并没有键名，所以像set中添加数据不能使用set，只能使用add
s.add("wjr");
console.log("增加一个数据给set", s);
// 因为set不存在键名，同时也并不是根据索引来存储的，所以并没有修改的api，一般要修改需要先删除，再添加，也就代表不能再对应位置修改
s.delete(1);
s.add("hyw");
console.log("修改之后的set实例", s);
// 删除一个数据：delete
s.delete(2);
console.log("删除之后的set实例", s);
// 清空一个set实例中的数据
s.clear();
console.log("清空之后的set实例", s);
// set对象和array一样能够使用keys,values,entries来完成对应的for of遍历
s.add("wjr").add("ai").add("hyw").add("best").add(520);
// keys()，返回键名组成的可遍历的对象
let keys = s.keys();
for (let key of keys) {
  console.log("set实例的键名(和value一致)", key);
}
// values(),返回键值组成的可遍历的对象
let values = s.values();
console.log("values是", values);
for (let value of values) {
  console.log("set实例的键值", value);
}
// entries(),返回键值对组成的可遍历的对象
let entries = s.entries();
console.log("set实例键值对组成的数组", entries);
for (let item of entries) {
  console.log(item);
}

// 对比数组
let arr = [1, 2, 3];
let keysArr = arr.keys();
console.log('数组的keys返回结果', keysArr);
// 数组的keys方法，和set的一致，返回一个可遍历的对象
for (let key of keysArr) {
  console.log('数组的keys', key);
}

let valuesArr = arr.values();
console.log('数组的values返回的结果', valuesArr);
for (let value of valuesArr) {
  console.log('数组的keys', value);
}

let entriesArr = arr.entries();
console.log("数组的values返回的结果", entriesArr);
for (let [k, v] of entriesArr) {
  console.log("数组的keys", k, v);
}


// map数据结构：键值对组成的结构，和数组类似，但是map数据的键名可以是任意类型，而不是和obj一样只能是字符串
// 创建一个map数据结构实例，和set一样要传入一个可遍历的对象，但是需要注意的是，因为包含键名，所以不能直视单项的数组
let m = new Map([['name','wjr'],['do','ai'],['love','hyw']])
console.log('创建的map实例', m);
// 因为包含键名，所以可以通过get来获得对应键名的值，而set因为不存在键名，所以没有get方法，只能通过遍历来获取值
console.log('获取map中的一个值', m.get('name'));
// 因为包含真的键名，所以可以使用set方法来设置新的数据项，或者更改原有的数据项
console.log('设置新的数据项',m.set('add','sh'), m)
// 修改数据项
console.log('修改一项数据项',m.set('add','sz'))
// 删除和清除和set数据结构一样，只不过map要传入键名
console.log(m.delete('add'), m)
console.log(m.clear(), m)
// keys,values,entries和数组和set是一样的，对应返回了键名组成的可遍历对象，键值组成的可遍历对象，以及键值对组成的可遍历对象

