const Class1 = require("./Class1");

class Class2 extends Class1 {
    // B-Inherit -> car-2, house-2
    // A-Inherit -> car-4, house-4
    // car
    num2 = 10;

    // car
    name2 = 'Class One';

    // house
    function2_1() {
        console.log('In function2_1');
    }

    // house
    function2_2() {
        console.log('In function2_2');
    }

}
module.exports = Class2;