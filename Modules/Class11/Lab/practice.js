/**
 * Create function to find average of an array
 * 
 * 1. what is the purpose of the function?
 *      average of an array  (avgArray)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (array)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> number
 * 
 * 
 * 
 */
function avgArray (inputArray) {
    let total = null;
    for (let i=0 ; i <= inputArray.length-1 ; i++) {
        total = total + inputArray[i];
    }
    let avg = total / inputArray.length;
     return avg;
}

let numbers = [23, 12, 43, 10, 5, -10];
let numbers_avg = avgArray(numbers);
console.log(numbers_avg);

let numbers2 = [5, -10];
let numbers2_avg = avgArray(numbers2);
console.log(numbers2_avg);

/**
 * find the student names which are of length > 5 or contains 'o' (ignoring cases)
 * 
 * [deepak, zia, zahid, kamil, sam, fara, joy, eli, utane]
 * arr = []
 * 
 * if (length > 5 or contains 'o') {
 *      add name in arr (using push, unshift or splice)
 * }
 * 
 * arr -> [deepak, joy]
 * 
 * return arr
 * 
 */


/**
 * 
 */

















