const Members = require("./Members");
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
     *                    Your student id : XX
     * 
     * courseName, age
     */
    enrollment(age, courseName, name, email, address) {
        if (age < 16) {
            console.log('Student has to be of age 16 or above');
        } else {
            const cObject = this.verifyCourseName(courseName);
            if (!cObject) {
                console.log(`Please enter a valid course name. Course entered is "${courseName}"`);
            } else {
                // start enrollment process
                this.memberData.mName = name;
                this.memberData.mAge = age;
                this.memberData.mEmail = email;
                this.memberData.mAddress = address;
                this.studentData.sBalance = cObject.cFee;
                this.studentData.sCourseName = cObject.cName;
                // write to generate student-id
                console.log(`Congratulations for enrolling in ${cObject.cName} course.\nStudent id: coming soon`);
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
    getProfile() {
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










    changeName() {
        // code
    }



}
module.exports = Students;