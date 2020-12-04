//function创建对象的方式
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person('zhangsan', 18);
console.log(p1);
Person.info = 'person info';
console.log(Person.info);


console.log('-----------------------------------');


//class创建对象的方式
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static info2 = 'animal info2';  //需要用static修饰
}
const dog = new Animal('doggg', 2);
console.log(dog);
Animal.info = 'Animal info';
console.log(Animal.info);
console.log(Animal.info2);