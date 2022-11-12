const { expect } = require('chai');

/**
 * chai library helps us to verify the result of test-step.
 * Based on the actual-result vs expected-result, either testcase will pass or fail.
 */
/**
 * tc-1:
 *      input array = [1, 2, 3, 4, 5]
 *      number to remove = 2
 * 
 *      Verify ans is [1, 3, 4, 5]
 * 
 * tc-2:
 *      input array = [21, 32, 12, 43, 45, 65, 12]
 *      number to remove = 12
 * 
 *      Verify ans is [21, 32, 43, 45, 65]
 * 
 * 
 * tc-3:
 *      input array = [-1, 2, 43, 65]
 *      number to remove = 11
 * 
 *      Verify ans is [-1, 2, 43, 65]
 * 
 */

function removeNumFromArray(numToRemove, numArray) {
    return numArray.filter((num) => (num != numToRemove));
}

const arr1_1 = [1, 2, 3, 4, 5];
const numToRemove = 2;
const numArrayAfterRemoval1_1 = removeNumFromArray(numToRemove, arr1_1);

// if (numArrayAfterRemoval1_1 === [1, 2, 3, 4, 5]) {
//     console.log('Pass');
// } else {
//     console.log('FAIL');
// }
// Verify numArrayAfterRemoval1_1 equals [1, 3, 4, 5]
expect(numArrayAfterRemoval1_1, 'ERROR').to.deep.equal([1, 3, 4, 5]);

const num1 = 5, num2 = 20;
const res = num1 * num2;

// Verify res is equals to 100
expect(res, 'res is not same as expected').to.equal(100);

const num2GrNum1 = num2 > num1;

// Verify num2GrNum1 is true
// expect(num2GrNum1, 'num2 is NOT greater than num1').to.equal(true);
expect(num2GrNum1, 'num2 is NOT greater than num1').to.be.true;


// Verify num2GrNum1 is false
// expect(num2GrNum1, 'num2 is NOT greater than num1').to.be.false;
