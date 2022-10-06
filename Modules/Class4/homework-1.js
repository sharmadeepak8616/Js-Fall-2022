/**
 * Homework - 1
 * 
 * Due date : Friday (Oct-7) eod
 * 
 * Convert temperature values into different units:
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Extra:
 *      Try to find how to get only 2-digits after the decimal point
 * 
 */

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp1 = 60;
let cTemp1 = (fTemp1 - 32) / 1.8;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);