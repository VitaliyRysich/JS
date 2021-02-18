var person = { //object
    name: "Vitalii Rysich",
    age: 27,
    height: 1.81,
    hasDriverLicence: true,
    address: {
        firstLine: "123",
        postCode: "53-234",
        country: "Poland"
    }
};

console.log(JSON.stringify(person));
console.log(person.age);

console.log(Object.values(person));