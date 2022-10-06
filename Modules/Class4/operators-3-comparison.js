/**
 * Operators in JS:
 * 
 * 3. Comparison Operators (>=, <=, >, <, ===, !==)
 * 
 * 
 * populationUSA is equal to populationX -> 
 * myHeight > broHeight 
 * 
 * Note: all Comparison result a boolean value
 * 
 */

let num1 = 10;
let num2 = 20;
let name1 = 'my name';
let name2 = 'your name';

let num1GrEqNum2 = num1 >= num2;   // >=   :   greater than or equals to
console.log(`\n${num1} >= ${num2} = ${num1GrEqNum2}`);

let num1LeEqNum2 = num1 <= num2;   // <=   :   less than or equals to
console.log(`\n${num1} <= ${num2} = ${num1LeEqNum2}`);

let num1GrNum2 = num1 > num2;   // >   :   greater than
console.log(`\n${num1} > ${num2} = ${num1GrNum2}`);

let num1LeNum2 = num1 < num2;   // <   :   less than
console.log(`\n${num1} < ${num2} = ${num1LeNum2}`);

/**
 * ===  :   to compare if two values are equals (in data and same datatype)
 * 
 * ==   :   to compare if two values are equals (in data)
 * 
 */

/*
    let num1 = 10;
    let num2 = 20;
    let name1 = 'my name';
    let name2 = 'your name';
*/
let num1EqNum2 = num1 === num2;
console.log(`\n${num1} === ${num2} = ${num1EqNum2}`);

name1 = '10';   // name1 has value=10 and the datatype is String

let num1DeepEqName1 = num1 === name1;
console.log(`\n${num1} === ${name1} = ${num1DeepEqName1}`);

let num1EqName1 = num1 == name1;
console.log(`\n${num1} == ${name1} = ${num1EqName1}`);

let var1 = true;
let var2 = 'true';

let res1 = var1 == var2;
console.log(`\nres1 -> ${res1}`);

/**
 * !==  :   to compare if two values are NOT equal (in data and datatype)
 * 
 * !=   :   to  compare if two values are NOT equal (in data)
 * 
 */

let num3 = 30;
let num4 = 40;

let num3DeepNtEqNum4 = num3 !== num4;
console.log(`\n${num3} !== ${num4} = ${num3DeepNtEqNum4}`);

let num3NtEqNum4 = num3 != num4;
console.log(`\n${num3} != ${num4} = ${num3NtEqNum4}`);

/**
 * 
 * 
 * 
 * cT = ( - 32) / 1.8
 *    = 14
 * 
 * Scenario: Verify correct temp value displayed after change temp unit
 *  Given I am on darksky page
 *  When I change temp unit to Deg-Celsius
 *  Then I verify correct temp value is displayed
 * 
 */

let fT = 58;
let cT = (fT - 32) / 1.8
console.log(cT);