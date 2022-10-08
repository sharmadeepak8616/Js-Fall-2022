let myCity = 'neW yORk CIty, neW YoRk';

console.log(`\nmyCity -> ${myCity}`);

/**
 * discussed string-functions:;
 * 
 * startsWith()
 * endsWith
 * includes()
 * replace()
 * 
 */

/**
 * To find if the String starts with exact given pattern
 * function: startsWith()
 * input: 1
 *      string
 * return type: boolean
 * 
 * if string starts with the exact given pattern
 *      function returns true
 * otherwise
 *      function returns false
 * 
 * 
 * 
 * let abc = 'hello dear how are you?'
 * let def = 'hello d'
 * 
 * starts with 'ab' -> false
 * starts with 'He' -> false
 * does abc starts with exactly def? -> true
 * 
 */
// let myCity = 'neW yORk CIty, neW YoRk';

let myCityStartsWith_He = myCity.startsWith('He');
console.log(`does myCity start with 'He' -> ${myCityStartsWith_He}`);

let myCityStartsWith_hello_de = myCity.startsWith('hello de');
console.log(`does myCity start with 'hello de' -> ${myCityStartsWith_hello_de}`);

let myCityStartsWith_new_yORk = myCity.startsWith('new yORk');
console.log(`does myCity start with 'new yORk' -> ${myCityStartsWith_new_yORk}`);

let myCityStartsWith_neW_ = myCity.startsWith('neW ');
console.log(`does myCity start with 'neW ' -> ${myCityStartsWith_neW_}`);

/**
 * To find if the String ends with exact given pattern
 * function: endsWith()
 * input: 1
 *      string
 * return type: boolean
 * 
 * if string ends with the exact given pattern
 *      function returns true
 * otherwise
 *      function returns false
 * 
 * 
 * 
 * 
 * let abc = 'hello dear how are you?'
 * let def = 'are y'
 * 
 * ends with 'you?' -> true
 * ends with 'are you' -> false
 * does abc ends with exactly def? -> false
 * ends with 'u ?' -> false
 * 
 */
// let myCity = 'neW yORk CIty, neW YoRk';
let myCityEndsWith_YoRk = myCity.endsWith('YoRk');
console.log(`\ndoes myCity ends with 'YoRk ' -> ${myCityEndsWith_YoRk}`);

let myCityEndsWith_new_YorK = myCity.endsWith('new YorK');
console.log(`does myCity ends with 'new YorK ' -> ${myCityEndsWith_new_YorK}`);

/**
 * Find if string starts with a pattern (ignoring the cases)
 * 
 * let myCity = 'neW yORk CIty, neW YoRk';
 * 
 * Verify myCity starts with 'NEW YoRK' (ignoring cases)
 * 
 * 'NEW YORK CITY, NEW YORK'
 * 
 * 'NEW YORK'
 * 
 */
let myCity_LowerCase = myCity.toLowerCase();
let pattern_LowerCase = 'NEW YoRK'.toLowerCase();

let result = myCity_LowerCase.startsWith(pattern_LowerCase);
console.log(`\n\nresult -> ${result}`);

let result2 = myCity.toLowerCase().startsWith('NEW YoRK'.toLowerCase());
console.log(`result2 -> ${result2}\n`);

/**
 * To find if a given pattern exactly present in the string
 * function: includes
 * input: 1
 *      string
 * return type: 
 * 
 * if the given pattern is exactly present in the string
 *      function returns true
 * otherwise
 *      function returns false
 * 
 * 
 * 
 * new york city
 * does above string contains/includes 'ne'? -> true
 * 
 */
// let myCity = 'neW yORk CIty, neW YoRk';

let myCityIncludes_rk_ci = myCity.includes('rk ci');
console.log(`\ndoes myCity include/contain 'rk ci'? -> ${myCityIncludes_rk_ci}`);

let myCityIncludes_ORk_C = myCity.includes('ORk C');
console.log(`does myCity include/contain 'ORk C'? -> ${myCityIncludes_ORk_C}`);

/**
 * To replace a given pattern from String with another pattern/value
 * function: replace()
 * 
 * input: 2 string
 *      (replaceThis, replaceWith)
 * return type: string
 * 
 * -> replace() does NOT change the original value in the variable
 * -> replace() replaces the given pattern and returns a NEW string
 * -> by default, replace ONLY replaces the First occurrence of the exact pattern (use /g to replace all exact patterns)
 * -> by default, replace is Case sensitive (use /i to make it case insensitive)
 * 
 */
