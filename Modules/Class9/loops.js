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


// Print 'Hello World' 20 times

console.log('Hello World');     // counter=101    101==120
console.log('Hello World');     // counter=102    102==20
console.log('Hello World');     // counter=103    103==20
console.log('Hello World');     // counter=104    104==120
// ...
// ...
console.log('Hello World');     // counter=120   120==120      counter <= 20           increasing counter by 1 (counter++)

/**
 * Syntax for-loop:
 * 
 * for (initialization ; condition ; increment/decrement) {
 *      for-loop 
 *      code block
 *      code between {} will keep executing until the condition is true/satisfied
 * }
 */
console.log('\nfor-loop\n');

for (let counter = 1 ; counter <= 5 ; counter++) {      // for-loop
    console.log('Hello World');                         // for-code-block
}
/**
 * 1. create counter-variable with initial value.
 * 
 * 2. check if the condition (in for-loop) is true
 * 3. if true, enter in the for-code -lock and execute code ; if false do not enter the for-code-block and move ahead in the code file
 * 4. once all for-code-block is executed, change the counter-variable-value based on increment/decrement mentioned in for-loop
 * 
 * 5. check if the condition (in for-loop) is true
 * 6. if true, enter in the for-code -lock and execute code ; if false do not enter the for-code-block and move ahead in the code file
 * 7. once all for-code-block is executed, change the counter-variable-value based on increment/decrement mentioned in for-loop
 * 
 * 8. check if the condition (in for-loop) is true
 * 9. if true, enter in the for-code -lock and execute code ; if false do not enter the for-code-block and move ahead in the code file
 * 10. once all for-code-block is executed, change the counter-variable-value based on increment/decrement mentioned in for-loop
 * 
 * 11. and so on...
 */

console.log('\nPrint all values in separate lines\n');

/**
 * Print all values in separate lines
 * 
 * Football
 * Soccer
 * Baseball
 * Rugby
 */

// console.log(sports[0]); // counter=0
// console.log(sports[1]); // counter=1
// console.log(sports[2]); // counter=2
// console.log(sports[3]); // counter=3    counter <= length-1 (OR     counter < length    )        

// for -> initialization (counter=0) ; counter < arr.length ;; counter++
let sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

for (let i=0 ; i < sports.length ; i++) {
    console.log(sports[i]);
}

/**
 * 1. create counter-variable with initial value.
 * 
 * 2. check if the condition (in for-loop) is true
 * 3. if true, enter in the for-code -lock and execute code ; if false do not enter the for-code-block and move ahead in the code file
 * 4. once all for-code-block is executed, change the counter-variable-value based on increment/decrement mentioned in for-loop
 * 
 * 5. check if the condition (in for-loop) is true
 * 6. if true, enter in the for-code -lock and execute code ; if false do not enter the for-code-block and move ahead in the code file
 * 7. once all for-code-block is executed, change the counter-variable-value based on increment/decrement mentioned in for-loop
 * 
 * 8. check if the condition (in for-loop) is true
 * 9. if true, enter in the for-code -lock and execute code ; if false do not enter the for-code-block and move ahead in the code file
 * 10. once all for-code-block is executed, change the counter-variable-value based on increment/decrement mentioned in for-loop
 * 
 * 11. and so on...
 */

// Print ONLY odd index values from sports-array
console.log('\nPrint ONLY odd index values from sports-array\n');
sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

/**
 * Soccer
 * Rugby
 * Ping pong
 */
console.log('\nSolution-1\n')
for (let i=1 ; i < sports.length ; i+=2) {     // i=1,3,5,...       i++ <-> i=i+1  i+=2 <-> i=i+2
    console.log(sports[i]);
}

// i=0,1,2,3,4,5,.....
//    check if i is Odd
//          print sports[i]

console.log('\nSolution-2\n')
for (let i=0 ; i < sports.length ; i++) {
    if (i%2 !== 0) {
        console.log(sports[i]);
    }
}

/**
 * while-loop
 * 
 * initialization
 * while (condition) {
 *      while-loop
 *      code block
 *      code between {} will keep executing until the condition is true/satisfied
 *      increment/decrement         // last line in while-loop
 * }
 */

