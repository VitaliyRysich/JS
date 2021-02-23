const getNumbers = function* (numbers) {
    for (var i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}

const getNumbersgen = getNumbers([1,2,3,4,5]);

const interval = setInterval(() => {
    const next = getNumbersgen.next();
    if(next.done){
        console.log("this generator is done");
        clearInterval(interval);
    }
    else{
        const number = next.value;
        console.log(number);
    }
}, 1000);