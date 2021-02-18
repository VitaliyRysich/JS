var persons = [
    { name: "Vitalii", age: 27},
    { name: "Ola", age: 22}
];

for (var i = 0; i < persons.length; i++) {
    console.log(persons[i].name);
    console.log(persons[i].age);
    console.log("-------------");
}
//******************** */

for (var p of persons){
    console.log(JSON.stringify(p));
}
//******************** */

persons.forEach(function(p, index){
    console.log(index + " - " + JSON.stringify(p));
});

//******************** */
var number = 0;

while(number < 5){
    console.log(number);
    number += 1;
}

//******************** */

var i = 0;

do {
    i ++;
    console.log(i);
} while(i<5);