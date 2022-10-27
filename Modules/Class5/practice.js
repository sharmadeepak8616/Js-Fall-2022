/**
 * print false, if password exactly contains username, firstname or lastname
 * otherwise, print true
 */
let password = '';
let firstname = '';
let lastname = '';
let username = '';
let pwdResult;
/**
 * password = 1234
 * fname = abcd
 * lname = xyz
 * username pqrs
 * 
 * print -> true
 */

/**
 * password = XYZ
 * fname = abcd
 * lname = xyz
 * username pqrs
 * 
 * print -> true
 */

/**
 * password = pqrs
 * fname = abcd
 * lname = xyz
 * username pqrs
 * 
 * print -> false
 */
/**
 * password = lmno
 * 
 * 1. password contains username (includes)
 *  OR
 * 2. password contains fname (includes)
 *  OR
 * 3. password contains lname (includes)
 * 
 * pwdResult = 
 */
pwdResult = !(password.includes(username) || password.includes(fname) || password.includes(lname))

pwdResult = password.includes(username) || password.includes(fname) || password.includes(lname) ? false : true;

/**
 * Print 'Hello fName lName'
 * 
 * user will provide fname and lname
 * 
 */
let fName = 'john    ' , lName = '        doe                     ';
console.log(`\n\nHello ${fName.trim()} ${lName.trim()}\n\n`);

/**
 * "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 * 
 * 
 * print 'SAME' if first and last character of string in same (ignoring cases)
 * otherwise, print 'DIFFERENT'
 * 
 * 
 * char at index-0 -> charAt(0) -> lowercase-charAt(0)
 * length
 * char at index-(length-1) -> charAt(length-1) -> lowercase-charAt(length-1)
 * 
 * compare lowercase-charAt(0) === (ignoring cases) lowercase-charAt(length-1)
 * 
 * 
 * sentence into lowercase-sentence
 * char at index-0 -> charAt(0)
 * length
 * char at index-(length-1) -> charAt(length-1)
 * 
 * compare lowercase-charAt(0) === (ignoring cases) lowercase-charAt(length-1)
 */
