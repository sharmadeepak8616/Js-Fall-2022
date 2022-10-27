/**
 * Due date: Oct 16 eod
 */


/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */
/**
 * 
 * sports.includes['BASKETBALL'] && sports.indexOf['BASKETBALL'] !== 2
 * sports.indexOf['BASKETBALL'] !== -1 && sports.indexOf['BASKETBALL'] !== 2
 *      print "BASKETBALL is mentioned in the sports array"
 * 
 * sports.indexOf['BASKETBALL'] === 2
 *      print "BASKETBALL is present at index-2"
 * 
 * sports.includes['BASKETBALL'] === false
 * sports.indexOf['BASKETBALL'] === -1
 *      replace index-2 value with BASKETBALL and print the value which you replaced value.
 *      (using fill or splice)
 */

const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
console.log(`\n\nsports -> ${sports}\n\n`);

let indexOf_BASKETBALL = sports.indexOf('BASKETBALL');

if (indexOf_BASKETBALL !== -1 && indexOf_BASKETBALL !== 2) {        // [BASKETBALL IS PRESENT IN ARRAY BUT NOT AT INDEX-2] - false
    console.log("BASKETBALL is mentioned in the sports array");
} else if (indexOf_BASKETBALL === 2) {                              // [BASKETBALL IS AT INDEX-2] - false
    console.log("BASKETBALL is present at index-2");
} else {
    let removedValue = sports.splice(2, 1, 'BASKETBALL');
    console.log(`Removed value -> ${removedValue}`);
}

console.log(`\n\nsports -> ${sports}\n\n`);

if (sports[2] !== 'BASKETBALL' && sports.includes('BASKETBALL')) {        // [BASKETBALL IS PRESENT IN ARRAY BUT NOT AT INDEX-2] - false
    console.log("BASKETBALL is mentioned in the sports array");
} else if (indexOf_BASKETBALL === 2) {                                    // [BASKETBALL IS AT INDEX-2] - false
    console.log("BASKETBALL is present at index-2");
} else {
    let removedValue = sports.splice(2, 1, 'BASKETBALL');
    console.log(`Removed value -> ${removedValue}`);
}



/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */

/**
 * Invalid situation
 *      if (studentScore > maxScore OR studentScore < 0)
 *          print "Invalid student score"
 *     else 
 *          let percentage = (studentScore/maxStore)*100        // xx.yy
 * 
 *          percentage >= 91.00
 *              grade = 'A';
 *          percentage >= 81.00
 *              grade = 'B'
 *          percentage >= 71.00
 *              grade = 'C'
 *
 * 
 */
console.log('\n\nQuestion - 3\n\n');
let studentScore = -160;
let maxScore = -150;
let percentage = 0;
let grade = '';

if (studentScore > maxScore || studentScore < 0) {
    console.log('Invalid student score');
} else {
    let percentage = (studentScore/maxScore)*100

    if (percentage >= 91.00) {
        grade = 'A';
    } else if (percentage >= 81.00) {
        grade = 'B';
    } else if (percentage >= 71.00) {
        grade = 'C';
    } else if (percentage >= 61.00) {
        grade = 'D';
    } else if (percentage >= 51.00) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    console.log(`Your percentage is ${percentage}% and your Grade is ${grade}`);
}








/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */