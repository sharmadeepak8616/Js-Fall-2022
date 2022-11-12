class MyArrayFunctions {
    // findAverage
    findAverage (numbers) {
        let total = 0;
        for (let i=0 ; i <= numbers.length-1 ; i++) {
            total = total + numbers[i];
        }
        return total / numbers.length;
    }

    // findTotal
    findTotal (numbers) {
        return numbers.reduce((total, num) => total + num);
    }

    // reverseArray
    reverseArray (inputArray) {
        let reverseArray = [];
        for (let i=inputArray.length-1 ; i >= 0 ; i--) {
            reverseArray[inputArray.length-1 - i] = inputArray[i];
        }
        return reverseArray;
    }


    // sortArray
    // findMaximum

}
module.exports = MyArrayFunctions;