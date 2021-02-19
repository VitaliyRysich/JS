var map = [1, 2, 3, 4, 5].map(function(n) {
    return n * 2;
});

console.log("[].map")
console.log(map);


var filter = [1, 2, 3, 4, 5, 10, 46].filter(function(n) {
    return n % 2 == 0;
});
console.log("[].filter");
console.log(filter);


var reduce = [1, 2, 3, 4, 5].reduce(function(accumulator, current){
    return accumulator + current;
});

console.log("[].reduce");
console.log(reduce);