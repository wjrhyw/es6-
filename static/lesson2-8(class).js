console.log('class复习')

// 私有属性私有方法:虽然是属于实例，但是不希望对象能够显示的访问到，而是只在对象内部使用，和静态方法静态属性有区别,也就是简单理解
// 私有属性和私有方法只能在类的范围中使用，但是可以通过get set的形式映射到另外一个属性来获取私有属性
// 静态属性和静态方法：不属于实例，而属于类，只能通过class.x的形式调用，里面不会用到实例的属性和方法，因为this只会指向class，
// 一般用于对整一个实例对象来进行操作
// 共有属性和共有方法：属于实例，实例可以正常使用

class test {
    // 通过字段声明定义公有属性和私有属性，私有属性只能通过字段声明定义
    age=23;
    #card=5301221999999;
    // 静态属性和静态方法都通过static关键字定义
    static add='昆明';
    static addfn(...args){
        return args
    }
    constructor(name){
        // 定义一个共有属性
        this.name=name
    }
    // 定义一个共有方法
    getNameAndAge(){
        console.log('当前实例的名字和年龄是',this.name,this.age)
    }
    // 定义get方法来映射私有属性
    get card () {
        return this.#card
    }
    // 通过私有方法来得到相应处理结果
    getString(){
        return _siyou.call(this)
    }
}

// 因为es6中没提供私有方法的定义，所以当前有两种方法来定义一个私有方法：
// 1.命名上来定义一个私有方法，_fn的形式，但是同样能被取到，不可取；
// 2.将私有方法放到class之外，
// 用第二种方式定义一个私有方法
function _siyou () {
    return `${this.name}的省份证是${this.card}`
}

let t = new test('wjr')
console.log('当前实例是',t);
t.getNameAndAge()
// console.log('当前实例的私有属性，不能在对象之外获取', t.#card)
console.log('通过映射获取私有属性', t.card)
console.log(t.getString())
// 获取静态属性和静态方法
console.log(test.add)
console.log(test.addfn(t.getString()))