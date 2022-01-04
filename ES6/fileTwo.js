

// (arrays and functions) assigned to a variable using const are still mutable
// Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 6 ,7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
// printing line 7 will result an error, and line 9 will print the value as [5, 6, 45]
// [] <- is an assingment operator

// To change the "s" assigned with const, you just have to manually type the value using the it's index

const s = [5, 6, 7];
s = [1, 2, 3];
// make the numbers in "s" be [2, 3, 4]
s[0] = 2;
s[1] = 3;
s[2] = 4;
// the use the console.log to print the value
console.log(s)      // will print [2, 3, 4]