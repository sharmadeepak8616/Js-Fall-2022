const Class1 = require("./Class1");

const c1 = new Class1();
/*
    c1 gets own set of variables:
        num1=10
        name1='Class One'

    c1 gets access to functions:
        function1_1()
        function1_2()
*/

const c2 = new Class1();
/*
    c2 gets own set of variables:
        num1=10
        name1='Class One'

    c2 gets access to functions:
        function1_1()
        function1_2()
*/
c1.changeNum1(100);     // c1 -> num1 = 100
c1.showNum1();          // 100

c2.showNum1();          // 10

c2.changeVar1('NEW DATA FOR VAR1');
c2.showVar1();

c1.showVar1();

const c3 = new Class1();
c3.showVar1();

Class1.function1_3();


// execute function function1_2() from Class1.js
c1.function1_2();

// execute function function1_3() from Class1.js
Class1.function1_3();














