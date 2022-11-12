const Students = require("./Students");

// Creating object of Students-class
const s1 = new Students();
/**
 * the object will get it's own set of class-variables with default values
 *      s1 -> studentData
 * 
 * s1 -> studentData, memberData
    studentData = {
        sId: 0,
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }

    memberData = {
        mName: '',
        mAge: '',
        mEmail: '',
        mAddress: ''
    }
 * 
 */

// Creating object of Students-class
const s2 = new Students();
/**
 * the object will get it's own set of class-variables
 * s2 -> studentData, memberData
    studentData = {
        sId: 0,
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }

    memberData = {
        mName: '',
        mAge: '',
        mEmail: '',
        mAddress: ''
    }
 */


s1.enrollment(20, 'qA', 'S1', 's1@test.com', 'USA');
/**
   studentData = {
        sName: 'S1',
        sAge: 20,
        sId: 0,
        sEmail: 's1@test.com',
        sCourseName: 'QA',
        sTopicsCovered: '',
        sBalance: 100,
        sGrade: '',
        sAddress: 'USA',
    }
 */



s1.getProfile();
/**
        :::: Profile :::
            Id: 0
            Name: S1
            Email: s1@test.com
            Balance: 100
            ----------------------
 */

s2.getProfile();
/**
        :::: Profile :::
            Id: 0
            Name: 
            Email: 
            Balance: 0
            ----------------------
*/
