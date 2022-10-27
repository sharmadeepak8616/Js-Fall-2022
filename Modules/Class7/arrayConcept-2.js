/**
 * Array -> can store one or more values at the same time
 * 
 * [] represents array
 * 
 */
let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Saturn'];

let mortgages = [1.1, 2.1, 4.2, 5.6, 2.45, 7.1];

let students = [
    {
        studentName: 'Deepak',
        studentLocation: 'NJ'
    },
    {
        studentName: 'Harry',
        studentLocation: 'NY'
    },
    {
        studentName: 'King',
        studentLocation: 'NJ'
    },
    {
        studentName: 'Queen',
        studentLocation: 'TX'
    }  
]

/**
 * Basic Array functions:
 * 
 * length (property)
 * []
 * toString()
 * join()
 * pop()
 * shift()
 * delete() -> X
 * push()
 * unshift()
 * splice()
 * concat()
 * includes()
 * indexOf()
 * lastIndexOf()
 * isArray()
 * fill()
 * reverse()
 * 
 */

/**
 * To find the length of array (or to find the number of values in an array)
 * property: length
 * 
 * number
 */
let numOfPlanets = planets.length;
console.log(`Number of planets in planets-array -> ${numOfPlanets}\n`);

let totalStudents = students.length;
console.log(`Number of students in students-array -> ${totalStudents}\n`);

/**
 * to access value at any index
 *      OR
 * to assign value at any index
 * 
 *  ->  we can use []
 * 
 * 
 */
let planetNameAt2 = planets[2];
console.log(`\nPlanet at index-2 -> ${planetNameAt2}`);

let favStudent = students[2];   // Datatype of value in favStudent -> object/string
console.log(favStudent);

console.log(`\nplanets -> ${planets}`);

planets[1] = 'Man Made plaNEt';     // assigning new value at index-1 (value at index-1 is going to be replaced by new value)

console.log(`\nplanets -> ${planets}`);



console.log(students);
// Assign new value at index-3 in students-array
students[3] = {
        studentName: 'Princess',
        studentLocation: 'LA'
    }

console.log(students);

console.log(`\ntoString function\n`);
/**
 * to convert an array into comma-separated string
 * function: toString()
 */
let planetIntoString = planets.toString();

console.log(planets);
console.log(planetIntoString);

console.log(typeof planets);   // typeof (object)
console.log(typeof planetIntoString);  // typeof (string)

console.log(`\njoin function\n`);
/**
 * to convert array into string with user-defined separator
 * function: join()
 * 
 * if user inputs the separator, all array values get joined using the provided separator
 * if user doesn't input the separator, all array values get joined using the default separator (,)
 */
const planetsJoin1 = planets.join('**');
console.log(`\nplanetsJoin1 -> ${planetsJoin1}`);

const planetsJoin2 = planets.join('-    -');
console.log(`\nplanetsJoin2 -> ${planetsJoin2}`);

const planetsJoin3 = planets.join(' ');
console.log(`\nplanetsJoin3 -> ${planetsJoin3}`);

