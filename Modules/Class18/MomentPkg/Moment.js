/**
 * In terminal, perform command:
 *      npm install moment
 *      npm install chai
 */

const moment = require('moment');

/**
 * moment()
 *      gets the current timestamp
 */
const now = moment();

console.log(`now -> ${now}\n`);

/**
 * format()
 *      is to print the timeStamp in readable format
 */
console.log(`now.format() -> ${now.format()}\n`);

/**
 * date()
 *      is to get the date from the timestamp
 */
console.log(`now.date() -> ${now.date()}\n`);

/**
 * month()
 *      is to get the month from the timestamp
 * 
 * month starts with 0
 * jan = 0
 * feb = 1
 * ... 
 * ... 
 * nov = 10
 * dec = 11
 */
console.log(`now.month() -> ${now.month()}\n`);


/**
 * year()
 *      is to get the year from the timestamp
 */
console.log(`now.year() -> ${now.year()}\n`);


/**
 * hour()
 *      is to get the hour from the timestamp
 */
console.log(`now.hour() -> ${now.hour()}\n`);


/**
 * minute()
 *      is to get the minute from the timestamp
 */
console.log(`now.minute() -> ${now.minute()}\n`);


/**
 * second()
 *      is to get the second from the timestamp
 */
console.log(`now.second() -> ${now.second()}\n`);

/**
 * millisecond()
 *      is to get the millisecond from the timestamp
 */
console.log(`now.millisecond() -> ${now.millisecond()}\n`);

/**
 * To format date(or timestamp) in user defined format
 */
/**
 * Dates -> D -- DD
 * Month -> M -- MM --- MMM ---- MMMM
 * Year -> YY -- YYYY
 * Hour -> h -- hh -- H -- HH (h: 12-hour format ; H: 24-hour format)
 * Minute -> m -- mm
 * Second -> s -- ss
 * Timezone -> Z -- ZZ
 * am/pm -> a -- A (a: am/pm ; A: AM/PM)
 * DayName -> ddd -- dddd
 */

// format date in "MMM D # YYYY h - m - s - a"
/*
    Wed Nov 09 2022 20:42:51 GMT-0500
    "MMM D # YYYY h - m - s - a" -> Nov 9 # 2022 8 - 42 - 51 - pm

    Fri Nov 11 2022 23:42:51 GMT-0500
    "MMM D # YYYY h - m - s - a" -> Nov 11 # 2022 11 - 42 - 51 - pm

*/

// format date in "MMM DD # YYYY hh - m - s - a"
//                 Nov 09 # 2022 08 - 40 - 10 - pm

console.log(`now.format('MMM DD # YYYY hh - m - s - A') -> ${now.format('MMM DD # YYYY hh - m - s - A')}\n`);

/**
 * To subtract or add fields in a date
 * 
 * add()
 * subtract()
 */
/**
 * add()
 *      adds the attribute in the current date
 * 
 * to add days -> 'days'
 * to add months -> 'months'
 * to add year -> 'year'
 * to add hour -> 'hour'
 * to add minute -> 'minute'
 * to add second -> 'second'
 */
const now2 = moment();
console.log(`\n\nnow2.format() --> ${now2.format()}\n`);

now2.add(37, 'days');
now2.add(2, 'months');
now2.add(14, 'hour');
now2.subtract(14, 'days');      // now2.add(-14, 'days');

console.log(`\n\nnow2.format() --> ${now2.format()}\n`);


/**
 * To verify if the String is in a valid/expected date format
 * function: isValid()
 * 
 * if the String is in valid/expected date format
 *      function returns true
 * otherwise
 *      function returns false
 */

var dateStr = 'Jun/6/2022';
// MMMM D, YYYY

const result = moment(dateStr, 'MMMM D, YYYY').isValid();       // -- Check
console.log(`\nresult -> ${result}\n`);


/**
 * To Set the date in moment object to a particular timestamp.
 */
const now3 = moment().month('Jan').year(1990).date(7);

console.log(`\n\nnow3.format() --> ${now3.format()}\n`);
console.log(`\n\nnow3.format('dddd, MMM DD YY HH:mm:ss') --> ${now3.format('dddd, MMM DD YY HH:mm:ss')}\n`);


now3.add(7, 'days');

console.log(`\n\nnow3.format() --> ${now3.format()}\n`);
console.log(`\n\nnow3.format('dddd, MMM DD YY HH:mm:ss') --> ${now3.format('dddd, MMM DD YY HH:mm:ss')}\n`);


/**
 * Difference between two dates(or moment-objects)
 * 
 * function: diff()
 */
const diffInDays = now2.diff(now3, 'days'); // hours, minutes, year, months, weeks

console.log(`\ndiffInDays -> ${diffInDays}\n`);



