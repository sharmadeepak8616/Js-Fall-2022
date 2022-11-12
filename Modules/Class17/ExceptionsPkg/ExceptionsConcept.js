const Class1 = require('./Class1');

/**
 * Exceptions is the way of code to stop execution during invalid data.
 * 
 * To handle we use, try-catch block
 * 
 *  
 * try {
 *      code which may/mayNot throw exception 
 * } catch (e) {
 *      code to execute in case exception happens in try block
 * }
 * 
 * In try block:
 *      we write code which may/mayNot throw exception
 * In catch block:
 *      we write code to execute in case exception happens in try block
 * 
 * In try block, we may have multiple lines of code
 * as soon as exception happens in thr try block; 
 *      js jumps in catch block and does NOT go back into try block
 * 
 * 
 * 
 */
try {
    const c1 = new Class1();

    c1.showSeason('jan');

    c1.showSeason('may');

    c1.showSeason('january');

    c1.showSeason('aug');

} catch (e) {
    console.log("Invalid month name provided by user");
}

console.log("After try-catch block");