const planetsJoin4 = planets.join();
console.log(`\nplanetsJoin4 -> ${planetsJoin4}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

/**
 * to remove value from array
 * 
 * function: pop()
 *      -> to remove the last value from the array
 *      -> returns the poped values (or removed value)
 * 
 * function: shift()
 *      -> to remove the first value from the array
 *      -> returns the shifted values (or removed value)
 * 
 * function: delete()
 *      -> to remove the value from any index
 *      the function will replace the value with undefined
 * 
 * 
 *      let planets = [ 'Earth', 'Man Made plaNEt', 'Venus', 'Jupiter', 'Saturn' ]
 *      planets.delete(1);
 *      let planets = [ 'Earth', undefined, 'Venus', 'Jupiter', 'Saturn' ]
 * 
 * 
 * -> change the original array
 * 
 * 
 * to remove value from array
 * pop() vs shift() vs delete() vs splice()
 * 
 */
let popedValue = planets.pop();
console.log(`\nPoped value -> ${popedValue}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

let popedValue2 = planets.pop();
console.log(`\nPoped value2 -> ${popedValue2}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

let shiftedPlanet = planets.shift();
console.log(`\nShifted value -> ${shiftedPlanet}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

// ['Man Made plaNEt', 'Venus']
// console.log(planets.shift().toUpperCase());      // MAN MADE PLANET

// mortgages = [1.1, 2.1, 4.2, 5.6, 2.45, 7.1];
// console.log(students.shift().toUpperCase());

/**
 * to add value in an array
 * 
 * function: push()
 *      -> to add a value at the end of array
 *      -> returns the new length of array
 * 
 * function: unshift()
 *      -> to add in the front of the array
 *      -> returns the new length of array
 * 
 * 
 * -> change the original array
 * 
 * to add value in array
 * push() vs unshift() vs splice() vs concat()
 */
let lenAfterPushFunction = planets.push('Mercury');
console.log(`\nTotal planets now -> ${lenAfterPushFunction}\n`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

let lenAfterPushFunction2 = planets.push('EaRtH');
console.log(`\nTotal planets now2 -> ${lenAfterPushFunction2}\n`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

let lenAfterUnshift = planets.unshift('URANUS');
console.log(`\nTotal planets now (unshift) -> ${lenAfterUnshift}\n`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

let lenAfterUnshift2 = planets.unshift('plUtO');
console.log(`\nTotal planets now (unshift2) -> ${lenAfterUnshift2}\n`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

/**
 * to add/remove values from an array
 * function: splice()
 * inputs/arguments/parameters:
 *      arg-1: from which index we want to add new values
 *      arg-2: how many values we want to remove
 *      arg-3: new values
 * 
 * returns:
 *      an array with removed values
 * 
 */
// planets -> plUtO, URANUS, Man Made plaNEt, Venus, Mercury, EaRtH

// from which index we want to add new values -> 2
// how many values to remove -> 0
// new values -> 'A', 'B', 'C', 'D'
const arrayFromSplice1 = planets.splice(2, 0, 'A', 'B', 'C', 'D');
console.log(`arrayFromSplice1 -> ${arrayFromSplice1}`);     // []
console.log(`arrayFromSplice1 length -> ${arrayFromSplice1.length}`);


// planets -> plUtO, URANUS, A, B, C, D, Man Made plaNEt, Venus, Mercury, EaRtH
console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

// planets -> plUtO, URANUS, A, B, C, D, Man Made plaNEt, Venus, Mercury, EaRtH

// from which index we want to add new values -> 4
// how many values to remove -> 2
// new values -> 
let arrayFromSplice2 = planets.splice(4,2);
console.log(`arrayFromSplice2 -> ${arrayFromSplice2}`);     // [C, D]
console.log(`arrayFromSplice2 length -> ${arrayFromSplice2.length}`);


// planets -> plUtO, URANUS, A, B, Man Made plaNEt, Venus, Mercury, EaRtH
console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);


// planets -> plUtO, URANUS, A, B, Man Made plaNEt, Venus, Mercury, EaRtH

// from which index we want to add new values -> 4
// how many values to remove -> 2
// new values -> 'Saturn', 'JupiTEr', 'LOL'
let arrayFromSplice3 = planets.splice(4,2, 'Saturn', 'JupiTEr', 'LOL');

console.log(`arrayFromSplice3 -> ${arrayFromSplice3}`);            //  Man Made plaNEt, Venus
console.log(`arrayFromSplice3 length -> ${arrayFromSplice3.length}`);


// planets -> plUtO, URANUS, A, B, Saturn, JupiTEr, LOL, Mercury, EaRtH
console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);


// planets -> plUtO,URANUS,A,B,Saturn,JupiTEr,LOL,Mercury,EaRtH
/**
 * Add 'Mars' at index-0 (unshift)
 * 
 * Add 'Venus' at index-4
 */
planets.unshift('Mars');
planets.splice(4,0,'Venus');


// planets -> Mars, plUtO, URANUS, A, Venus, B, Saturn, JupiTEr, LOL, Mercury, EaRtH
console.log(planets)
console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

// planets -> Mars,plUtO,URANUS,A,Venus,B,Saturn,JupiTEr,LOL,Mercury,EaRtH
// remove last value from the array without using pop()
// planets.pop();
planets.splice(planets.length-1, 1);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

/**
 * to concat multiple array
 * function: concat()
 * 
 * -> returns a new array with combined values
 * 
 * 
 */
let fruits = ['mango', 'strawberry', 'apple', 'banana', 'cherry'];
mortgages = [1.1, 2.1, 4.2, 5.6, 2.45, 7.1];

console.log(`\n\nplanets -> ${planets}`);
console.log(`\nfruits -> ${fruits}`);
console.log(`\nmortgages -> ${mortgages}`);

let combinedArrays = planets.concat(mortgages, fruits);

console.log(`\n\ncombinedArrays -> ${combinedArrays}`);
console.log(`\nplanets -> ${planets}`);
console.log(`\nfruits -> ${fruits}`);
console.log(`\nmortgages -> ${mortgages}`);

// using concat() to add values in an array
// planets -> Mars,plUtO,URANUS,A,Venus,B,Saturn,JupiTEr,LOL,Mercury

// Add 'EARTH', "MARS" in the end
planets = planets.concat('EARTH', 'MARS', 'Pluto', 'Mars', 'Saturn', 'Mars', 'EARTH', 'MARS', 'Saturn', 'Jupiter', 'URANUS');      // adds values in the end
console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

/**
 * to find if a given value is exactly present at any index in the array
 * function: includes()
 * 
 * if the given value is exactly present at an index in the array
 *      function returns true
 * otherwise
 *      function returns false
 * 
 * 
 */
// planets -> Mars,plUtO,URANUS,A,Venus,B,Saturn,JupiTEr,LOL,Mercury,EARTH,MARS,Pluto,Mars,Saturn,Mars,EARTH,MARS,Saturn,Jupiter,URANUS
const isIncludes_Earth = planets.includes('Earth');
console.log(`\ndoes include "Earth" -> ${isIncludes_Earth}`);

const isIncludes_Mar = planets.includes('Mar');
console.log(`\ndoes include "Mar" -> ${isIncludes_Mar}`);

const isIncludes_A_Venus = planets.includes('A, Venus');
console.log(`\ndoes include "A, Venus" -> ${isIncludes_A_Venus}`);

const isIncludes_Venus = planets.includes('Venus');
console.log(`\ndoes include "Venus" -> ${isIncludes_Venus}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

/**
 * to find the FIRST OCCURRENCE of a given value at any index in the array
 * function: indexOf()
 * 
 * 'Earth' -> -1
 * 
 * 'Mars' -> 0
 * 
 * 'Mar' -> -1
 * 
 * if the given value is exactly present at any index
 *      function returns the index of first-occurrence
 * otherwise
 *      function returns -1
 * 
 */
// planets -> Mars,plUtO,URANUS,A,Venus,B,Saturn,JupiTEr,LOL,Mercury,EARTH,MARS,Pluto,Mars,Saturn,Mars,EARTH,MARS,Saturn,Jupiter,URANUS
const indexOf_Mars = planets.indexOf('Mars');   // 0
console.log(`\n\nFirst occurrence of "Mars" is at index -> ${indexOf_Mars}`);

const indexOf_Earth = planets.indexOf('Earth'); // -1
console.log(`\nFirst occurrence of "Earth" is at index -> ${indexOf_Earth}`);

const indexOf_Mar = planets.indexOf('Mar'); // -1
console.log(`\nFirst occurrence of "Mar" is at index -> ${indexOf_Mar}`);

const indexOf_Saturn = planets.indexOf('Saturn');   // 6
console.log(`\nFirst occurrence of "Saturn" is at index -> ${indexOf_Saturn}`);

const indexOf_plUtO = planets.indexOf('plUtO'); // 1
console.log(`\nFirst occurrence of "plUtO" is at index -> ${indexOf_plUtO}`);

const indexOf_EARTH = planets.indexOf('EARTH'); // -1
console.log(`\nFirst occurrence of "EARTH" is at index -> ${indexOf_EARTH}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

// planets -> Mars,plUtO,URANUS,A,Venus,B,Saturn,JupiTEr,LOL,Mercury,EARTH,MARS,Pluto,Mars,Saturn,Mars,EARTH,MARS,Saturn,Jupiter,URANUS
/**
 * to find the LAST OCCURRENCE of a given value at any index in the array
 * function: lastIndexOf()
 * 
 * if the given value is exactly present at any index
 *      function returns the index of last-occurrence
 * otherwise
 *      function returns -1
 */
const lastIndexOf_Mars = planets.lastIndexOf('Mars');   // 15
console.log(`\n\nLast occurrence of "Mars" is at index -> ${lastIndexOf_Mars}`);

const lastIndexOf_Earth = planets.lastIndexOf('Earth'); // -1
console.log(`\nLast occurrence of "Earth" is at index -> ${lastIndexOf_Earth}`);

const lastIndexOf_Mar = planets.lastIndexOf('Mar'); // -1
console.log(`\nLast occurrence of "Mar" is at index -> ${lastIndexOf_Mar}`);

const lastIndexOf_Saturn = planets.lastIndexOf('Saturn');   // 18
console.log(`\nLast occurrence of "Saturn" is at index -> ${lastIndexOf_Saturn}`);

const lastIndexOf_plUtO = planets.lastIndexOf('plUtO'); // 1
console.log(`\nLst occurrence of "plUtO" is at index -> ${lastIndexOf_plUtO}`);

const lastIndexOf_EARTH = planets.lastIndexOf('EARTH'); // -1
console.log(`\nLast occurrence of "EARTH" is at index -> ${lastIndexOf_EARTH}`);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);



// students, mortgages, fruits, lastIndexOf_EARTH, lenAfterPushFunction

/**
 * to find if the given value is an array (or variable contains array)
 * function: isArray()
 * 
 * if the value is an array or variable contains array
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */
const isArray_students = Array.isArray(students);
console.log(`\n\nis "students" contain an array -> ${isArray_students}`);

const isArray_mortgages = Array.isArray(mortgages);
console.log(`\nis "mortgages" contain an array -> ${isArray_mortgages}`);

const isArray_fruits = Array.isArray(fruits);
console.log(`\nis "fruits" contain an array -> ${isArray_fruits}`);

const isArray_lastIndexOf_EARTH = Array.isArray(lastIndexOf_EARTH);
console.log(`\nis "lastIndexOf_EARTH" contain an array -> ${isArray_lastIndexOf_EARTH}`);

const isArray_lenAfterPushFunction = Array.isArray(lenAfterPushFunction);
console.log(`\nis "lenAfterPushFunction" contain an array -> ${isArray_lenAfterPushFunction}`);

const student = students[0];
const isArray_student = Array.isArray(student);      // false
console.log(`\nis "student" contain an array -> ${isArray_student}`);


const isArray_Value = Array.isArray([1, 2, 3]);
console.log(`\nis "value" contain an array -> ${isArray_Value}`);


console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);


/*
let students = [
    {
        studentName: 'Deepak',
        studentLocation: 'NJ'
    },
    {
        studentName: 'Harry',
        studentLocation: 'NY'
    },
    {
        studentName: 'King',
        studentLocation: 'NJ'
    },
    {
        studentName: 'Queen',
        studentLocation: 'TX'
    }  
]
*/


/**
 * to fill an array with a specific value
 * function: fill()
 *      arg-1: new value to fill/add
 *      arg-2: starting index (index from which we want to fill/add value)
 *      arg-3: end index (index upto which we should fill/add value - end Index is not included)
 * 
 * NOTE -> works like replace
 *      -> changes the original array
 * 
 * if arg-2 and arg-3 are not mentioned:
 *      -> values at all indexes in array will be replaced with new value
 * 
 * if arg-3 are not mentioned:
 *      -> all values at from starting-index in array will be replaced with new value
 */
console.log('\n\nWOWWWWWWWWWW');

console.log(planets.fill('happy', 2, 5));        // 'happy' is going to be added in index-2,3,4

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

planets.fill('Hello World');

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

planets.fill('WOW', 5);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

// Replace index-3 value with 'GOOD'
planets.fill('GOOD', 3, 4);

console.log(`\n\nplanets -> ${planets}`);
console.log(`planets length -> ${planets.length}\n\n`);

/**
 * to reverse an array
 * function: reverse()
 * 
 * function changes the original array
 * 
 */
console.log(`\n\nfruits -> ${fruits}`);
console.log(`fruits length -> ${fruits.length}\n\n`);

fruits.reverse();

console.log(`\n\nfruits -> ${fruits}`);
console.log(`fruits length -> ${fruits.length}\n\n`);


console.log([1, 2, 3].reverse());