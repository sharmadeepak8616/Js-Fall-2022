const courseData = [
    {
        cName : 'QA',
        cFee : 100
    },
    {
        cName : 'Front End',
        cFee : 200
    },
    {
        cName : 'Back End',
        cFee : 300
    },
    {
        cName : 'PM',
        cFee : 400
    }
]


for (let i=0 ; i < courseData.length ; i++) {
    console.log(courseData[i]);
}

// for-of
// forEach

for (course of courseData) {
    
    for (data in course) {

        console.log(`${data},${course[data]}`);

    }

}
/*
    outer-for-loop
        course = {
            cName : 'QA',
            cFee : 100
        }
        inner-for-loop
            cName,QA
            cFee,100
    outer-for-loop
        course = {
            cName : 'Front End',
            cFee : 200
        }
        inner-for-loop
            cName,Front End
            cFee,200
*/

// find the fee for QA course
/*
        pick a course-object
            check if name = QA
            return the course-object
            and stop loop
*/

let myCourse = {};
for (course of courseData) {
    if (course.cName === 'QA') {
        myCourse = course;
        break;
    }
}
// return myCourse;


// using find-function
courseData.find(course => course.cName === 'QA');


let student = {
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
    schools: {
        high: "NY High School",
        middle: 'NY Middle School',
        elementary: 'NY Elementary School'
    },
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

console.log('\n**************************');
// for-in
for (const attr in student) {
    console.log(`\n${attr} -> ${student[attr]}`);
    console.log(typeof (student[attr]));

    if (attr === 'pastJobs' || attr === 'knownSkills') {
        for (abc of student[attr]) {
            console.log(abc);
        }
    }

}




