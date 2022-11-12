class MyStringFunctions {

/**
 * Syntax to create function in a class:
 * 
 * funcName (inputParameters) {
 *      code
 *      return statement (if required)
 * }
 * 
 * --> NO function-keyword before function-name
 */

    // toTitleCase()
    toTitleCase (inputStr) {
        let resultStr = '';
        const arr2 = inputStr.toLowerCase().split(' ');
        for (let i=0 ; i < inputStr.length ; i++) {
            resultStr = resultStr + arr2[i].charAt(0) + arr2[i].substring(1) + ' ';
        }
        return resultStr.trim();
    }

    // reverseStringWordByWord
    reverseStringWordByWord (inputStr) {
        let reverseStr2 = '';
        const arr2 = inputStr.split(' ');
        for (let i=arr2.length-1 ; i >= 0 ; i--) {
            reverseStr2 = reverseStr2 + arr2[i] + ' ';
        }
        return reverseStr2.trim();
    }

    // createAbbreviation
    createAbbreviation (inputStr) {
        let abbr = '';
        const arr2 = inputStr.toUpperCase().split(' ');
        for (let i=0 ; i < arr2.length ; i++) {
            abbr = abbr + arr2[i].charAt(0);
        }
        return abbr;
    }

    // reverseString
    reverseString (inputStr) {
        let reverseStr2 = '';
        const arr2 = inputStr.split('');
        for (let i=inputStr.length-1 ; i >= 0 ; i--) {
            reverseStr2 = reverseStr2 + arr2[i];
        }
        return reverseStr2;
    }

    // checkForPalindrome
    checkForPalindrome (inputStr) {
        let inputStr_reverse = this.reverseString(inputStr);
        return inputStr_reverse.toLowerCase().localeCompare(inputStr.toLowerCase()) === 0;
    }

}
module.exports = MyStringFunctions;