const person = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    toString: function(){
        this.cars.forEach(car => {
            console.log(`${this.name} has ${car}`);
        });
    }
}

person.toString();