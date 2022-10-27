/**
 * Object -> represented by {}
 * 
 * 
 * 
 * Syntax:
 * let objectName = {};                 // empty object
 *      OR
 * let objectName = new Object();       // empty object
 * 
 * let objectName = {
 *      key1 : value1,
 *      key2 : value2,
 *      key3 : value3
 * }
 * 
 * -> data is stored in key-value pair
 * -> key is also known attributes or properties
 * -> key is always going to be unique in an object
 * -> key is always going to be a String datatype
 * -> key can be digit, string (with/without) spaces.
 * -> keys with digits are going to be priority (in increasing order)
 *      then the string-keys in order of insertion
 * 
 */

let myObj = {
    myName : 'ABC',
    5 : 'digit prop',
    age : 20,
    true : 22,
    11 : false,
    'my key' : 100
}

console.log(myObj);

console.log('\nApplying for-in on the myObj\n');

for (let prop in myObj) {
    console.log(prop);      // myName
    console.log(typeof prop);

    console.log(`myObj.prop -> ${myObj.prop}`);     // undefined

    console.log(`myObj.prop -> ${myObj[prop]}`);     // ABC
    console.log(`typeof myObj.prop -> ${typeof myObj[prop]}\n`);
}


/**
 * To add key-value in the object
 */
myObj.gender = 'F';
console.log(myObj);

myObj['ssnNumber'] = 1234;
console.log(myObj);

myObj['states lived in'] = ['NY', 'CA', 'NJ', 'TX', 'NC'];
console.log(myObj);


// Print the value of "ssnNumber" attribute.
console.log(myObj.ssnNumber);

// Print the value of "my key" attribute.
console.log(myObj['my key']);

// Print the value of "5" attribute.
console.log(myObj[5]);

/**
 * If the key is a digit OR has a space, to access the corresponding value,
 *      we have to use []
 */
console.log('\nPrinting myObj...');
console.log(myObj);
/**
 * To delete a key-value pair from an object
 * operator - delete
 * 
 * operator will delete the attribute (if exists) OR if the attribute doesn't exist
 *      operator returns true
 * if operator (for any reason) unable to delete the attribute
 *      operator returns false
 * 
 * Note -> delete operator changes the original object
 */
// Deleting the ssnNumber and it's value
console.log(delete myObj.ssnNumber);


console.log('\nPrinting myObj');
console.log(myObj);

// Deleting the '11' and it's value
console.log(delete myObj['11']);

console.log('\nPrinting myObj');
console.log(myObj);

console.log(delete myObj.wow);

console.log('\nPrinting myObj');
console.log(myObj);

console.log(myObj.myName);      // 'ABC'

console.log('\nPrinting attribute which does not exist in the object');
console.log(myObj.ssnNumber);   // undefined

/**
 * To verify if a data is present as one of the attributes.
 * operator -> in
 * 
 * if the given data is exactly present as one of the attributes
 *      operator returns true
 * otherwise
 *      operator returns false
 * 
 * 
 */

const abcd_AsAttr = 'abcd' in myObj;
console.log(`\nis "abcd" present as one of the attributes -> ${abcd_AsAttr}`);

const Gender_AsAttr = 'Gender' in myObj;
console.log(`\nis "Gender" present as one of the attributes -> ${Gender_AsAttr}`);

const myName_AsAttr = 'myName' in myObj;
console.log(`\nis "myName" present as one of the attributes -> ${myName_AsAttr}`);

const states_AsAttr = 'states' in myObj;
console.log(`\nis "states" present as one of the attributes -> ${states_AsAttr}`);

const statesLivedIn_AsAttr = 'states lived in' in myObj;
console.log(`\nis "states lived in" present as one of the attributes -> ${states_AsAttr}`);



// print all keys of an object







