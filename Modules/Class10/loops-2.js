/**
 * Loops:
 *      for
 *      while
 *      do-while
 * 
 *      for-of
 *      for-in
 *      forEach
 * 
 */

/**
 * do-while
 * 
 * initialization
 * do {
 *      do-while loop
 *      code block
 *      code between {} will keep executing until the condition is true/satisfied
 *      increment/decrement         // last line in the do-while-loop
 * } while (condition);
 * 
 * -> Code inside the do-while loop will always run at least once.
 * -> For first execution do-while loop doesn't check for condition;
 *      whereas for/while does check for condition before first execution.
 * 
 */
sports = [];

console.log('\nUsing do-while-loop on Solution-2\n');

let d1=0;
do {
    console.log('INSIDE DO-WHILE-LOOP');
    if (d1%2 !== 0) {
        console.log(sports[d1]);
    }
    d1++;
} while (d1 < sports.length);

console.log('\nUsing while-loop on Solution-2\n');
let w1 = 0;
while (w1 < sports.length) {
    console.log('INSIDE WHILE-LOOP');
    if (w1%2 !== 0) {
        console.log(sports[w1]);
    }
    w1++;
}

console.log('\nUsing for-loop on Solution-2\n')
for (let i=0 ; i < sports.length ; i++) {
    console.log('INSIDE FOR-LOOP');
    if (i%2 !== 0) {
        console.log(sports[i]);
    }
}