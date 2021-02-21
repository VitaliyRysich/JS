class Animal {
    constructor(name, age){
        console.log(`${name} is an animal and was created`);
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    wakeUp() {
        console.log(`${this.name} is waking up`);
    }
    logAge() {
        console.log(`${this.name} is ${this.age}`);
    }
}

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    logBreed(){
        console.log(`${this.name} is a ${this.breed}`);
    }

    logAgeFromDog() {
        super.logAge();
    }
}

class Cat extends Animal{
    constructor(name, age){
        super(name, age);
    }

    logAgeFromCat() {
        super.logAge();
    }
}

const mike = new Dog('Mike', 4, 'Bulldog');
mike.logBreed();
mike.logAgeFromDog();

const josh = new Cat('Josh', 3);
josh.logAgeFromCat();
josh.eat();
josh.sleep();