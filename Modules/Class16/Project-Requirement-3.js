/**
 * 
 * Create software for student enrollment and other student related activity
 *      -> create function for activities:
 *          -> enrollment
 *          -> withdraw
 *          -> changeName
 *          -> addClass
 *          -> changeCourse
 *          -> getProfile
 *          -> makePayment
 *          -> changeAddress
 * 
 *      -> create variable to store below data
 *          -> sName
 *          -> sAge
 *          -> sId
 *          -> sEmail
 *          -> sCourseName
 *          -> sTopicsCovered
 *          -> sBalance
 *          -> sPaymentInfo
 *          -> sGrade
 *          -> sAddress
 * 
 *          -> courseData = [
 *              {
 *                  cName : 'QA',
 *                  cFee : $100
 *              },
  *              {
 *                  cName : 'Front End',
 *                  cFee : $200
 *              },
 *              {
 *                  cName : 'Back End',
 *                  cFee : $300
 *              },
 *              {
 *                  cName : 'PM',
 *                  cFee : $400
 *              }
 *          ]
 * 
 * 
 * 
 *      student = {
 *          sName : '',
 *          sAge : X,
 *          sId : 1,
 *          sEmail : '',
 *          sCourseName : '',
 *          sTopicsCovered : ['', '', '', ''],
 *          sBalance : 0,
 *          sPaymentInfo :[
 *              {
 *                  cardNum : 1234,
 *                  cardName : ''
 *                  cardExp : '',
 *                  cardCvv : 1234
 *              },
 *              {
 *                  cardNum : 2345,
 *                  cardName : ''
 *                  cardExp : '',
 *                  cardCvv : 2345
 *              }
 *          ],
 *          sGrade : '',
 *          sAddress : ''
 *      }
 */ 

 /** 
 * 
 * -> enrollment
 *  age >= 16
 *      if not, do not enroll and show message, Student has to be of age 16 or above
 * 
 *  if invalid course name 
 *      do not enroll and show message, Please enter a valid course name. Course entered is "ABC"
 * 
 * if data is correct
 *      update attributes in studentData
 *          1. store name in Title Case (convertNameIntoTitleCase)
 *          2. store address in UPPERCASE
 *          3. store course-name as of in CourseData-Name
 *          4. store balance as of in CourseData-Fee
 *      generate id for the student
 *      show message, Congratulations for enrolling in XYZ course
 *                    Your student id : XX
 * 
 * 
 * -> changeName
 *  if newName is NOT same as stored-name
 *      change name and show message, Name is changed to "newName" successfully.
 *  otherwise
 *      show message, You are already registered with same name.
 * 
 * 
 * -> changeCourse
 *  if newCourseName is NOT same as stored-course-name (ignoring cases)
 *      change name and show message, Name is changed to "newName" successfully.
 *  otherwise
 *      show message, Your course has been updated to "newCourseName"
 *      update studentData.sBalance
 *      update student.sCourseName
 * 
 * 
 * -> getProfile
 * Print profile as below:
 *      Profile:::
 *          Id: student-name
 *          Name: student-name
 *          Email: student-email
 *          Balance: student-balance
 *          Address: student-address
 * 
 * 
 * -> makePayment
 *  if balance is greater than 0
 *      update studentData.sBalance accordingly
 *      show message -> Thank you for making payment. Your updated balance is XX.yy
 *  otherwise
 *      show message, No payment is required at this time.
 * 
 * 
 * -> changeAddress
 *  if newAddress is NOT same as stored-name (ignoring cases)
 *      update studentData.sAddress with newAddress (store in UPPERCASE)
 *      show message, Address is changed to "newAddress" successfully.
 *  otherwise
 *      show message, You are already registered with same name.
 * 
 * 
 */