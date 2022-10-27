/**
 * Advanced Array functions:
 * 
 * map()
 * filter()
 * 
 * 
 * 
 */

let fruits = ['apple', 'banana', 'cherry'];

/**
 * When we need to perform action on every value in the array
 * function: map()
 * 
 * does NOT change the original array
 * map returns a NEW array of same length as input-array after performing defined action
 */

/**
 * Create function to convert all values in array into uppercase
 *      and return the updated array
 */
function convertArrayInUppercase (inputArray) {
    let resultArray = [];
    for(word of inputArray) {
        resultArray.push(word.toUpperCase())
    }
    return resultArray;
}

const res = convertArrayInUppercase(fruits);
console.log(`res -> ${res}`);


let res2 = fruits.map(word => word.toUpperCase());
console.log(`res2 -> ${res2}`);


let convertStringIntoUppercase = (str) => str.toUpperCase();
let res2_2 = fruits.map(convertStringIntoUppercase);
console.log(`res2_2 -> ${res2_2}`);


/**
 * When we need to filter values from array into new-array based on condition
 * function: filter()
 */
console.log('\n filter - function \n');


// let fruits = ['apple', 'banana', 'cherry'];
// Create function to get fruits names having length 6 or more
// [banana, cherry]



const getFruitsNames = function (fruitsArray) {
    let resultArray = [];
    for (fName of fruitsArray) {
        if (fName.length >= 6) {
            resultArray.push(fName)
        }
    }
    return resultArray;
}
console.log(`Using function-expression -> ${getFruitsNames(fruits)}`);


const fruitsLengthGr6 = fruits.filter(fruit => fruit.length >= 6);
console.log(`Using filter-function ->  ${fruitsLengthGr6}`);


let checkStrGr6 = (str) => str.length >= 6;
const fruitsLengthGr6_2 = fruits.filter(checkStrGr6);
console.log(`Using filter-function (2) ->  ${fruitsLengthGr6_2}`);

let numbers = [98, 23, 12, 54, 67];
// remove all values below 50 from the numbers-array
let removeNumber = (num) => num >= 50
const removedNumber = numbers.filter(removeNumber)
numbers = removedNumber;
console.log(numbers);   // [98, 54, 67]


/**
 * To find if EVERY value of the array passes specified condition(s)
 * function: every()
 * 
 * if all values pass the specified condition(s)
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */
console.log('\n every - function \n');

// Check if all values in array is greater or equal to 50
let numbers2 = [98, 223, 122, 54, 67, 50, 49];
const isAllGrEq50 = numbers2.every(num => num >= 50);
console.log(`isAllGrEq50 -> ${isAllGrEq50}`);

let numGrEq50 = (num) => num >= 50;
const isAllGrEq50_2 = numbers2.every(numGrEq50);
console.log(`isAllGrEq50_2 -> ${isAllGrEq50_2}`);