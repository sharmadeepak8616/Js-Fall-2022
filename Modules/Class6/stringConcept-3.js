let myCity = 'neW yORk CIty, neW YoRk';

console.log(`\nmyCity -> ${myCity}`);

/**
 * discussed string-functions:;
 * 
 * localeCompare()
 * substring()
 * slice()
 * substr()
 * split()
 * 
 * 
 */


/**
 * To compare if two strings are equal or not 
 * function: localeCompare
 * 
 * return type: number
 */
let stmt1 = 'hello World!';
let stmt2 = 'Hello World!';
// to compare if stmt1 and stmt2 are equal  -> boolean
stmt1 === stmt2

// to compare if stmt1 and stmt2 are equal  -> 0, 1, -1
let isEqual1 = stmt1.localeCompare(stmt2);
console.log(`\n\nis stmt1 equal to stmt2 -> ${isEqual1}\n\n`);

/**
 * If both strings are equal, function returns 0
 * If string is greater than another, function returns 1
 * if string is lesser than another, function returns -1
 */
console.log('\n\nusing substring function... \n\n');
/**
 * To slice out a piece of string from a given string
 * functions:
 *      substring()
 *      slice()
 *      substr()
 * 
 */
/**
 * "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 * 
 * give me from index-0 to index-4(excluding index-4)
 * HeAl     (0,1,2,3) 
 * 
 * give me from index-2
 * AlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.    (2,3,4,5....up to end)
 * 
 * give me from index-0 to index-1(excluding index-1)
 * H        (0)
 * 
 * 
 */

/**
 * To extract a part of string form a given string:
 * functions:
 *      substring()
 * input: 1/2
 *      numbers
 * return type:
 *      string
 * 
 * substring(startIndex)    -> to get string from start-index to end
 * substring(startIndex, endIndex)    -> to get string from start-index to end-index (excluding end-index)
 * 
 * substring does NOT change the original value
 * returns the extracted string
 * 
 * 
 * if the start-index and end-Index are invalid -> function returns empty string
 * if the end-index is invalid -> function returns from start-Index to end
 * if the end-index is invalid -> function returns from start-Index to end
 */
let sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

let subString0_4 = sentence.substring(0,4);
console.log(`sentence -> ${sentence}`);
console.log(`substring from index-0 to index-4(excluding index-4) -> '${subString0_4}'`);

let subString11 = sentence.substring(11);
console.log(`substring from index-11 -> '${subString11}'`);

let subString1000_1400 = sentence.substring(1000,1400);
console.log(`substring from index-1000 to index-1400(excluding index-1400) -> '${subString1000_1400}'`);

let subString_1_10 = sentence.substring(-1,10);     // 0 to 10
console.log(`substring from index(-1) to index-10(excluding index-10) -> '${subString_1_10}'`);

let subString_20_10 = sentence.substring(20,10);    // 10 to 20
console.log(`substring from index-20 to index-10(excluding index-10) -> '${subString_20_10}'`);



/**
 * print the first character of the string using substring
 * 
 * let sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 */
let firstCharacter = sentence.substring(0,1);      // 0
console.log(`First character is '${firstCharacter}'`);

/**
 * print the last character of the string using substring
 * 
 * let sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 * 
 * sentence.length
 * lastIndex = length-1
 * substring(lastIndex)
 * 
 */
let lastCharacter = sentence.substring(sentence.length-1);      // lastIndex to end
console.log(`Last character is '${lastCharacter}'`);

/**
 * function: slice(startIndx, endIndex)
 * input: 1/2
 *      numbers
 * return type:
 *      string
 */
console.log('\n\nusing slice function.....\n\n');
let slice0_4 = sentence.slice(0,4);
console.log(`sentence -> ${sentence}`);
console.log(`slice from index-0 to index-4(excluding index-4) -> '${slice0_4}'`);

let slice11 = sentence.slice(11);
console.log(`slice from index-11 -> '${slice11}'`);

let slice20_10 = sentence.slice(20, 10);    // 
console.log(`slice from index-20 to index-10 -> '${slice20_10}'`);

let slice_1_10 = sentence.substring(-1,10);     // 0 to 10
console.log(`slice from index(-1) to index-10(excluding index-10) -> '${slice_1_10}'`);

let slice_3_1 = sentence.substring(-3,-1);     
console.log(`slice from index(-3) to index(-1) -> '${slice_3_1}'`);

/**
 * substr (startIndex, length)
 */
console.log('\n\nusing substr function.....\n\n');
let substr0_4 = sentence.substr(0,4);      // starting from index-0 , it gives string of length=4  (0,1,2,3)
console.log(`sentence -> ${sentence}`);
console.log(`substr from index-0 of length=4 -> '${substr0_4}'`);

/**
 * using substr, find the first character in string
 */
let firstCharacter_substr = sentence.substr(0, 1);
console.log(`First character using substr -> '${firstCharacter_substr}'`);

/**
 * To split the given string from a specific point(s) in to multiple strings
 * function: split()
 * input: 1
 *      string
 * return type:
 *      string-array / array-of-string
 * 
 * 'my city name is new york'
 * 
 * split by 'y'
 * 
 * 'm' , ' cit' , ' name is new ' , 'ork'
 * 
 * 
 * 
 */
let cityName = 'my city name is new york iS the BEst CIty in the ENTIRe wOrld, yoU cAn check';

let cityName_split_y = cityName.split('y');
console.log(`\nsplit by 'y' -> ${cityName_split_y}`);
console.log(`Length -> ${cityName_split_y.length}\n\n`);

let cityName_split_space = cityName.split(' ');
console.log(`\nsplit by ' ' -> ${cityName_split_space}`);
console.log(`Length -> ${cityName_split_space.length}\n\n`);

// print word at index-2
console.log(`word at index-2 -> ${cityName_split_space[2]}\n\n`);


/**
 * 'my city name is new york'
 * 
 * 
 * 'my' , 'city'  , 'name'  ,  'is'  , 'new'  , 'york'
 */
let cityName_split_E = cityName.split('E');
console.log(`\nsplit by 'E' -> ${cityName_split_E}`);
console.log(`Length -> ${cityName_split_E.length}\n\n`);

let cityName_split_nothing = cityName.split('');
console.log(`\nsplit by '' -> ${cityName_split_nothing}`);
console.log(`Length -> ${cityName_split_nothing.length}\n\n`);
// 'm', 'y', ' ', 'c', 'i', 't', 'y', ' ', 'n',....


let cityName_split_or = cityName.split('or');
console.log(`\nsplit by 'or' -> ${cityName_split_or}`);
console.log(`Length -> ${cityName_split_or.length}\n\n`);

let cityName_split_NeW = cityName.split('NeW');
console.log(`\nsplit by 'New' -> ${cityName_split_NeW}`);
console.log(`Length -> ${cityName_split_NeW.length}\n\n`);


/**
 * str = 'king'
 * 
 * str.length <-- cannot use length from string-library
 * 
 * str.split('')    -> [k, i, n, g]
 * find the length of array
 * 
 */
