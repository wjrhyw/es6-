
console.log('es6-promise');

// promise的用法

function test(bool){
    return new Promise((resolve,reject) => {
        if(bool){
            setTimeout(()=>{
                // resolve('成功')
            },2000)
        }else{
            setTimeout(()=>{
                // reject('失败')
            },2000)
        }
    })
}

test(false).then((val)=>{
    console.log(val);
}).then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})

// 总结promise的链式操作是按顺序执行的，不管其中某一个promise是不是比前一个promsie的异步操作短；
// 也就是说不管每一次promise执行异步时间的长短，每一次promsie都会等待上一个promise的回调执行完才会执行自己的回调

// 当上一个promise中的回调函数（不管是成功回调还是失败回调）中没有返回对应的promise时，每次then的结果会返回一个空的promise
// 让then可以一直操作下去，并且如果每次then操作时都定义失败的回调函数时，是不影响后续的promise的执行的，
// 就算是同一个方法创建的promise也不会被影响
// 除非使用cath来抓错，这样如果某一个promise执行出错，就会停止后续promise的执行

// 使用静态方法promise.resolve或者promise.reject可以创建有对应状态的promise对象

// promise.all
let pp = Promise.resolve(1);
let ppp = Promise.reject(2).catch((err)=>{
    return Promise.resolve(err)
});
let pppp = Promise.resolve(3);

Promise.all([pp,ppp,pppp]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
// 总结Promise.all是并行操作promise，只有全部返回成功状态之后，才会调用成功的回调，因为Promise.all的错误处理只能是cath
// 所以只要其中一个抛错，那么后续的promise就不会被执行，同时返回的成功数据和定义时的位置顺序一致
// 为了能够让Promise.all能够在有错误的同时能够执行完成，可以给可能出错的promise显示的调用cath处理之后，返回一个新的包含错误信息
// 的成功的promise，来完成执行

// promise.race
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('失败')
    },0)
})
let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('成功')
    },1000)
})

Promise.race([p3,p4]).then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})

// 总结，会获取最快执行完成的一个promise来执行对应的回调，不管是成功或者失败，之后的promise将不会再执行