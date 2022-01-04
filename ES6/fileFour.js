
// no need to name a function when you want to pass a function as an arguement to another function
// instead inline functions is better for usage

// old and simple function
const myFunc = function() {
    const myVar = "value";
    return myVar;
}
// for this ES6 provided with syntactic sugar to not have to write anonymous functions this way, but just an arrow function
const myFunc1 = () => {
    const myVar = "value";
    return myVar;
}

// when there is no function body but just a return value, arrow function has syntax that allows you to omit the keyword return as well as the brackets surrounding the code.
const myFunc2 = () => "value";      // this code will return the sting "value"

// problem 

var magic = function() {
    return new Date()
};

// solution 

const magic = () => new Date();
