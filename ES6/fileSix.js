
// for frexible function, ES6 has introduced default parameters for functions

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// the default parameter will pass in when the arguement is not specified (it's undefined)

// problem
const increment = (number, value) => number + value;

// solution
const increment1 = (number = 5, value = 1) => number + value;









