let myCity = 'neW yORk CIty, neW YoRk';

console.log(`\nmyCity -> ${myCity}`);
console.log(`\ntypeof myCity -> ${typeof myCity}`);

/**
 * discussed string-functions:;
 * 
 * length (property)
 * toUpperCase()
 * toLowerCase()
 */

/**
 * To find the number of characters in a string (length of string):
 * property: length
 * 
 * return type: number
 */
let myCityLength = myCity.length;
console.log(`\nmyCityLength -> ${myCityLength}`);

/**
 * Assign message : "Error: Insufficient password length" if password length is less than 8
 * otherwise message: "Good Password length"
 */
let userPwd = 'laptop12';
let message = userPwd.length < 8 ? "Error: Insufficient password length" : "Good Password length"
console.log(`\n\nmessage -> ${message}\n\n`);

/**
 * To convert String into UPPERCASE
 * function: toUpperCase()
 * 
 * return type: string
 * 
 * toUpperCase() does NOT change the value in original variable
 * 
 */
let myCityUppercase = myCity.toUpperCase();
console.log(`\nmyCity -> ${myCity}`);
console.log(`myCityUppercase -> ${myCityUppercase}\n`);

/**
 * If you WANT TO replace old value with UPPERCASE value
 */
// myCity = myCity.toUpperCase();
// console.log(`\nmyCity -> ${myCity}\n`);

/**
 * To convert String into lowercase
 * function: toLowerCase()
 * 
 * return type: string
 * 
 * toLowerCase() does NOT change the value in original variable
 * 
 */
let myCityLowercase = myCity.toLowerCase();
console.log(`\nmyCity -> ${myCity}`);
console.log(`myCityLowercase -> ${myCityLowercase}\n`);