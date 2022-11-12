const MyStringFunctions = require('../../Class13/Class-Concept/myStringFunctions');
const Class1 = require('../../Class17/ConstructorPkg/Class1');


const c1 = new Class1();




str1 = 'hello';
str2 = 'Hello';

console.log(str1.localeCompare(str2));


let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Saturn'];

console.log(`\n\nplanets -> ${planets}`);

let lenAfterPushFunction = planets.push('Mercury');
console.log(`\nTotal planets now -> ${lenAfterPushFunction}\n`);

console.log(`\n\nplanets -> ${planets}`);   // Earth,Mercury,Venus,Jupiter,Saturn,Mercury

// Add 4 values between Mercury and Venus (A, B, C, D)
// remove 1 value
// arg-1: 2
// arg-2: 1
// arg-3: A, B, C, D

planets.splice(2, 1, 'A', 'B', 'C', 'D');

console.log(`\n\nplanets -> ${planets}`);


console.log(planets);

console.log(typeof planets);

let xyz = planets.toString();
console.log(xyz);
console.log(typeof xyz);

// concat()
// to combine multiple string/arrays in to one

let fruits = ['mango', 'strawberry', 'apple', 'banana', 'cherry'];
let mortgages = [1.1, 2.1, 4.2, 5.6, 2.45, 7.1];

let newArray = fruits.concat(mortgages);

console.log(newArray);

console.log(newArray.length);

// add 'kiwi' , 'grapes' in fruits array

// fruits.push('kiwi');
// fruits.push('grapes');

console.log(fruits);

fruits = fruits.concat('kiwi', 'grapes');    // ['mango', 'strawberry', 'apple', 'banana', 'cherry', 'kiwi', 'grapes']


console.log(fruits);


// if (condition(s)) {
//     let a = 10;
// }

/**
 * 2. switch block
 * 
 * 1. all conditions are related to ONLY one variable or one of the variable's attribute
 * 
 * 2. all conditions are comparing equals
 * 
 * 3. we have ONLY one condition for every block
 *      OR
 *   if multiple conditions in every block, then all must be combined using OR operator
 * 
 */

/**
 * if name is happy, print 'good name'
 * if name is joy, print the name and it's length
 *                  print 'name has less than 5 letters'
 * if name is john, print 'your name is very common'
 * if name is not from above list, print 'you have unique name'
 * 
 * myName = ''
 * 
 * myName === 'happy'
 *      print good name
 * myName === 'joy'
 *      print myName
 *      print myName.length
 *      print 'name has less than 5 letters'
 * myName === 'john'
 *      print 'your name is very common'
 * otherwise
 *      print 'you have unique name'
 * 
 */
let myName = 'joy';
console.log('\nUsing if-else block\n');

if (myName.localeCompare('happy') === 0) {
    console.log('good name');
} else if (myName.localeCompare('joy') == 0) {
    console.log(myName);
    console.log(myName.length);
    console.log('name has less than 5 letters');
} else if (myName.localeCompare('john') === 0) {
    console.log('your name is very common');
} else {
    console.log('you have unique name');
}

console.log('\nUsing switch block\n');

switch (myName) {
    case 'happy':
        console.log('good name');
        break;
    case 'joy':
        console.log(myName);
        console.log(myName.length);
        console.log('name has less than 5 letters');
        break;
    case 'john':
        console.log('your name is very common');
        break;
    default:
        console.log('you have unique name');
}


/**
 * Winter -> Dec, Jan , Feb
 * 
 * Spring -> Mar, Apr, May
 * 
 * Summer -> Jun Jul, Aug
 * 
 * Fall -> Sep, Oct, Nov
 */

/**
 *  monthName === 'jan' or monthName === 'feb' or monthName === 'dec'
 *      seasonName = Winter
 *  monthName === 'mar' or monthName === 'apr' or monthName === 'may'
 *      seasonName = Spring
 *  monthName === 'jun' or monthName === 'jul' or monthName === 'aug'
 *      seasonName = Summer
 *  monthName === 'sep' or monthName === 'oct' or monthName === 'nov'
 *      seasonName = Fall
 *  monthName is equals to anything else
 *      print 'Enter valid month'
 */
let monthName = 'MAr';
let seasonName = '';

switch(monthName.toLowerCase()) {
    case 'jan':
    case 'feb':
    case 'dec':    
        seasonName = 'Winter'
        break;
    case 'mar':
    case 'apr':
    case 'may':
        seasonName = 'Spring'
        break;
    case 'jun':
    case 'jul':
    case 'aug':
        seasonName = 'Summer'
        break;        
    case 'sep':
    case 'oct':
    case 'nov':
        seasonName = 'Fall'
        break;
    default:
        console.log('Enter valid month');
}

monthName = monthName.charAt(0).toUpperCase() + monthName.substring(1).toLowerCase();

console.log(`\nSeason for month(${monthName}) -> ${seasonName}\n`);
// Season for month (Jan) -> Winter

// Class-concept demo:

const abc = new MyStringFunctions();

console.log(abc.reverseStringWordByWord('king kong'));