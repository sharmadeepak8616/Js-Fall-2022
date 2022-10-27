/**
 * 1. Class variables / Global Variables / Field Variables
 *      any variable which is accessible in the entire file
 * 
 * 2. Local Variables
 */

// Class variables
let numbers = [23, 12, 43, 10, 5, -10];
let favSports = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let total = null;
let abc = 'wow';
    
// Local variables
for (let i=0 ; i <= numbers.length-1 ; i++) {
    let abc = 10;
    total = total + numbers[i];
    console.log(abc);
}

console.log(abc);
console.log(total);
/**
 * i=0
 * total = null
 * total = null + 23
 * total = 23
 * 23
 * 
 * i=1
 * total = null
 * 
 */


console.log(numbers);