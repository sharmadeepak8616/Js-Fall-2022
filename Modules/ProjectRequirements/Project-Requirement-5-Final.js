/**
 * 
 * Create software for student enrollment and other student related activity
 *      -> Activities a student can perform:
 *          -> enrollment
 *          -> changeName
 *          -> changeCourse
 *          -> getProfile
 *          -> makePayment
 *          -> changeAddress
 *          -> dropFromCourse
 * 
 *      -> Activities a faculty can perform:
 *          -> gradeStudent
 *          -> changeName
 *          -> changeCourse
 *          -> getProfile
 *          -> showMySalary
 *          -> changeAddress
 *          -> resignFromInstitute
 * 
 *          
 * Offered courses and Fee:
 *      course: QA
 *      fee: 4000
 * 
 *      course: PM
 *      fee: 3000
 * 
 *      course: Front End
 *      fee: 5000
 * 
 *      course: Full Stack
 *      fee: 8000
 * 
 * 
 */ 

// Requirements for Student
 /** 
 * 
 * -> enrollment
 *  age >= 16
 *      if not, do not enroll and show message, Student has to be of age 16 or above
 *  if invalid course name 
 *      do not enroll and show message, Please enter a valid course name. Course entered is "ABC"
 *  if data is correct
 *      update attributes in studentData
 *          1. store name in Title Case
 *          2. store address in UPPERCASE
 *          3. store course-name as mentioned in CourseData-Name
 *          4. store balance as of in CourseData-Fee
 *      generate id for the student
 *      show message, Congratulations for enrolling in XYZ course
 *                    Your student id : XX
 * 
 * 
 * -> changeName
 *  student has to provide newName and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if newName is NOT same as stored-name
 *          change name in studentData and show message, Name is changed to "newName" successfully.
 *      otherwise
 *          show message, You are already registered with same name.
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 * 
 * 
 * -> changeCourse
 *  student has to provide newCourseName and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if newCourseName is same as stored-course-name (ignoring cases)
 *          show message, You are already registered in the "CourseName" course.
 *      otherwise
 *          update studentData.sBalance (set it to the fee of newCourseName)
 *          update student.sCourseName
 *          show message, Your course has been updated to "newCourseName"
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 * 
 * 
 * -> getProfile
 *  student has to their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      Print profile as below:
 *          Profile:::
 *              Id: student-name
 *              Name: student-name
 *              Email: student-email
 *              Balance: student-balance
 *              Address: student-address
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 * 
 * 
 * -> makePayment
 *  student has to provide paymentAmount and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if balance is greater than 0
 *          update studentData.sBalance accordingly
 *          show message -> Thank you for making payment. Your updated balance is XX.yy
 *      otherwise
 *          show message, No payment is required at this time.
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 * 
 * 
 * -> changeAddress
 *  student has to provide newAddress and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if newAddress is NOT same as stored-address (ignoring cases)
 *          update studentData.sAddress with newAddress (store in UPPERCASE)
 *          show message, Address is changed to "newAddress" successfully.
 *      otherwise
 *          show message, You are already have same address in the system.
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 * 
 * 
 * -> dropFromCourse
 * student has to provide the studentId as input
 *      if provide-id is same as the studentId
 *          make student status as "Dropped"/false
 *          show message -> We will miss you; hope you join our future batch.
 *      otherwise,
 *          show message, You have entered invalid student-id
 */


 // Requirements for Faculty
/**
 * -> gradeStudent
 * Faculty will provide studentId and grade as input. 
 * 
 * if student-id is not present, show message -> student-id is incorrect.
 * if student-id is valid, update grade for the particular student.
 */