/**
 * Create variable to store name
 */
let myName = 'Happy Peace';
console.log(`myName = ${myName}`);      //  myName = Happy Peace

myName = 'Laugh Often';
console.log(`myName = ${myName}`);      //  myName = Laugh Often

// store planets name ('earth' , 'mercury', ...)
let planet1 = 'Earth';
let planet2 = 'Venus';
let planet3 = 'Mercury';
let planet4 = 'Jupiter';

/**
 * Array -> can store one or more values at the same time
 */
let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Saturn'];
console.log(`typeof planets -> ${typeof planets}`);     // typeof planets -> object

/**
 * Object -> holds key-value pair
 * 
 * 'Deepak Sharma' 'NJ' 'M' 'finance'
 * name : 'Deepak Sharma'
 * state : 'NJ'
 * gender : 'M'
 * paymentMethod : 'finance'
 * let student1 = {
 *      name : 'Deepak Sharma',
 *      state : 'NJ',
 *      age : 20,
 *      gender : 'M',
 *      paymentMethod : 'finance'
 * }
 * 
 * 
 * 'John Doe', 'CA', 'M' 'Paid in full'
 * name : 'John Doe'
 * gender : 'M'
 * paymentMethod : 'Paid in full'
 * state : 'CA'
 * 
 * let student2 = {
 *      name : 'John Doe',
 *      state : 'CA',
 *      age : 21
 *      gender : 'M',
 *      paymentMethod : 'paid in full'
 * }
 * 
 * In an object -> all keys are unique
 *                 keys cannot have space
 * 
 * 
 * 
 * find the gender of student2 -> M
 */

let student1 = {
    name : 'Deepak Sharma',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

console.log(student1);