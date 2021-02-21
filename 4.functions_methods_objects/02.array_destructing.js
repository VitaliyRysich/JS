const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, , joe, ...restOfNames] = names;

console.log(`${anna} ${joe}`); // Anna Joe from names array

console.log(restOfNames); // 'Mark', 'Matt'