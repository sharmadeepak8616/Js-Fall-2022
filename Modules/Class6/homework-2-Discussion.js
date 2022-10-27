
/**
 * Due date : Oct-9 (Sun) eod
 */

const sentence1 = 'Hello Dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 * 
 * Hint: Ternary
 *       length
 *       >=
 */
console.log(`\n\nresult1 -> ${result1}`);

const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */
let sentence2AfterReplace_Alpha = sentence2.replace(/a/ig, 'Alpha');
console.log(`\n\nsentence2 -> ${sentence2}\n\n`);
console.log(`\n\nsentence2AfterReplace_Alpha -> ${sentence2AfterReplace_Alpha}\n\n`);


let sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'BoDy' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'BoDy' is present only once. (true or false)
 */

/*
    Q1 - 
    Q2 - 
    Q3 - 4, 5, 6
*/

// 4. index of 'BoDy' in sentence3  (ignore cases)
/**
 * 
 * convert sentence-3 in to lowercase health was earlier said to be the ability of the body functioning well.
 * convert 'BoDy' in to lowercase body
 * apply indexOf on the lowercased-values
 * 
 */
let sentence3_Lowercase = sentence3.toLowerCase();
console.log(sentence3_Lowercase);

let body_Lowercase = 'BoDy'.toLowerCase();
console.log(body_Lowercase);

let indexOf_BoDy = sentence3_Lowercase.indexOf(body_Lowercase);
console.log(indexOf_BoDy);


// 5. the last-character in sentence-3
/**
 * last character is present at last-index
 * 1. length of sentence3 (L)
 * 2. lastIndex=L-1
 * 3. find char at index(L-1) (charAt)
 */
// let lastIndex = sentence3.length-1
let charAtLastIndex = sentence3.charAt(sentence3.length-1);
console.log(`\n\nChar at index-${sentence3.length-1} is '${charAtLastIndex}'\n\n`);


// 6. word 'BoDy' is present only once. (true or false)
/**
 * 1. convert sentence3 in to lowercase
 * 2. convert 'BoDy' in to lowercase
 * 3. find index of 'body'
 * 4. find last index of 'body'
 * 5. compare indexOf-value === lastIndexOf-value and indexOf-value>=0
 * 
 */
sentence3 = "BODies is bodbody our temple";
let sentence3_L = sentence3.toLowerCase();
let BoDy_L = 'BoDy'.toLowerCase();
let indexOf_value = sentence3_L.indexOf(BoDy_L); 
let lastIndexOf_value = sentence3_L.lastIndexOf(BoDy_L);
let result = indexOf_value === lastIndexOf_value && indexOf_value >= 0;
console.log(`is word 'BoDy' present only once -> ${result}`);