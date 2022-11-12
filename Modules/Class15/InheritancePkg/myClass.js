const Class1 = require("./Class1");
const Class2 = require("./Class2");

const c1 = new Class1();
/**
 * c1 will have access to Class1 (variables and functions of Class1)
 */

const c2 = new Class2();
/**
 * c2 will have access to Class2 (variables and functions of Class2)
 */
c2.function1_1();
c2.function2_1();




