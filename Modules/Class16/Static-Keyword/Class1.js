class Class1 {

    num1 = 10;
    name1 = 'Class One';
    static var1 = 'Static variable Class1';

    showNum1() {
        console.log(this.num1);
    }

    showName1() {
        console.log(this.name1);
    }

    showVar1() {
        console.log(Class1.var1);
    }

    changeNum1(newNum1) {
        this.num1 = newNum1;
    }

    changeName1(newName1) {
        this.name1 = newName1;
    }

    changeVar1(newVar1) {
        Class1.var1 = newVar1;
    }

    function1_1() {
        console.log('In function1_1');
    }

    function1_2() {
        // print the value of var1
        console.log(Class1.var1);
        // print the value of name1
        console.log(this.name1);
        console.log('In function1_2');
    }

    static function1_3() {
        console.log('In static function1_3');
    }


}
module.exports = Class1;