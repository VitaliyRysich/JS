const address = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA44'
};

const name = {
    firstName: 'Andy',
    lastName: 'Jones' 
};

// const person = {
//     city: address.city,
//     country: address.country
// };

const person = {... address, ...name};
console.log(JSON.stringify(person));