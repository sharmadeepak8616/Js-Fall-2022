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
 * Java VS Javascript:
 *      In js:
 *          we can have only ONE catch block with a try block
 *      In java:
 *          we can have only multiple-catch blocks with a try block
 * 
 * try {
 * 
 *      code
 * 
 * } catch (excep-1-Name) {
 *      code to execute if excep-1-Name-exception occurs
 * } catch (excep-2-Name) {
 *      code to execute if excep-2-Name-exception occurs
 * } catch (excep-3-Name or excep-4-Name) {
 *      code to execute if excep-3-Name OR excep-4-Name exception occurs
 * } 
 * 
 * finally:
 *      It is an optional code block associated with try-catch block.
 *      Code in finally block will ALWAYS execute whether exception occurs in try-block or not.
 * 
 * 
 * finally vs final(const):
 *      final: is a Keyword in Java to create constant variable.
 *      In js: we use const for the same purpose.
 * 
 *      finally: is an optional code block associated with try-catch block.
 *      Code in finally block will ALWAYS execute whether exception occurs in try-block or not.
 *      
 * 
 */

/**
 * Scenarios to use try-catch block:
 * 
 *  1. if you are using a function(s) which are throwing Exception
 *  2. if you are using any three-party code,library.
 *  3. when need to connect with external system (like data-server or database or file) as per need
 */

/**
 * when try to connect with external system:
 * 
 *      1. connect with external-system
 *      2. perform data operations
 *      3. disconnect from external-system
 * 
 *  try {
 *      connect with db
 *      perform sql queries
 *  } catch (e) {
 *      code to execute if exception occurs
 *  } finally {
 *      if (dbIsConnected) {
 *          disconnect from db
 *      }
 *  }   
 * 
 * 
 * 
 */
try {
    const c1 = new Class1();

    c1.showSeason('jan');

    c1.showSeason('may');

    // c1.showSeason('january');

    c1.showSeason('aug');

} catch (e) {
    console.log(e);
    console.log("Invalid month name provided by user");
} finally {
    console.log('In finally block');
}



console.log("After try-catch block");


