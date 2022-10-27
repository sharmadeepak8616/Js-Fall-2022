/**
 * alarm clock
 * 
 *      purpose -> to ring at certain time
 *      input from user? -> set time , snoozeRounds
 *      return -> sound
 * 
 * 
 * bill payment system (billPayment)
 *      input from user? -> card, amountToPay, billingAddr
 * 
 *      output -> confirmation number
 */
/**
 * Before you create a function, ask below questions:
 * 1. what is the purpose of the function?
 *      this helps in function name
 * 
 * 2. Do I need any input from user?
 *      If Yes,
 *          a) How many inputs I need from user?
 * 
 * 3. Should I return any value back to user at the end of operation/function?
 *      If Yes,
 *          what is the datatype of returned value
 *          make sure to write return statement at the end of the function
 *      If No,
 *          NO return statement at the end of the function
 * 
 * Good Practice -> return the result (if possible)
 * 
 * 
 * 
 * 
 * Syntax to create function:
 * 
 * #1:
 * function funcName (input-parameters) {
 *      code inside
 *      the function
 *      return statement    --> ONLY IF we plan to return something back to user, otherwise NO return statement
 * }
 * 
 * funcName -> name should refer the purpose of the function (Q1-ans can be help here)
 * 
 * input-parameters
 *      if we need input from user
 *          we need to mention variables-names in the parenthesis
 *      else
 *          parenthesis will be empty
 * 
 */



/**
 * Create a function to reverse a string (letter by letter)     // Learn -> nraeL
 * 
 * Purpose -> To reverse a string
 * name -> stringReverse (reverseString, revString)
 * 
 * Do I need any input from user?
 *      -> string (which user wants to reverse)
 *  
 * Should I return any value back to user at the end of operation/function?
 *      -> return the reversed String (datatype -> string)
 * 
 */
function stringReverse (userInputString) {
    let reversedString = userInputString.split('').reverse().join('');
    return reversedString;  // OLLeH
}

/**
 * 'hello'
 * userInputString = hello
 * userInputString -> split('') -> ['h', 'e', 'l', 'l', 'o'] -> reverse() -> ['o','l', 'l', 'e', 'h'] -> join('') -> olleh
 * 
 */

const revString = stringReverse('HeLLO');
console.log(revString);

console.log(stringReverse('Good'));

let input = 'King kong';
const revString2 = stringReverse(input);
console.log(revString2);

/**
 * Create a function to add 2-numbers
 * 
 * 1. what is the purpose of the function?
 *      add 2 numbers (addNumbers)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? (2)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> yes
 *      If Yes,
 *          what is the datatype of returned value -> number
 */

function addNumbers (num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(addNumbers(5, -10));

const num1 = 20, num2 = 30;
const result = addNumbers(num1, num2);
console.log(`result -> ${result}\n`);



