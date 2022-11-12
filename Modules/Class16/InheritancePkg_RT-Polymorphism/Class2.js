const Class1 = require("./Class1");
const Class3 = require("./Class3");

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
        this.function2_1(); // use function2_1() here
        this.function1_1(); // use function1_1() here
        console.log('In function2_2');
        super.investment(); // use class1-investment() here
    }

    investment() {
        super.investment();     // using investment() from Class1-class
        console.log('Buy Bitcoin');
    }

}
module.exports = Class2;