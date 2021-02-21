class Animal {
    constructor(name, age){
        console.log(`${name} is an animal and was created`);
        this.name = name;
        this.age = age;
    }

    static iAmStaticMethod() {
        console.log('I am a static method inside of an Animal class');
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

Animal.iAmStaticMethod();