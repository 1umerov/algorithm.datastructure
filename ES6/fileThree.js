
// fileTwo used const so that objects assinged globally cannot be reassinged or redeclared
// however, const declaration alone doesn't really protect your data from mutation.
// for that, JavaScript provides a function called "Object.freeze" to prevent data mutation

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj)

// problem
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.13
    };
    Object.freeze(MATH_CONSTANTS) // <- "Object.freeze" will prevent the MATH_CONSTANTS from mutation 
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj()





