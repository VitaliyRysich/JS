const arrayOne = ['A', 'B', 'C'];
const arrayTwo = ['D','E','F'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    console.log(name); // [A B C D E F]
});


const name = 'Vitalii';
const nameToArray = [...name];
nameToArray.forEach(function(letter) {
    console.log(letter); // [V i t a l i i]
});


const addNumbers = function(n1, n2, n3){
    return n1 + n2 + n3;
}
const numbers = [1, 3, 6];
// const addition = addNumbers(numbers[0], numbers[1], numbers[2]);
const addition = addNumbers(...numbers);
console.log(addition);
