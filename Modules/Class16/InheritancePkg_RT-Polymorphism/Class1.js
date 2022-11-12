const Class3 = require("./Class3");

class Class1 extends Class3 {
    // car1
    num1 = 10;

    // car2
    name1 = 'Class One';

    // house1
    function1_1() {
        console.log('In function1_1');
    }

    // house2
    function1_2() {
        console.log('In function1_2');
    }

    investment() {
        super.investment();
        console.log('Buy Real Estate');
    }

}
module.exports = Class1;