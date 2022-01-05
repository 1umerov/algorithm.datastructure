
// Destructing assignments for neatly assigning values taken directly from an object.

const user = {name: 'John Doe', age: 34};

const name1 = user.name;
const age = user.agel
//values would be John Doe and 34

// short code from above using the destructing assignments

const {name2, age1} = user;
// here is the same answer as from code line 4


//problem
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// only change code below this line
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

//solution one
const {yesterday, today1, tomorrow1} = HIGH_TEMPERATURES;

//solution two
const {yesterday1} = HIGH_TEMPERATURES;
const {today2} = HIGH_TEMPERATURES;
const {tomorrow2} = HIGH_TEMPERATURES;





