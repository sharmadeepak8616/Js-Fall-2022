



/**
 * Conditional Code blocks (Conditional loop)
 *  1. if-else block
 *  2. switch block
 * 
 * when we have different actions to do (code to execute) depending upon condition(s)
 * 
 */

/**
 * check for normal milk and it's not expiring within 3-days
 *      buy 2 packs
 * check for almond or soya milk
 *      buy 2 packs
 * if nothing available
 *      call home
 * 
 * 
 * isMilkPresent && normalMilkExpiry > 3
 *      buy 2 packs
 * isAlmondMilkPresent || isSoyaMilkPresent
 *      buy 2 packs
 * else
 *      call home
 *
 * 
 */

/**
 *  check for normal milk and it's not expiring within 3-days
 *      buy 2 packs
 */
/** 
 * if-block
 * 
 * Syntax:
 * 
 * if (condition(s)) {
 *      if block
 *      code will execute ONLY when if-condition(s) result into true
 * } 
 * 
 */;

 let num = 21;

 // print "EVEN" if value in num is even

 /**
  * num is even
  *     print "EVEN"
  */

if (num%2 === 0) {
    console.log("EVEN");
}

let countryName = 'United states of america'; 
/**
 * if the countryName is United states of america (ignoring case)
 *      print, you are a USA Citizen
 */
/**
 * countryName -> uppercase -> ABCD
 * 
 * Abcd -> uppercase -> ABCD
 * 
 * 
 * localeCompare -> 0
 */
let countryName_U = countryName.toUpperCase();
let countryFor_U = 'United states of america'.toUpperCase();

if (countryName_U.localeCompare(countryFor_U) === 0) {
    console.log('you are a USA Citizen');
}

/**
 * if the countryName is United states of america (ignoring case)
 *      print, you are a USA Citizen
 * otherwise
 *      print, you are not a USA Citizen
 */

/** 
 * if-else block
 * 
 * Syntax:
 * 
 * if (condition(s)) {
 *      if block
 *      code will execute ONLY when if-condition(s) result into true
 * } else {
 *      else block
 *      code will execute ONLY when if-condition(s) result into false
 * }
 * 
 */
console.log('\n\nif-else block\n\n');


countryName = 'United states of america';
 countryName_U = countryName.toUpperCase();


if (countryName_U.localeCompare(countryFor_U) === 0) {
    console.log('you are a USA Citizen');
} else {
    console.log('you are NOT a USA Citizen');
}

/**
 * if countryName is United states of america, print 'You are a USA citizen'
 * if countryName is not United states of america, print 'You are not a USA citizen'
 * if age is 18 or above, print you can Vote
 * if age is below 18, print you cannot vote.
 */

if (countryName_U.localeCompare(countryFor_U) === 0) {
    console.log('you are a USA Citizen');
} else {
    console.log('you are NOT a USA Citizen');
}

let age = 20;

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You cannot vote');
}

console.log('\n\nif-else-if ... block\n\n');

/** 
 * if-else-if block
 * 
 * Syntax:
 * 
 * if (condition(s)) {
 *      if block
 *      code will execute ONLY when if-condition(s) result into true
 * } else if (condition(s)) {
 *      else-if block
 *      code will execute ONLY when the else-if-condition(s) result into true
 * } else if (condition(s)) {
 *      else-if block
 *      code will execute ONLY when the else-if-condition(s) result into true
 * }
 * 
 */

countryName = 'Japan';
countryName_U = countryName.toUpperCase();

/**
 * if countryName is United states of america, print 'You are a USA citizen'
 * if countryName is Canada, print 'You are a Canadian'
 * if countryName is ABC, print 'You are a citizen of ABC'
 * if NO countryName is entered, print 'Please enter your country name'
 * 
 */

if (countryName_U.localeCompare('United states of america'.toUpperCase()) === 0) {
    console.log('you are a USA Citizen');
} else if (countryName_U.localeCompare('Canada'.toUpperCase()) === 0) {
    console.log('you are a Canadian');
} else if (countryName_U.localeCompare('Abc'.toUpperCase()) === 0) {
    console.log('You are citizen of ABC');
} else if (countryName_U.length === 0) {
    console.log('Please enter your country name');
}

console.log("\nOut side if-else-if LINE\n");

/**
 * 
 * if dayName is mon or wed or fri
 *      print "attend the class"
 * if dayName is tue or sat
 *      print "attend lab session"
 * if dayName is thu
 *      print "self study"
 * if dayName is sun
 *      print "Enjoy"
 * 
 */

// day is NOT mon, wed, fri, tue, sat, thu
let dayName = 'wed' ;      // mon, tue, wed, thu, fri, sat, sun


if (dayName === 'mon' || dayName === 'wed' || dayName === 'fri') {
    console.log('attend the class');
} else if (dayName === 'tue' || dayName === 'sat') {
    console.log('attend lab session');
} else if (dayName === 'thu') {
    console.log('self study');
} else if (dayName === 'sun') {
    console.log('enjoy');
} else {
    console.log('Enter valid day-name');
}

console.log('\nAfter dayName if-else\n');

console.log('\nAnother solution\n');

dayName = 'sat';

if (dayName.localeCompare('mon') === 0 || dayName.localeCompare('wed') === 0 || dayName.localeCompare('fri') === 0) {
    console.log('attend the class');
} else if (dayName.localeCompare('tue') === 0 || dayName.localeCompare('sat') === 0) {
    console.log('attend lab session');
} else if (dayName.localeCompare('thu') === 0) {
    console.log('self study');
} else if (dayName.localeCompare('sun') === 0) {
    console.log('enjoy');
} else {
    console.log('Enter valid day-name');
}

console.log('\nAnother solution - ends\n');


const sports = ['football', 'Soccer', 'Baseball' , 'Rugby', 'Tennis'];

// if 'swimming' is not present in the array, add it.
// if already present then print the index at which it is present

let lookFor = 'swimming';

if(sports.includes(lookFor)) {
   console.log(`Index of ${lookFor} is ${sports.indexOf(lookFor)}`);
} else{
   sports.push(lookFor);
}

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
 * 
 * Syntax:
 * 
 * switch (varName) {
 *      case value1:
 *          case block
 *          code inside case block will execute if varName is equals to value1
 *          break;  // defines as the last line of case block
 *      case value2:
 *          case block
 *          code inside case block will execute if varName is equals to value2
 *          break;  // defines as the last line of case block
 *      case value3:
 *          case block
 *          code inside case block will execute if varName is equals to value3
 *          break;  // defines as the last line of case block
 *      default:
 *          default block
 *          code in default block will execute if varName is NOT equals to any case-value
 * }
 * 
 * 
 * 
 */

console.log('\n\n2. switch block\n\n');

/*

if (dayName === 'mon' || dayName === 'wed' || dayName === 'fri') {
    console.log('attend the class');
} else if (dayName === 'tue' || dayName === 'sat') {
    console.log('attend lab session');
} else if (dayName === 'thu') {
    console.log('self study');
} else if (dayName === 'sun') {
    console.log('enjoy');
} else {
    console.log('Enter valid day-name');
}
*/
dayName = 'wEd';
switch (dayName.toLowerCase()) {
    case 'mon':
    case 'wed':
    case 'fri':
        console.log('attend the class');
        break;
    case 'tue':
    case 'sat':
        console.log('attend lab session');
        break;
    case 'thu':
        console.log('self study');
        break;
    case 'sun':
        console.log('Enjoy');
        break;
    default:
        console.log('Enter valid day-name');
}

console.log('\n\nOutside switch block\n\n');














