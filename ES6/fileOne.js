

// Difference between var and let
// var is declared globbaly, while, let is declared to certain block, statement, and expression

// var
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i)
}

console.log(numArray);
console.log(i);

// let
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}

/* another let example with problem and solution */ 
function checkScope() {
    var i = 'function scope';
    if (true) {
        i = 'block scope';
        console.log('Block scope i is', i)
    }
    console.log('Function scope i is', i)
}
// what was the problem?
/* the solution */
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is', i);
    }
    console.log('Function scope i is', i)
    return i;
}

