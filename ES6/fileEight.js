
//Spread operator
//Example
var arr  = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

//using the spread operator
const arr = [6, 89, 3, 45];
const maximus1 = Math.max(...arr);

//...arr returns an unpacked array, in other words, it spreads array.
//spread operator only works in-place, like in an arguement to a function or in an array literal.
//this code will not work: const spreaded = ...arr;

// problem
const arr1 = ['Jan', 'Fab', 'Mar', 'Apr', 'May'];
let arr2;

//solution
const arr3 = ['Jan', 'Fab', 'Mar', 'Apr', 'May'];
let arr4
arr2 = [...arr1];  

console.log(arr4);










