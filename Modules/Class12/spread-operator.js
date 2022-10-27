/**
 * Spread operator (...)
 *      
 *      to clone or merge arrays or objects
 */

let planets = ['Earth', 'Mercury', 'Saturn', 'Jupiter', 'Pluto', 'Mars'];
let fruits = ['apple', 'banana', 'cherry'];
let states = ['ny', 'tx' , 'ca', 'nc'];

// Creating a new array with all values from states-arrays and fruits-array
let combinedArray1 = [...states, ...fruits];    // ['ny', 'tx' , 'ca', 'nc', 'apple', 'banana', 'cherry']

console.log(`\ncombinedArray1 -> ${combinedArray1}`);
console.log(`combinedArray1 length -> ${combinedArray1.length}`);

let combinedArray2 = [...states, 'hello', 'laugh', ...fruits];

console.log(`\ncombinedArray2 -> ${combinedArray2}`);
console.log(`combinedArray2 length -> ${combinedArray2.length}`);

// get all values from states-array into myArray
let myArray = [...states];      // all values from states-array will be in myArray-array.
console.log(`\nmyArray -> ${myArray}`);
console.log(`myArray length -> ${myArray.length}`);

let myArray1 = states; 
console.log(`\nmyArray1 -> ${myArray1}`);
console.log(`myArray1 length -> ${myArray1.length}`);

/**
 * Spread operator with Objects
 */
console.log('\nSpread operator with Objects\n');

let myObj = {
    myName : 'ABC',
    5 : 'digit prop',
    age2 : 20,
    true : 22,
    11 : false,
    'my key' : 100
}

// Cloning attributes-values using Spread operator
let obj2 = {
    ...myObj
}
console.log('\nmyObj');
console.log(myObj);

console.log('\nobj2');
console.log(obj2);

let student2 = {
    name : 'John DOe',
    state : 'NY',
    age : 22,
    gender : 'M',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing','CS basics']
}


let obj3 = {
    ...student2,
    ...myObj,
    newObject : true,
    classes : 'Yes'
}

console.log('\nobj3');
console.log(obj3);





