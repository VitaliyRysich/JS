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

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

const marshal = new Animal("marshal", 4);
marshal.eat();
marshal.sleep();
marshal.wakeUp();
marshal.logAge();