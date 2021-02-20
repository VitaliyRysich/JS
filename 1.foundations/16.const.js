const name = 'Vitalii';
name = 'Kate'; //TypeError: Assignment to constant variable.


const person = {};
person['name'] = 'Vitalii';
console.log(person.name); //Vitalii

const array = [];
array.push("Value");
console.log(array[0]); //Value