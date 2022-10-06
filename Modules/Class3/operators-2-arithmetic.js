/**
 * Operators in JS:
 * 
 * 2. Arithmetic Operators (+, -, *, /, %, ++, --)
 * +
 * -
 * *
 * /
 * % -> Modulus
 * ++ -> increment
 * -- -> decrement
 * 
 */
let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
/*
    num3 = 30
    num1 + num2 = 30
    10 + 20 = 30
*/
console.log(`${num1} + ${num2} = ${num3}`);                 // 10 + 20 = 30

console.log(`${num1} - ${num2} = ${num1 - num2}`);          // 10 - 20 = -10

console.log(`${num1} * ${num2} = ${num1 * num2}`);          // 10 * 20 = 200

console.log(`${num1} / ${num2} = ${num1 / num2}`);          // 10 / 20 = 0.5

/**
 * Modulus (%)
 * 
 * Division (withOUT going into decimal point):
 *      10/2 = 5 (remainder = 0)
 *      9/2 = 4 (remainder = 1)
 *      8/3 = 2 (remainder = 2)
 *      10/3 = 3 (remainder = 1)
 *      7/9 = 0 (remainder = 7)
 *      4/4 = 1 (remainder = 0)
 * 
 * 10/3 = 3
 * 10%3 = 1
 * 
 *      10%2 = 0
 *      9%2 = 1
 *      8%3 = 2
 *      10%3 = 1
 *      7%9 = 7
 *      4%4 = 0
 */
console.log(`${num1} % ${num2} = ${num1 % num2}`);          // 10 % 20 = 10

console.log(`8 % 3 = ${8 % 3}`);          // 8 % 3 = 2
console.log(`9 % 2 = ${9 % 2}`);          // 9 % 2 = 1

/**
 * find if the given number of divisible by 13
 * 
 * num = 576537
 */
let res = 576537 % 13
console.log(res);

console.log('\nIncrement operator\n');
/**
 * Increment (++)
 *      increases the value in variable by 1
 * 
 * let num1 = 10;
 * console.log(num1);       // 10
 * num1++;      // increment operator change the value in num1 to 11
 * console.log(num1);       // 11
 * 
 */
let myNum1 = 10;
console.log(myNum1);
myNum1++;       // post-increment
console.log(myNum1);

let myNum2 = 10;
console.log(myNum2);
++myNum2;       // pre-increment
console.log(myNum2);

console.log('\n\nHaving fun!!');
let myNum3=30;
// console.log(myNum3++);          // 30   (printing and increment) -> (printing then increment value in myNum3)
    /**
     * console.log(myNum3);     // 30
     * myNum3++                 // 31
     */
console.log(++myNum3);          // 31   (printing and increment) -> (increment value in myNum3 then printing)
    /**
     * ++myNum3                 // 31
     * console.log(myNum3);     // 31
     */

/**
 * Types:
 *      1. Post-increment (varName++)
 *          execute the post-increment AFTER everything
 *          -> Ignore post-increment, complete the task(s) with current value then perform post-increment
 *      2. Pre-increment  (++varName)
 *          execute the pre-increment BEFORE anything
 *          -> Ignore everything perform pre-increment, and use updated values to complete the task(s)
 */
num1 = 10;
let num4 = num1++;
/**
 * assignment (assign 10 to num4), post-increment (num1 -> num=11)
 */
console.log(num4);  // 10
console.log(num1);  // 11

let res1 = num1 - ++num4;
/**
 * let res1 = num1 - ++num4;
 * ++num4 -> pre-increment(num4 = 11)
 * num1 - num4 -> subtraction (0)
 * let res1 = 0 (assignment )
 * 
 * 
 */
console.log(`\n\nres1 = ${res1}`);  // 0
console.log(`num1 = ${num1}`);      // 11
console.log(`num4 = ${num4}`);      // 11

let var1 = 10;
let var2 = 20;
let res2 = var1++ - ++var2;
/**
 * pre-increment(var2), subtraction, assignment, post-increment(var1)
 *      ++var2 = var2 = 21       // let res2 = var1++ - var2;
 * subtraction
 *      let res2 = var1 - var2;  // let res2 = 10 - 21
 * assignment
 *      let res2 = -11
 * post-increment(var1)
 *      var1++ = var1 = 11
 * 
 * 
 */
console.log(`\n\nres2 = ${res2}`);  // -11
console.log(`var1 = ${var1}`);      // 11
console.log(`var2 = ${var2}`);      // 21

/**
 * 1. Create a variable named myTeamName and assign any name to your team
 * 2. create a variable named myTeamSize and assign any number to it
 * 3. increment the team size by 1
 * 4. print the result like:
 *  I am part of ABC team, we have total X-members
 */
let myTeamName = 'Alpha';
let myTeamSize = 0;
myTeamSize++;
console.log(`I am part of ${myTeamName} team, we have a total of ${myTeamSize}-member(s)`);


/**
 * Decrement (--)
 *      decreases the value in variable by 1
 * 
 * let num1 = 10;
 * console.log(num1);       // 10
 * num1--;      // decrement operator change the value in num1 to 9
 * console.log(num1);       // 9
 * 
 */

/**
 * Types:
 *      1. Post-decrement (varName--)
 *          execute the post-decrement AFTER everything
 *          -> Ignore post-decrement, complete the task(s) with current value then perform post-decrement
 *      2. Pre-decrement  (--varName)
 *          execute the pre-decrement BEFORE anything
 *          -> Ignore everything perform pre-decrement, and use updated values to complete the task(s)
 * 
 * num--    // post-decrement
 * --num    // pre-decrement
 */
console.log('\n\nDecrement\n\n');

var1 = 10;
var2 = 20;
res2 = var1-- - --var2;
/**
 * res2 = var1-- - --var2;
 * 
 * pre-decrement
 *      --var2 (var2=19)
 *      res2 = var1 - var2;
 * subtraction, 
 *      var1 - var2
 *      10 - 19
 * assignment
 *      res2 = -9
 * post-decrement (var1)
 *      var1-- (var=9)
 * 
 */
console.log(`\nres2 = ${res2}`);    // -9
console.log(`var1 = ${var1}`);      // 9
console.log(`var2 = ${var2}`);      // 19

let res3 = res2++;
/*
    assignment, 
        let res3 = res2;
        res3 = -9
    
    post-increment
        res2++
        res2 = -8

    post-increment on res2 = -8
    value in res3 = -8
*/

console.log(`\nres2 = ${res2}`);    // -8
console.log(`res3 = ${res3}`);      // -9

// (+, -, *, /, %, ++, --)

let result2 = (13 * 34 - 6 + 12 / 4);   // *, -, +, /
/*
        (13 * 34 - 6 + 12 / 4);
        (442 - 6 + 12 / 4);
        (442 - 6 + 3);
        (436 + 3);
        439
*/

