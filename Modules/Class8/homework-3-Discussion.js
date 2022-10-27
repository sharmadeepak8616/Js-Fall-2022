// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
let countryName = 'Japan';      // [J, a, p, a, n]
// countryName.length;  <-- not allowed

/*

    split('') -> [] -> length

    lastIndexOf('') -> 5

*/


/**
 * Q2: find the number of words in the given sentence2
 */
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/*

    split(' ') -> [] -> length

*/

let numOfWords = sentence2.split(' ').length;

console.log(`\n\nNumber of words -> ${numOfWords}\n\n`);




/**
 * Q3: Create abbreviation for a 4-word sentence
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe' -> YNWA
 */
const sentence3 = 'you Never waLK ALONe';
let abbr = '';
// code
console.log(`abbr -> ${abbr}`);     // abbr -> YNWA





/**
 * Q4: Convert the string value in to Titlecase
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */

/*

'have a GrEAT daY'
    split() -> []
arr = ['have' 'a' 'GrEAT' 'daY']

arr[0] -> 'have'
    charAt(0) -> h -> uppercase -> H
    slice(1) -> ave -> lowercase -> ave

word1 = charAt(0) -> h -> uppercase -> H + slice(1) -> ave -> lowercase -> ave -> Have

arr[1] -> 'a'
    charAt(0) -> a -> uppercase -> A
    slice(1) -> '' -> lowercase -> ''

word2 = charAt(0) -> a -> uppercase -> A + slice(1) -> '' -> lowercase -> '' -> A

arr[2] -> 'GrEAT'
    charAt(0) -> a -> uppercase -> G
    slice(1) -> rEAT -> lowercase -> reat

word3 = charAt(0) -> G -> uppercase -> G + slice(1) -> 'rEAT' -> lowercase -> 'reat' -> Great

arr[3] -> 'daY'
    charAt(0) -> d -> uppercase -> D
    slice(1) -> 'aY' -> lowercase -> 'ay'

word4 = charAt(0) -> d -> uppercase -> D + slice(1) -> 'aY' -> lowercase -> 'ay' -> Day


word1 + ' ' + word2 + ' ' + word3 + ' ' + word4


'Have A Great Day'

*/


// const sentence4 = 'you Never waLK ALONe';
// let sentence4_Titlecase = '';
// // code
// const sentenceArray = sentence4.split(' '); // ['have' 'a' 'GrEAT' 'daY']

// let word1 = sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1).toLowerCase();

// let word2 = sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1).toLowerCase();

// let word3 = sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1).toLowerCase();

// let word4 = sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1).toLowerCase();


// sentence4_Titlecase = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4;


// console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> Have A Great Day



// const sentence4 = 'have a GrEAT daY';
// let sentence4_Titlecase = '';
// // code
// const sentenceArray = sentence4.toLowerCase().split(' '); // ['have' 'a' 'great' 'day']

// let word1 = sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1);

// let word2 = sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1);

// let word3 = sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1);

// let word4 = sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1);


// sentence4_Titlecase = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4;


// console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> Have A Great Day


const sentence4 = 'have a GrEAT daY';   // 10
let sentence4_Titlecase = '';
// code
const sentenceArray = sentence4.toLowerCase().split(' '); // ['have' 'a' 'great' 'day']

sentence4_Titlecase = sentence4_Titlecase + sentenceArray[0].charAt(0).toUpperCase() + sentenceArray[0].slice(1) + ' ';     // "" + Have + " " ->  "Have "

sentence4_Titlecase =  sentence4_Titlecase  + sentenceArray[1].charAt(0).toUpperCase() + sentenceArray[1].slice(1) + ' ';   // "Have " + "A" + " " -> "Have A "

sentence4_Titlecase =  sentence4_Titlecase  + sentenceArray[2].charAt(0).toUpperCase() + sentenceArray[2].slice(1) + ' ';   // "Have A " + "Great" + " " -> "Have A Great "

sentence4_Titlecase =  sentence4_Titlecase  + sentenceArray[3].charAt(0).toUpperCase() + sentenceArray[3].slice(1) + ' ';   // "Have A Great " + "Day" + " " -> "Have A Great Day "

sentence4_Titlecase = sentence4_Titlecase.trim();

console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> "Have A Great Day"   // 10
