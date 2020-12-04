class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static color = 'red';
}

class Dog extends Animal {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
}
const dog = new Dog('laifu', 2, '12345');
console.log(dog);
console.log(Dog.color);
