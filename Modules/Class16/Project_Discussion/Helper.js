class Helper {


    static toTitleCase (inputStr) {
        let resultStr = '';
        const arr2 = inputStr.toLowerCase().split(' ');
        for (let i=0 ; i < inputStr.length ; i++) {
            resultStr = resultStr + arr2[i].charAt(0) + arr2[i].substring(1) + ' ';
        }
        return resultStr.trim();
    }



}
module.exports = Helper;