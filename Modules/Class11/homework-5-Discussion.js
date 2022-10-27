// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */
let numbers = [23, 12, 43, 10, 5, -10];
let total = null;

/**
 * total = total + 23   // total = 23
 * total = total + 12   // total = 35
 * total = total + 43   // total = 78
 * ... 
 * ... 
 * total = total + lastIndex-value      // total = total + last-Index-value
 * 
 * 
 * total = total + numbers[0]   // total = 23
 * total = total + numbers[1]   // total = 35
 * total = total + numbers[2]   // total = 78
 * ... 
 * ... 
 * total = total + numbers[lastIndex]      // total = total + last-Index-value
 * 
 * 
 * i = 0,1,2,...,lastIndex      i++     i <= lastIndex
 * 
 */

console.log('\nUsing for-loop\n');
for (let i=0 ; i <= numbers.length-1 ; i++) {
    total = total + numbers[i];
}
let avg = total / numbers.length;
console.log(`avg -> ${avg}\n`);

/**
 * 
 * total = total + num   // total = 23
 * total = total + num   // total = 35
 * total = total + num   // total = 78
 * ... 
 * ... 
 * total = total + num      // total = total + last-Index-value
 * 
 * 
 */
console.log('\nUsing for-of loop\n');
let total2 = null;
for (const num of numbers) {
    total2 = total2 + num;
}
let avg2 = total2 / numbers.length;
console.log(`avg2 -> ${avg2}\n`);


console.log('\nUsing forEach loop\n');
let total3 = null;
numbers.forEach(function (num1) {
    total3 = total3 + num1;
})
let avg3 = total3 / numbers.length;
console.log(`avg3 -> ${avg3}\n`);



/**
 * Q2. Reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * string into array (using split by ' ')   -> ['have',  'a',  'great', 'day']
 * []
 * using for-loop, get all in newArray in reverse order -> ['day', 'great', 'a', 'have']
 * using join(), combine array values in to String
 * 
 * 
 * string into array (using split by ' ')   -> ['have',  'a',  'great', 'day']
 * using for-loop, you added values in reverseStr2 (in reverse order)
 * 
 * 
 */
let str2 = 'have a great day'   // day great a have
let reverseStr2 = '';

const arr2 = str2.split(' ');   //  arr2 = ['have',  'a',  'great', 'day']

// reverseStr2 = reverseStr2 + last-indexValue + ' ';            // reverseStr2 = '' + 'day ' -> 'day '

// reverseStr2 = reverseStr2 + secondlast-indexValue + ' ';    // reverseStr2 = 'day ' + 'great '  --> 'day great '

// ... 
// ...
// reverseStr2 = reverseStr2 + 0-indexValue + ' ';             // reverseStr2 = 'day great a ' + 'have '  --> 'day great a have '

for (let i=arr2.length-1 ; i >= 0 ; i--) {            // i=lastIndex, secLastIndex, thirdLastIndex, ... , 1, 0        i--
    reverseStr2 = reverseStr2 + arr2[i] + ' ';
    console.log(`\ni -> ${i}`);
}

console.log(`reverseStr2 -> ${reverseStr2.trim()}`);   // day great a have
console.log(number);
/**
 * Q3. Create abbreviation for a sentence
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */
let str3 = 'good Morning';
let abbr = '';
// code
console.log(`abbr -> ${abbr}`);