// let myCity = 'neW yORk CIty, neW YoRk';
myCity = 'neW yORk CIty, neW YoRk, all new YoRKERS, YonRkers'
let myCityAfterReplace_Rk_rK = myCity.replace('Rk', 'rK');
console.log(`\n\nmyCity -> ${myCity}`);
console.log(`myCityAfterReplace_Rk_rK -> ${myCityAfterReplace_Rk_rK}\n\n`);

// If want to replace all exact occurrences
let myCityAfterReplace_All_Rk_rK = myCity.replace(/Rk/g, 'rK');
console.log(`myCityAfterReplace_All_Rk_rK -> ${myCityAfterReplace_All_Rk_rK}\n\n`);

// If want to replace occurrences (Ignoring cases)
let myCityAfterIgnoreCases_Rk_rK = myCity.replace(/Rk/i, 'rK');     // replace first occurrences of Rk (ignoring the cases)
console.log(`myCityAfterIgnoreCases_Rk_rK -> ${myCityAfterIgnoreCases_Rk_rK}\n\n`);

// If want to replace ALL occurrences (Ignoring cases)
let myCityAfterALL_IgnoreCases_Rk_rK = myCity.replace(/Rk/ig, 'rK');     // replace ALL occurrences of Rk (ignoring the cases)
console.log(`myCityAfterALL_IgnoreCases_Rk_rK -> ${myCityAfterALL_IgnoreCases_Rk_rK}\n\n`);

/**
 * Assign value to the variable
 *      if the full-name has more than 14 characters and contains 'els' 
 *          assign 23 in a variable
 *      otherwise
 *          assign 32 in a variable
 */
let fullName = '';
let fullNameLowerCase = fullName.toLowerCase();
let varNum = fullNameLowerCase.length > 14 && fullNameLowerCase.includes('els') ? 23 : 32;

/**
 * To join two or more strings
 * function: concat()
 */

let str1 = 'Hello', str2 = ' dear,' , str3 = 'how are' , str4 = ' you?';

let str = str1 + str2 + str3 + str4;
console.log(str);

let strr = str1.concat(str2, str3, str4);
console.log(strr);

/**
 * '     Hello      sdear  ,       how a    re      you  ?      '   -> 'Hello      sdear  ,       how a    re      you  ?'
 * 
 * 'Hello      sdear  ,       how a    re      you  ?      '        -> 'Hello      sdear  ,       how a    re      you  ?'
 * 
 * 
 * To remove extra spaces from the string
 *      before the 1st character of the stirng
 *      and after the last-character of the string
 * 
 * function: trim()
 * 
 * trim() does NOT change the value in original variable
 * 
 */

let sentence = '     Hello      sdear  ,       how a    re      you  ?      ';
let sentence_trim = sentence.trim();

console.log(`\n\n**${sentence}**`);
console.log('\n\n**'.concat(sentence, '**'));

console.log(`**${sentence_trim}**`);
console.log('**'.concat(sentence_trim, '**'));

/**
 * To increase length of the String by adding a given character
 * function:
 *      padStart() -> adds padding in the beginning
 *      padEnd() -> adds padding in the end
 * 
 * 
 * Hello
 * increase the length of string to 7, it's not 7 already, add # in the end
 * Hello##
 * 
 * stranger
 * increase the length of string to 7, it's not 7 already, add # in the end
 * stranger
 * 
 * holiday
 * increase the length of string to 7, it's not 7 already, add # in the end
 * holiday
 * 
 * 
 */
/**
 * padStart() -> adds padding in the beginning to increase string-length to the given value
 * 
 * input: 2
 *      number : length of string after padding
 *      string : character we would like to use for padding
 * return type:
 *      string
 * 
 */
let padString = 'HelLo';
let padString_AfterPadding = padString.padStart(7, '#');

console.log(`\n\npadString -> ${padString}`);
console.log(`padString_AfterPadding -> ${padString_AfterPadding}`);

/**
 * padEnd() -> adds padding in the ending to increase string-length to the given value
 * 
 * input: 2
 *      number : length of string after padding
 *      string : character we would like to use for padding
 * return type:
 *      string
 */
