
// rest parameter for function parameters and flexible functions

function howMnay(...args) {
    return "You have passed " + args.length + " arguments.";
}

console.log(howMnay(0, 1, 2));
console.log(howMnay("string", null, [1, 2, 3], {}));

// map(), filter(), reduce()

// problem
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0)
}

// solution
const suM = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));      // 6











