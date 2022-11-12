const MyStringFunctions = require("./myStringFunctions");
const MyArrayFunctions = require("./myArrayFunctions");

// Creating object of MyStringFunctions-class
const msf = new MyStringFunctions();

console.log(msf.checkForPalindrome('king'));

const ans = msf.createAbbreviation('good morning');
console.log(ans);

const maf = new MyArrayFunctions();

const numbers = [12, 34, 23, 54]
console.log(maf.findTotal(numbers));


const num = 10;
console.log(typeof num);
/**
 * num is a variable which stores value=10
 */

// const msf = new MyStringFunctions();
/**
 * msf is a variable which stores object of MyStringFunctions-class
 */
console.log(typeof msf);    // object

/**
 * Syntax to create object of a class:
 * const objName = new ClassName();
 * 
 * In General, we say -> objName is the object of ClassName-class
 * 
 * Technically, objName is a variable which contains object of ClassName-class
 *      
 *      new ClassName();
 *          generates the object of ClassName-class
 * 
 * --> Datatype of objName is object
 * 
 */













