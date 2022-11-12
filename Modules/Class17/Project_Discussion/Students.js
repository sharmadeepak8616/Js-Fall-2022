const Members = require("./Members");
const Helper = require("./Helper");

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

class Students extends Members {

    // variables (Class/Field variables)
    studentData = {
        sId: 0,
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }

    static studentIdTracker = 100;

    /*
        functions
    */
    /**
     *      -> create function for activities:
     *          -> enrollment
     *          -> changeName
     *          -> changeCourse
     *          -> getProfile
     *          -> makePayment
     *          -> changeAddress
     *          -> dropFromCourse
     *          -> bestWishes
     */


    /**
     * -> enrollment
     *  age >= 16
     *      if not, do not enroll and show message, Student has to be of age 16 or above
     * 
     *  if invalid course name 
     *      do not enroll and show message, Please enter a valid course name. Course entered is "ABC"
     * 
     * if data is correct
     *      show message, Congratulations for enrolling in XYZ course
     *                    Your student id : SXXX
     * 
     * courseName, age
     */
    // number, 4-string
    constructor(age, courseName, name, email, address) {
        super();    // to execute parent constructor
        if (age < 16 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
            throw 'incomplete data';
        } else {
            const cObject = this.verifyCourseName(courseName);
            if (!cObject) {
                console.log(`Please enter a valid course name. Course entered is "${courseName}"`);
                throw 'Invalid courseName';
            } else {
                // start enrollment process
                this.memberData.mName = Helper.toTitleCase(name);
                this.memberData.mAge = age;
                this.memberData.mEmail = email;
                this.memberData.mAddress = address;
                this.studentData.sBalance = cObject.cFee;
                this.studentData.sCourseName = cObject.cName;
                Students.studentIdTracker++;
                this.studentData.sId = `S${Students.studentIdTracker}`;
                console.log(`Congratulations for enrolling in ${cObject.cName} course.\nStudent id: S${Students.studentIdTracker}`);
            }
        }
    }



    /**
     * This function is to verify 
     *  if the courseName exists as one of the courses in the courseData
     * 
     * if courseName exists
     *      returns courseObject
     * otherwise
     *      returns undefined
     * 
     */
    verifyCourseName(courseName) {
        return courseData.find(
            cData => cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0
        )
    }

    /**
     * -> getProfile
     * Show:
     * Profile:::
     * Id: student-id
     * Name: student-name
     * Email: student-email
     * Balance: student-balance
     * Address: student-address
     * 
     */
    getProfile(studentId) {
        console.log(
            `\n\t:::: Profile :::
            Id: ${this.studentData.sId}
            Name: ${this.memberData.mName}
            Email: ${this.memberData.mEmail}
            Balance: ${this.studentData.sBalance}
            ----------------------\n`
        );
    }

    // changeName
    // changeCourse
    // makePayment

    /**
     * bestWishes()
     * 
     * To send wishes/messages to Institute on behalf on all Students
     */
    static bestWishes(msg) {
        console.log(`On behalf of all students -> ${msg}`);
    }











}
module.exports = Students;

