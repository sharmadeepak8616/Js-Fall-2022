/**
 * Advanced Array functions:
 * 
 * map()
 * filter()
 * every()
 * findIndex()
 * find()
 * reduce()
 * 
 */

/**
 * To find the FIRST index value at which given condition is statisfied
 * 
 * function: findIndex()
 */
console.log('\n findIndex - function \n');

let fruits = ['apple', 'banana', 'cherry'];

// find the first value in array which has length greater than 5
let firstFruitName_LenGr5 = fruits.findIndex(name => name.length > 5);

console.log(`\nFirst index at which fruit-name with length > 5 -> ${firstFruitName_LenGr5}`);
console.log(`First fruit-name with length > 5 -> ${fruits[firstFruitName_LenGr5]}\n`);


/**
 * To find the first value which statisfy the given condition(s)
 * function: find()
 */
console.log('\n find - function \n');
let accountData = [
    {
        name: "Saving Account - 1",
        id: 9876
    },
    {
        name: "Saving Account - 2",
        id: 8765
    },
    {
        name: "Saving Account - 3",
        id: 6543
    },
    {
        name: "Saving Account - 4",
        id: 6543
    },
    {
        name: "Saving Account - 5",
        id: 5432
    }
];

// print the account name with id=6543
let acc6543 = accountData.find(accData => accData.id === 6543);
console.log(acc6543.name);


/**
 * To execute a function on every array-element to produce a single value
 * function: reduce()
 */
console.log('\n reduce - function \n');

let numbers = [8, 3, 2, 5, -1, 5, 2];

numbers.reduce((total, num) => total + num);
/**
 * total = 8
 * num = 3
 *      total = 11
 * 
 * total = 11
 * num = 2
 *      total = 13
 * 
 * total = 13
 * num = 5
 *      total = 18
 */

function avgArray(numbers) {
    let arrayTotal = numbers.reduce((total, num) => total + num);
    return arrayTotal / numbers.length;
}




















