//function创建对象的方式
function Person(name, age) {
    //实例变量
    this.name = name;
    this.age = age;
}

//实例方法
Person.prototype.say = function () {
    console.log('person say方法');
}
const p1 = new Person('zhangsan', 18);
console.log(p1);
//静态变量
Person.info = 'person info';
console.log(Person.info);
p1.say();
//静态方法
Person.show = function () {
    console.log('person show方法');
}
Person.show();


console.log('-----------------------------------');


//class创建对象的方式
class Animal {
    constructor(name, age) {
        //实例变量
        this.name = name;
        this.age = age;
    }
    //静态变量
    static info2 = 'animal info2';  //需要用static修饰
    //实例方法
    say() {
        console.log('animal say方法');
    }
    //静态方法
    static show() {
        console.log('animal show方法');
    }
}
const dog = new Animal('doggg', 2);
console.log(dog);
//静态变量
Animal.info = 'Animal info';
console.log(Animal.info);
console.log(Animal.info2);
dog.say();
Animal.show();