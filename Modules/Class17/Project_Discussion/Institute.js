const Students = require("./Students");


try {

    const s1 = new Students(20, 'qA', 'deePAk', 's1@test.com', 'USA');
    s1.getProfile('S103');

    const s2 = new Students(22, 'pm', 'sTudent tWO', 's2@test.com', 'CAN');
    s2.getProfile();

    const s4 = new Students(22, 'abc', 'sTudent fOuR', 's4@test.com', 'CAN');
    s4.getProfile();

    const s3 = new Students(18, 'Qa', 'StudeNT tHReE', 's3@test.com', 'TX');
    s3.getProfile();

} catch (e) {

    console.log('Sorry, cannot proceed with the enrollment.\nPlease provide age, courseName, name, email, address in the same order.');

}





