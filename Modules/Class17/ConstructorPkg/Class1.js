class Class1 {

    #num1 = 10;
    static #num2 = 20;
    static num3 = 30;
    static name1 = 'Name One';
    name2 = 'Name Two';
    name3 = 'Name Three';

    constructor(username) {
        console.log(`\nIn the constructor function with username = ${username}`);
    }

    #function1() {
        console.log("In the function1");
    }

    function2() {
        console.log("In the function2");
    }

    function3() {
        console.log("In the function3");
        Class1.#function4();
    }

    static #function4() {
        console.log("In the function4");
    }

    static function5() {
        console.log("In the function5");
        Class1.#function4();
    }

    static function6() {
        console.log("In the function6");
    }


}
module.exports = Class1;