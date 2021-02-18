var name = "Alex";
var names = ["Alex", "Maria", "John", {}, 1, undefined];

console.log(names + " type = " + typeof names);
console.log(names[2]);
console.log(names.length);

for (var n of names){
    console.log(n);
}

names.forEach(function(n, index){
    console.log(index + " - " + n);
});