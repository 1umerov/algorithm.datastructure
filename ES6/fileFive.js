
// regular function with parameters

const doubler = (item) => item * 2;
doubler(4);     // result 8

// single parameter
const doubler1 = item1 => item * 2;

// more than one paremeter
const multiplier = (item, multi) => item * multi;
multiplier(4, 2)

// problem
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1,2], [3, 4, 5]));

// solution
const myConcat = (arr1, arr2) => arr1.concat(arr2);

