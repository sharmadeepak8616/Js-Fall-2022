/**
 * Syntax to create function:
 * 
 * #1:
 * function funcName (input-parameters) {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we plan to return something back to user, otherwise NO return statement
 * }
 * 
 * #2: Function expression
 * let func = function (inputParameters) {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we plan to return something back to user, otherwise NO return statement
 * }
 * 
 * #3: arrow function
 * const func = (inputParameters) => {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we plan to return something back to user, otherwise NO return statement
 * }
 * 
 * 
 * 
 * 
 * funcName -> name should refer the purpose of the function (Q1-ans can be help here)
 * 
 * input-parameters
 *      if we need input from user
 *          we need to mention variables-names in the parenthesis
 *      else
 *          parenthesis will be empty
 *
 * 
 * = : assignment
 * 
 * let abc = 10;
 * let names = [];
 * 
 */

// sayHello is a function
function sayHello2() {
    console.log('Hello');
}

// sayHello is a variable, storing a function
let sayHello = function() {
    console.log('Hello');
}

let abc = 'Hello';

console.log(typeof abc);        // string

console.log(typeof sayHello);   // function

sayHello2();

sayHello();


function reverseArray(inputArray) {
    let ansArray = [];

    for (let i=0 ; i <= inputArray.length-1 ; i++) {
        ansArray[i] = input[inputArray.length-1-i];
    }
    return ansArray;
}

// function expression
const revArray = function (inputArray) {
    let ansArray = [];

    for (let i=0 ; i <= inputArray.length-1 ; i++) {
        ansArray[i] = input[inputArray.length-1-i];
    }
    return ansArray;
}

// arrow function
const revArrayArrow = (inputArray) => {
    let ansArray = [];

    for (let i=0 ; i <= inputArray.length-1 ; i++) {
        ansArray[i] = input[inputArray.length-1-i];
    }
    return ansArray;
}

let input = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];

console.log(reverseArray(input));

console.log(revArray(input));

console.log(revArrayArrow(input));

let inputArray = ['hello', 'laugh', 'live', 'peace', 'hope'];

function getLongestWordsInArray(inputArray) {
    let longestWordLength = inputArray[0].length;
    let longestWords = [];

    for (let i=1 ; i <= inputArray.length-1 ; i++) {
        let tempLength = inputArray[i].length;
        if (longestWordLength < tempLength) {
            longestWordLength = tempLength;
        }
    }

    for (let word of inputArray) {
        if (word.length === longestWordLength) {
            longestWords.push(word);
        }
    }

    return longestWords;
}

// #2 - function expression
const getLongestWordsInArray2 = function (inputArray) {
    let longestWordLength = inputArray[0].length;
    let longestWords = [];

    for (let i=1 ; i <= inputArray.length-1 ; i++) {
        let tempLength = inputArray[i].length;
        if (longestWordLength < tempLength) {
            longestWordLength = tempLength;
        }
    }

    for (let word of inputArray) {
        if (word.length === longestWordLength) {
            longestWords.push(word);
        }
    }
    return longestWords;
}

// #3 - arrow function
const getLongestWordsInArray3 = (inputArray) => {
    let longestWordLength = inputArray[0].length;
    let longestWords = [];

    for (let i=1 ; i <= inputArray.length-1 ; i++) {
        let tempLength = inputArray[i].length;
        if (longestWordLength < tempLength) {
            longestWordLength = tempLength;
        }
    }

    for (let word of inputArray) {
        if (word.length === longestWordLength) {
            longestWords.push(word);
        }
    }
    return longestWords;
}

console.log(getLongestWordsInArray(inputArray));
console.log(getLongestWordsInArray2(inputArray));
console.log(getLongestWordsInArray3(inputArray));


function addNumbers (num1, num2) {
    return num1 + num2;
}

const addNumbersArrow = (num1, num2) => {
    return num1 + num2;
}

/**
 * If function has only 1-line of code and result of the line is supposed to be returned
 * in that situation, we can skip the {} and return-keyword in the arrow function
 */
// Shortcut on above addNumbersArrow-function
const addNumbersArrow2 = (num1, num2) => num1 + num2;

const res = addNumbersArrow2(2, 3);
console.log(`\nres -> ${res}\n`);




