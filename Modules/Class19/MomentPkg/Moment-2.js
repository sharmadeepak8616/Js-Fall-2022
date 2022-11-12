/**
 * In terminal, perform command:
 *      npm install moment
 *      npm install chai
 */

const moment = require('moment');


const now = moment();
console.log(`\n\nnow.format() --> ${now.format()}\n`);


const now2 = moment().month('Aug').year(2025).date(16);;
console.log(`\n\nnow2.format() --> ${now2.format()}\n`);


const now3 = moment().month('Jan').year(1990).date(7);
console.log(`\n\nnow3.format() --> ${now3.format()}\n`);


/**
 * To find if a date/moment comes after another date/moment object
 * function: isAfter()
 * 
 * if date/moment comes after another date/moment object
 *      function returns true
 * otherwise
 *      function returns false     
 */

// is now come after now2
const nowAfterNow2 = now.isAfter(now2);
console.log(`\n\nnow.isAfter(now2) --> ${nowAfterNow2}\n`);

// is now come after now3
const nowAfterNow3 = now.isAfter(now3);
console.log(`\n\nnow.isAfter(now3) --> ${nowAfterNow3}\n`);


/**
 * To find if a date/moment comes before another date/moment object
 * function: isBefore()
 * 
 * if date/moment comes before another date/moment object
 *      function returns true
 * otherwise
 *      function returns false     
 */
// is now come before now2
const nowBeforeNow2 = now.isBefore(now2);
console.log(`\n\nnow.isBefore(now2) --> ${nowBeforeNow2}\n`);

// is now come after now3
const nowBeforeNow3 = now.isBefore(now3);
console.log(`\n\nnow.isBefore(now3) --> ${nowBeforeNow3}\n`);

/**
 * To find if a date/moment equals to another date/moment object
 * function: isSame()
 * 
 * if date/moment is same as of another date/moment object
 *      function returns true
 * otherwise
 *      function returns false     
 */

const nowSameNow2 = now.isSame(now2);
console.log(`\n\nnow.isSame(now3) --> ${nowSameNow2}\n`);

const now4 = moment().month('Nov').date(11);
console.log(`\n\nnow4.format() --> ${now4.format()}\n`);
console.log(`now4.millisecond() --> ${now4.millisecond()}\n`);


console.log(`\n\nnow.format() --> ${now.format()}\n`);
console.log(`now.millisecond() --> ${now.millisecond()}\n`);

const nowSameNow4 = now.isSame(now4);
console.log(`\n\nnow.isSame(now4) --> ${nowSameNow4}\n`);

/**
 * To find if a date/moment comes in between two date/moment objects
 * function: isBetween()
 * 
 * if date/moment comes in between two date/moment objects
 *      function returns true
 * otherwise
 *      function returns false  
 */

/*
    now.format() --> 2022-11-11T19:09:21-05:00
    now2.format() --> 2025-08-16T19:09:21-04:00
    now3.format() --> 1990-01-07T19:09:21-05:00
*/

console.log(now.format());
console.log(now2.format());
console.log(now3.format());

const nowIsBetweenNow2Now3 = now.isBetween(now3, now2);
console.log(`\n\nnow.isBetween(now2, now3) --> ${nowIsBetweenNow2Now3}\n`);


const now3IsBetweenNowNow2 = now3.isBetween(now, now2);
console.log(`\n\nnow3.isBetween(now, now3) --> ${now3IsBetweenNowNow2}\n`);





















