
const pricePropName = "PRICE";

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        [pricePropName.toLowerCase()] : price
    }
}

const calc = calculator('Vitalii', 50.40);

console.log(calc.name);
console.log(calc.add(10, 20));
console.log(calc.price);