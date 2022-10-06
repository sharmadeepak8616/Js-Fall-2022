
/**
 * Variable: is an entity to store the data temporarily.
 * It gets created during the program execution and get destroyed at the end of execution.
 */

/**
 * single-character
 *      gender
 *      grades
 * 
 * multi-character
 *      name
 *      cityname
 *      blood-group
 *      address
 *      phone
 * 
 * numbers
 *      whole (age, date, numberOfCars, year, ssn ...)
 *      decimal (height, weight, accountBalance, temp ...)
 * 
 * yes/no (true/false)
 *      is light on/off?
 *      are above 18?
 *      is your grade above B+?
 *      is credit score greater than x?
 *      marital status?
 * 
 * Datatypes in programming:
 * 1. char - to store a single character value/data 
 *      the value/data must be enclosed in <single-quotes> 
 *      'u'
 *      '1'
 * 2. String - to store a multi character value/data
 *      the value/data must be enclosed in <double-quotes> 
 *      "new york CIty"
 *      -> JS consider char/String as String-Datatype
 * 
 * 3. byte, short, int, long - to store a number (whole) value/data
 *      12
 *      13
 *      180
 *      1000
 * 4. float, double - to store a number (decimal) value/data
 *      12.1
 *      100.0
 *      10000.32
 *      60.2
 *      -> JS considers any digit (whole/decimal) as Number-Datatype
 * 
 * 5. boolean-Datatype - to store true/false value/data.
 * 
 * 6. JS specific datatypes:
 *      null
 *          -> to defines nothing
 *          Datatype of null-value is object
 * 
 *      undefined
 *          -> to defines undefined
 *          Datatype of undefined-value is undefined
 * 
 */
/**
 * Variables:
 * Depending upon the datatype-of-value, we need type of variable to store the value
 * 
 * In Java, if we want to store int-value, we need int-variable
 * 
 * In Js, if we want to store int-value, we need a variable
 * 
 */
/**
 * Syntax to create a variable in JS:
 * 
 * let varName = myValue;
 * 
 * Creating a variable (varName) and assigning myValue to the variable
 */
// create variable to store my age
let myAge;
// what is the value in the myAge? - undefined

// To print the value inside any variable
console.log(myAge);             // undefined
console.log(typeof myAge);      // undefined

// To put null in the myAge variable
myAge = null;

// To print the value inside any variable
console.log(myAge);             // null
console.log(typeof myAge);      // object

// To put 20 in the myAge variable
myAge = 20;

// To print the value inside any variable
console.log(myAge);             // 20
console.log(typeof myAge);      // Number

// To put 'Deepak' in the myAge variable
myAge = 'Deepak';

// To print the value inside any variable
console.log(myAge);             // 'Deepak'
console.log(typeof myAge);      // String


// var myName = 'kaola';
// console.log(myName);

/**
 * Operator - typeof
 * 
 *      helps us to check the type of value stored in the variable
 */

/**
 * Keywords to create a variable:
 *      let
 *      var
 *      const
 * 
 * let -> does NOT allow to create variables using same-name within the same scope.
 * var -> does allow to create variables using same-name within the same scope.
 * const -> to create a constant variable.
 * 
 * 
 * --> let is better
 * 
 * let myAge = 10;
 *      OR
 * var myAge = 10;
 * 
 */

// var myName = 'lilli';
// console.log(myName);

let yourAge = 20;

/**
 * Good practices to provide names:
 * 1. variables:
 *      -> name should relate to the stored value
 *      -> cannot use js-keywords (let, var, typeof, console, log etc)
 *      -> cannot use spaces
 *      -> starts with lowercase
 *      -> never start with digit or special character
 *      -> if name has more than one word, use camelCaseFormat
 *      eg:
 *          my age -> myAge
 *          my dog age -> myDogAge
 * 
 * 2. Package/Files:
 *      -> name should relate to the stored content in File/Package
 *      -> cannot use js-keywords (let, var, typeof, console, log etc)
 *      -> cannot use spaces
 *      -> starts with Uppercase
 *      -> never start with digit or special character
 *      -> if name has more than one word, use CamelCaseFormat
 *      eg:
 *          class 1 package -> Class1Package
 *          class 1 package -> Class1_Package
 * 
 */

let userName = 'Deepak Sharma';
let userAge = 20;

// console.log(userName);
// console.log(userAge);

// Print like: My name is Deepak Sharma, and I am 20 years old.

console.log('My name is ' + userName + ', and I am ' + userAge + ' years old.');

/*

'My name is ' + userName + ', and I am '   +  userAge   +  ' years old.'

My name is Deepak Sharma, and I am 20 years old.

*/

console.log(`My name is ${userName}, and I am ${userAge} years old.`);
/*

    'My name is Deepak Sharma, and I am 20 years old.'

    console.log(`My name is ${userName}, and I am ${userAge} years old.`);

*/

/**
 * const - variable
 * 
 * Variable in which we can assign value ONLY once.
 * 
 */

const mySsn = 1212;
console.log(mySsn);     // 1212

// mySsn = 1111;
// console.log(mySsn);

yourAge = mySsn;
console.log(yourAge);   // 1212
