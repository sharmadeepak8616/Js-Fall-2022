let student2 = {
    name : 'John DOe',
    state : 'NY',
    age : 22,
    gender : 'M',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing','CS basics']
}

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
/**
 * 
 * 
 * 
 * pastJobs
 *      companyName, numOfYears, title
 * 
 *  companyName : 'abc'
 *  numOfYears : 2
 *  title : 'XYZ'
 * 
 *  companyName : 'abc'
 *  numOfYears : 2
 *  title : 'XYZ'
 * 
 * 
 * 
 * 
 */
console.log('\nPrinting student1 - object\n');
console.log(student1);

console.log('\nPrinting value of name-attribute from student1-object');
console.log(student1.name);             // using dot-operator getting value of the mentioned attribute
console.log(student1['name']);          // using square-bracket getting value of the mentioned attribute

console.log('\nPrinting value of companyName from first pastJobs-attribute from student1-object');
console.log(student1.pastJobs[0].companyName);

console.log('\nPrinting value of first value in the knownSkills from student1-object');
console.log(`${student1.knownSkills[0]} ${student1.knownSkills[2]}`);       // Java Js-Basics




let myObj = {
    myName : 'ABC',
    5 : 'digit prop',
    age : 20,
    true : 22,
    11 : false,
    'my key' : 100
}