console.log('\nUsing while-loop on Solution-2\n');
let w1 = 0;
while (w1 < sports.length) {
    if (w1%2 !== 0) {
        console.log(sports[w1]);
    }
    w1++;
}


console.log('\nprint the value if either (value has an "o") OR (value has length > 5 and less than 10)\n');
/**
 * print the value if either (value has an 'o') OR (value has length > 5 and less than 10)
 * 
 * Football
 * Soccer
 * Baseball
 * Ping pong
 * 
 */
sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BOSKETBALL', 'Ping pong'];

/*
    sport[0].toLowerCase().includes('o') OR (sports[0].length > 5 and sports[0].length < 10)    ind = 0
        print -> sports[0]

    sport[1].toLowerCase().includes('o') OR (sports[1].length > 5 and sports[1].length < 10)    ind = 1
        print -> sports[1]

    ... 
    ... 

    sport[lastIndex].toLowerCase().includes('o') OR (sports[lastIndex].length > 5 and sports[lastIndex].length < 10)    ind = lastIndex
        print -> sports[lastIndex]



    ind=0,1,2,3,..lastIndex         ind < length    ind++

*/
console.log('\nUsing for-loop\n');
for (let ind = 0 ; ind < sports.length ; ind++) {
    if (sports[ind].toLowerCase().includes('o') || (sports[ind].length > 5 && sports[ind].length < 10)) {
        console.log(sports[ind]);
    }
}

console.log('\nUsing while-loop\n');
let indw=0;
while (indw < sports.length) {
   if (sports[indw].toLowerCase().includes('o') || (sports[indw].length > 5 && sports[indw].length < 10)) {
        console.log(sports[indw]);
    }
    indw++;
}

console.log('\nStore sports-array in a new variable in reverse order AND convert values in Titlecase\n');
/**
 * Store sports-array in a new variable in reverse order AND convert values in Titlecase
 */
sports = ['FootBall', 'soCCer', 'BasEbAll', 'Rugby', 'BASKETBALL', 'Ping pong'];
let reverse_sports = [];
/**
 * reverse_sports = ['Ping pong', 'BASKETBALL', 'Rugby', 'BasEbAll', 'soCCer',  'FootBall']
 * 
 * 
 * reverse_sports = ['Ping Pong', 'Basketball', 'Rugby', 'Soccer', 'Football'];
 */
/*

    reverse_sports[0] = sports[lastIndex-0];

    reverse_sports[1] = sports[lastIndex-1];

    reverse_sports[2] = sports[lastIndex-2];

    ... 
    ... 

    reverse_sports[lastIndex] = sports[lastIndex-lastIndex];


    counter = 0,1,2,3,4,...,lastIndex

    reverse_sports[counter] = sports[lastIndex-counter];

*/

for (let count=0 ; count < sports.length ; count++) {
    let tempArr = sports[sports.length-1-count].toLowerCase().split(' ');   // ['ping', 'pong']
    let temp = '';
    for (let i=0 ; i < tempArr.length ; i++) {
        temp = temp + tempArr[i].charAt(0).toUpperCase() + tempArr[i].substring(1) + ' ';
    }
    reverse_sports[count] = temp.trim();
    // reverse_sports[count] = sports[sports.length-1-count];
}
console.log(`sports -> ${sports}`);
console.log(`reverse_sports -> ${reverse_sports}\n`);


/*

    count = 5, 4, 3, 2, 1, 0

    reverse_sports[lastIndex-count] = sports[count];

    reverse_sports[lastIndex-count] = sports[count];

    reverse_sports[5-3] = sports[3];

    ... 
    ... 

    reverse_sports[lastIndex] = sports[lastIndex-lastIndex];


    counter = lastIndex, lastIndex-1 , lastIndex-2 , ... , 0

    reverse_sports[lastIndex-count] = sports[count];

*/
console.log('\nAnother logic\n');
for (let count = sports.length-1 ; count >= 0 ; count--) {
    reverse_sports[sports.length-1-count] = sports[count];
}
console.log(`sports -> ${sports}`);
console.log(`reverse_sports -> ${reverse_sports}\n`);

