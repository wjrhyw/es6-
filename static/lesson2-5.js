console.log('es6对象拷贝')

let obj = {
    name: 'wjr',
    age: 23,
    do: {
        ball:'backball'
    }
}

let res = {}

Object.assign(res,obj)

res.name='hyw';
res.do.ball='football'
console.log(res, obj)
// 总结：objecy.assgin只能复制一层，也就是说如果顶层的某一个属性下面还有更深的层级的话，只是地址的复制，
// 会互相影响，但是如果顶层的属性只是一般类型，那么是不会互相影响的