let padString2 = 'HelLo';
let padString_AfterPadding2 = padString2.padEnd(7, '#');

console.log(`\n\npadString2 -> ${padString2}`);
console.log(`padString_AfterPadding2 -> ${padString_AfterPadding2}`);

let padString_AfterPadding3 = padString2.padEnd(17, '--hello');
console.log(`padString_AfterPadding3 -> ${padString_AfterPadding3}`);

/**
 * To find the character present at any given index
 * function: charAt()
 * 
 * input: 1
 *      number
 * return type:
 *      string
 */
let mySentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
console.log(`\n\nmySentence -> ${mySentence}`);

let charAt_18 = mySentence.charAt(18);
console.log(`Character present at index-18 -> ${charAt_18}`);

// when index is beyond the scope -> gets null
let charAt_999 = mySentence.charAt(999);
console.log(`Character present at index-999 -> ${charAt_999}`);

// invalid index value -> gets null
let charAt_minus1 = mySentence.charAt(-1);
console.log(`Character present at index(-1) -> ${charAt_minus1}`);

/**
 * To find the index at which given pattern (FIRST OCCURRENCE) is exactly present in the string
 * function: indexOf()
 * 
 * input: 1
 *      string (pattern for which we want to find index)
 * return type:
 *      number (index where the pattern is present)
 * 
 * 
 * if the given pattern is exactly present in the string
 *      function returns the index of FIRST OCCURRENCE of the starting of the pattern
 * otherwise
 *      function returns -1
 * 
 * 
 * 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 * 
 * 
 * find the index of first occurrence of 'W'    ->  18
 * 
 * find the index of first occurrence of 'p'    ->  41
 * 
 * find the index of first occurrence of 'P'    ->  0
 * 
 * find the index of first occurrence of 'hat'  ->  7
 * 
 * find the index of first occurrence of 'ZED'  ->  -1
 */
console.log(`\n\nmySentence -> ${mySentence}`);

let indexOf_W = mySentence.indexOf('W');
console.log(`Index of 'W' is -> ${indexOf_W}`);

let indexOf_e = mySentence.indexOf('e');
console.log(`Index of 'e' is -> ${indexOf_e}`);

let indexOf_p = mySentence.indexOf('p');
console.log(`Index of 'p' is -> ${indexOf_p}`);

let indexOf_P = mySentence.indexOf('P');
console.log(`Index of 'P' is -> ${indexOf_P}`);

let indexOf_hat = mySentence.indexOf('hat');
console.log(`Index of 'hat' is -> ${indexOf_hat}`);

let indexOf_ZED = mySentence.indexOf('ZED');
console.log(`Index of 'ZED' is -> ${indexOf_ZED}`);

/**
 * To find the index at which given pattern (LAST OCCURRENCE) is exactly present in the string
 * function: lastIndexOf()
 * 
 * input: 1
 *      string (pattern for which we want to find index)
 * return type:
 *      number (index where the pattern is present)
 * 
 * 
 * if the given pattern is exactly present in the string
 *      function returns the index of LAST OCCURRENCE of the starting of the pattern
 * otherwise
 *      function returns -1
 * 
 * 
 * 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 * 
 * 
 * find the index of first occurrence of 'e'    ->  3
 * 
 * find the index of last occurrence of 'e'    ->  99
 * 
 */
console.log(`\n\nmySentence -> ${mySentence}`);

let lastIndexOf_e = mySentence.lastIndexOf('e');
console.log(`Last index of 'e' -> ${lastIndexOf_e}`);

let lastIndexOf_Page = mySentence.lastIndexOf('Page');
console.log(`\nLast index of 'Page' -> ${lastIndexOf_Page}`);

let indexOf_Page = mySentence.indexOf('Page');
console.log(`Index of 'Page' -> ${indexOf_Page}`);

/**
 * 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 * 
 * Find the index of 'w' in the sentence (ignoring cases)
 */
let mySentence1 = mySentence.toLowerCase()
let indexOf_w = mySentence1.indexOf('w');

// let mySentence1 = mySentence.toLowerCase()
// let indexOfW = mySentence1.indexOf('w')

// var phraseWithLowerCases = phrase.toLowerCase().indexOf('w');

console.log(`\n\nIndex of 'w' (ignoring cases) -> ${indexOf_w}\n`);