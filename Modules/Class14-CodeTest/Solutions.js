// Question - 1 - 20
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 */ 
/** 
 * Example:
 * input: [1, 2, 3, 4, 5] , 2  
 * output: [1, 3, 4, 5]
 * 
 * input: [21, 32, 12, 43, 45, 65, 12], 12
 * output: [21, 32, 43, 45, 65]
 * 
 * input: [-1, 2, 43, 65] , 11
 * output: [-1, 2, 43, 65]
 */

console.log('\nQuestion - 1 : Remove number from an array\n');

function removeNumFromArray(numToRemove, numArray) {
    return numArray.filter((num) => (num != numToRemove));
}

const arr1_1 = [1, 2, 3, 4, 5];
console.log(`Input array -> ${arr1_1} | numToRemove -> 2`);
const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
console.log(`Output array -> ${numArrayAfterRemoval1_1}`);
    // [1, 3, 4, 5]
    
const arr1_2 = [21, 32, 12, 43, 45, 65, 12];
console.log(`\nInput array -> ${arr1_2} | numToRemove -> 12`);
const numArrayAfterRemoval1_2 = removeNumFromArray(12, arr1_2);
console.log(`Output array -> ${numArrayAfterRemoval1_2}`);
    // [21, 32, 43, 45, 65]

const arr1_3 = [-1, 2, 43, 65];
console.log(`\nInput array -> ${arr1_3} | numToRemove -> 11`);
const numArrayAfterRemoval1_3 = removeNumFromArray(11, arr1_3);
console.log(`Output array -> ${numArrayAfterRemoval1_3}`);
    // [-1, 2, 43, 65]



// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 * 
 * const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)
 * console.log(updateStudentRecord)
 * 
 */

// --> Method - 1
// Using separate function to convert String into Titlecase
function convertStringIntoTitleCase(inputString) {
    let stringArray = inputString.toLowerCase().split(' ');
    let stringArrayOutput = [];
    stringArray.forEach(value => {
        value = value.charAt(0).toUpperCase() + value.substring(1);
        stringArrayOutput.push(value);
    });
    return stringArrayOutput.join(' ');
}
// using above function in this function to convert names into titleCase
// and replacing name value with TitleCased names
function titleCaseAllStudentNames(allStudentData) {
    allStudentData.forEach(student => {
        student.name = convertStringIntoTitleCase(student.name);
    });
    return allStudentData;
}

// --> Method - 2
function titleCaseAllStudentNames2(allStudentData) {
    // using above function in this function to convert names into titleCase
    allStudentData.map(student => convertStringIntoTitleCase(student.name));
    return allStudentData;
}

// --> Method - 3 (by Konstancia Milova)
function titleCaseAllStudentNames3(allStudentData) {
    allStudentData.forEach(student => {
        student.name = student.name.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    });
    return allStudentData;
}


console.log('\nQuestion - 2 : TitleCase Student name\n');

let allStudentData2_1 = [
    {
        id: 1,
        name: 'haRrY PoTTer',
    },
    {
        id: 2,
        name: 'KiNG koNG',
    },
    {
        id: 3,
        name: 'laNa',
    },
    {
        id: 4,
        name: 'cHaSe LAN',
    },
    {
        id: 5,
        name: 'mAYa pASha',
    }
];

console.log('Input Student record:');
console.log(allStudentData2_1);

console.log('\nUpdated Student record:\n');
const updateStudentRecord2_1 = titleCaseAllStudentNames(allStudentData2_1)
console.log('Method - 1:');
console.log(updateStudentRecord2_1);

console.log('Method - 2:');
const updateStudentRecord2_2 = titleCaseAllStudentNames2(allStudentData2_1)
console.log(updateStudentRecord2_2);

console.log('Method - 3:');
const updateStudentRecord2_3 = titleCaseAllStudentNames3(allStudentData2_1)
console.log(updateStudentRecord2_3);




// Question - 3 - 50
let allStudentRecords_3 = [
    {
        id: 1,
        name: 'Adien owjh',
    },
    {
        id: 2,
        name: 'kristEn sole',
    },
    {
        id: 3,
        name: 'ReMA',
    },
    {
        id: 4,
        name: 'chess GamE',
    },
    {
        id: 5,
        name: 'mAYa',
    }
];
/**
 * Create a function to update first name for the student.
 * Student will provide the student-id and NEW FIRST NAME
 * 
 * if student is present in the records AND new FIRST name is different (or NOT EXACTLY present) than already present first name
 *      update the record with student's first name.
 *      print message -> Your name is updated successfully, new full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student is present in the records AND new FIRST name is EXACTLY SAME as already present in the records
 *      Do not update the student name
 *      print message -> Provided New firstName is same as of in the records, full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student-id is NOT present in the records
 *      Do not update the student name
 *      print message -> Invalid student id provided.
 */

console.log('\nQuestion - 3 : Update Student first-name\n');
console.log('Input Student record:');
console.log(allStudentRecords_3);

function updateFirstName(sId, newFirstName, studentRecords) {
    // getting student-object based on sId-value
    const studentFile = studentRecords.find(s => s.id === sId);
    if (studentFile) {    // if get studentFile, go to checking/updating firstName ; otherwise go to else block (line #200)
        if (newFirstName.localeCompare(studentFile.name.split(' ')[0]) === 0) {    // checking if newFirstName is SAME as already stored
            // when newFirstName is same as firstName in the records
            console.log(`\nProvided New firstName is same as of in the records, full name in the records: "${studentFile.name}"`);
        } else {
            // when newFirstName is NOT same as firstName in the records
            console.log(`\nName in the records: "${studentFile.name}", updating name...`);
            // using fill to replace first-name
            // steps:
            /*
                1. split student-name (getting student-name value into an array)
                2. replacing index-0 value with newFirstName
                3. join array-values to construct full-name (string)
            */
            studentFile.name = studentFile.name.split(' ').fill(newFirstName, 0, 1).join(' ');
            console.log(`Your name is updated successfully, new full name in the records: "${studentFile.name}"`);
        }
    } else {
        // when sID is invalid
        console.log(`\nInvalid student id provided : ${sId}`);
    }
}


updateFirstName(1, 'justin', allStudentRecords_3)
    // Your name is updated successfully, new full name in the records: "justin owjh"

updateFirstName(5, 'simmy', allStudentRecords_3);
    // Your name is updated successfully, new full name in the records: "simmy"

updateFirstName(6, 'sole', allStudentRecords_3);
    // Invalid student id provided.

updateFirstName(4, 'chess', allStudentRecords_3);
    // Provided New firstName is same as of in the records, full name in the records: "chess GamE"




















