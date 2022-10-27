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

/**
 * for-of
 * 
 * --> works with Array or String
 * 
 * index-0 will be assigned to varName ; then code inside loop will execute
 * index-1 will be assigned to varName ; then code inside loop will execute
 * index-2 will be assigned to varName ; then code inside loop will execute
 * ... 
 * ... 
 * index-last will be assigned to varName ; then code inside loop will execute
 * 
 * 
 * Syntax:
 * for (let varName of arrayName) {
 *      varName will get index-0 value from array/String
 *      code inside
 *      for-of loop 
 * }
 * 
 * 
 */
console.log('\n\nUsing for-of loop with Array\n\n');
let sports = ['Football', 'Soccer', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

for (let sName of sports) {
    console.log(sName);
}

// Print all value but last-index one (using for-of)
console.log('\n\nPrint all value but last-index one (using for-of)\n\n');
let index = 0;
for (let sName of sports) {
    if (index != sports.length-1) {
        console.log(sName);
    }
    index++;
}

// Print all value but NOT 'Ping pong'
console.log('\n\nPrint all value but NOT "Ping pong" (using for-of)\n\n');
let string1 = 'ping pong'
for (let sName of sports) {
    if (sName.toLowerCase().localeCompare(string1) !== 0) {
        console.log(sName);
    }
}

/**
 * for-of with String
 *
 * index-0 will be assigned to varName ; then code inside loop will execute
 * index-1 will be assigned to varName ; then code inside loop will execute
 * index-2 will be assigned to varName ; then code inside loop will execute
 * ... 
 * ... 
 * index-last will be assigned to varName ; then code inside loop will execute 
 * 
 * Syntax:
 * for (let varName of strName) {
 *      varName will get index-0 value from String
 *      code inside
 *      for-of loop 
 * }
 * 
 */
console.log('\n\nfor-of with String\n\n');

let myString = 'Hello World';

for (const letter of myString) {
    console.log(letter);
}

// Print all letters in below format using normal-for loop
/*
    H       myString.charAt(0)
    e       myString.charAt(1)
    l       myString.charAt(2)
    l
    o
    
    W
    o
    r
    l
    d       myString.charAt(lastIndex)      i=0,1,2,3,....,lastIndex  i<=lastIndex
*/
console.log('\n\nPrint all letters in below format using normal-for loop');
for (let i=0 ; i <= myString.length-1 ; i++) {
    console.log(myString.charAt(i));
}

/**
 * for-in
 * 
 * --> works with object
 * 
 * Syntax:
 * for (const varName in objectName) {
 *      code to execute
 * }
 * 
 * for 1st-iteration of for-in loop, varName will be the first attribute from the objectName
 * for 2nd-iteration of for-in loop, varName will be the second attribute from the objectName
 * for 3rd-iteration of for-in loop, varName will be the third attribute from the objectName
 * ... 
 * ... 
 * for last-iteration of for-in loop, varName will be the last attribute from the objectName
 */
console.log('\n\n for-in loop with object\n\n');
let student1 = {
    name : 'Deepak Sharma',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

for (const attr in student1) {
    console.log(attr);
    console.log(student1[attr]);
}

/**
 * forEach
 * 
 * --> works with Array and function
 * 
 * Syntax:
 * arrayName.forEach(function (varName) {
 *      code in the function of the forEach loop
 * });
 * 
 * index-0-value will be assigned to varName, and the function will be executed
 * index-1-value will be assigned to varName, and the function will be executed
 * index-2-value will be assigned to varName, and the function will be executed
 * ... 
 * ... 
 * index-last-value will be assigned to varName, and the function will be executed
 * 
 */
sports = ['Football', 'Soccer', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

console.log('\n\nUsing forEach loop with Array\n\n');
sports.forEach(function (val) {
    console.log(val);
});

// Print all value but last-index one (using forEach)
console.log('\n\nPrint all value but last-index one (using forEach)\n\n');
let index1 = 0;
sports.forEach(function (sName1) {
        if (index1 != sports.length-1) {
        console.log(sName1);
    }
    index1++;
});

console.log('\n\nPrint all value but NOT "Ping pong" (using forEach)\n\n');
let string2 = 'ping pong'
sports.forEach(function (sportName) {
    if (sportName.toLowerCase().localeCompare(string2) !== 0) {
        console.log(sportName);
    }
});

// find/print the index of First occurrence of 'BaseBall' (ignoring cases)

/*
    pick index-0 value
    if (index-0 value === baseball) { 
        indexAns = 0
    }

    pick index-1 value
    if (index-1 value === baseball) {
        indexAns = 1
    }

    pick index-2 value
    if (index-2 value === baseball) {
        indexAns = 2
    }

    pick index-3 value
    if (index-3 value === baseball) {
        indexAns = 3
    }
    ... 
    ... 
    pick index-last value
    if (index-last value === baseball) {}
*/

/*

    pick index-i value                      i =0,1,2,3...,lastIndex     i <= lastIndex  i++
    if (index-i value === baseball) { 
        indexAns = 0
    }

*/;
let favSports = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let indexAns = -1

for (let i=0 ; i <= favSports.length-1 ; i++) {
    if (favSports[i].toLowerCase().localeCompare('baseball') === 0) {
        indexAns = i;
        break;          //   to stop/break loop
    }
}
console.log('\n\nfind/print the index of First occurrence of "BaseBall" (ignoring cases)\n\n');
console.log(`favSports -> ${favSports}`);
console.log(`\nindexAns -> ${indexAns}`);

let couldBe = 0;
for (const sName of favSports) {
    if (sName.toLowerCase().localeCompare('baseball') === 0) {
        break;          //   to stop/break loop
    }
    couldBe++;
}

console.log('\n\nUsing for-of loop');
console.log(`\ncouldBe -> ${couldBe}\n\n`);