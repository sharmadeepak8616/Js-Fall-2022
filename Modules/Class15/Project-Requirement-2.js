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
 *      show message, Congratulations for enrolling in XYZ course
 *                    Your student id : XX
 * 
 * enrollment(age, courseName) {
 *       
 * }
 * 
 * 
 * -> changeName
 *  if newName is NOT same as stored-name
 *      change name and show message, Name is changed to "newName" successfully.
 *  otherwise
 *      show message, You are already registered with same name.
 * 
 * changeName (newName) {
 *  if value of sName is NOT equal to newName
 *      change name to newName (sName = newName)
 * }
 * 
 * 
 * -> makePayment
 *  if balance is greater than 0
 *      allow the payment
 *  otherwise
 *      show message, No payment is required at this time.
 * 
 * 
 * -> getProfile
 * Show:
 * Profile:::
 * Id: student-name
 * Name: student-name
 * Email: student-email
 * Balance: student-balance
 * Address: student-address
 * 
 */