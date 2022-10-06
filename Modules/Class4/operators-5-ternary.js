/**
 * Operators in JS:
 * 
 * 5. Ternary Operator (?:)
 *      used in situation when want assign value to a variables OUT OF THE TWO VALUES, based on a situation.
 * 
 * Syntax:
 * varName = condition(s) ? value-whichWillBeAssignIfConditionResultIntoTrue : value-whichWillBeAssignIfConditionResultIntoFalse
 * 
 * 
 * 
 * mortgageRate = 6.5, 7.5
 * 
 * creditScore > 700
 *      mortgageRate = 6.5
 * otherwise
 *      mortgageRate = 7.5
 * 
 * 
 * mortgageRate = 5.5, 5.9
 * 
 * creditScore > 700 OR if you first time home-buyer and credit score if > 600
 * 
 * creditScore > 700 OR (firstHomeBuy AND creditScore > 600)
 *      mortgageRate = 5.5
 * otherwise
 *      mortgageRate = 5.9
 * 
 * 
 * 
 * 
 */

/**
 * mortgageRate = 6.5, 7.5
 * 
 * creditScore > 700
 *      mortgageRate = 6.5
 * otherwise
 *      mortgageRate = 7.5
 */
let userCreditScore = 701;

let userMortgageRate = userCreditScore > 700 ? 6.5 : 7.5;
console.log(`\n\nuserMortgageRate -> ${userMortgageRate}`);

/**
 * loanApproved = 'Approved', 'Denied'
 * 
 * creditScore > 700 OR if you first time home-buyer and credit score if > 600
 * 
 * creditScore > 700 OR (firstHomeBuy AND creditScore > 600)
 *      loanApproved = 'Approved'
 * otherwise
 *      loanApproved = 'Denied'
 * 
 */
let userCS = 700;
let isFirstTimeBuyer = false;

let loanStatus = userCS > 700 || (isFirstTimeBuyer && userCS > 600) ? 'Approved' : 'Denied';    // true
console.log(`\n\nloanStatus -> ${loanStatus}`);

/**
 * Assign status to person
 *      if citizen of USA then status is 'Citizen'
 *      otherwise status is 'Non-Citizen'
 * 
 */
let isUSACitizen = false;

let status = isUSACitizen === true ? 'Citizen' : 'Non-Citizen';
console.log(`\n\nstatus -> ${status}`);


let status2 = isUSACitizen ? 'Citizen' : 'Non-Citizen';
console.log(`\n\nstatus2 -> ${status2}`);

/*
    isUSACitizen = true
    isUSACitizen === true       // isUSACitizen
    true === true
    true


    isUSACitizen = false        // isUSACitizen
    isUSACitizen === true
    false === true
    false

*/

/*
    isUSACitizen = true
    isUSACitizen === false      // !isUSACitizen
    true === false
    false 


    isUSACitizen = false
    isUSACitizen === false      // !isUSACitizen
    false === false
    true
    

*/