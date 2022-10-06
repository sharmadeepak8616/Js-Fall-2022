let lvar1 = 10;
let lvar2 = 20;
let lvar3 = 30;
let lvar4 = 40;
let lvar5 = 50;
let lvar6 = 60;
let lvar7 = 70;
let lvar8 = 80;
let lvar9 = 90;

let res1 = lvar1 * (lvar4 % 3) + lvar2-- / ++lvar3;

/*
    let res1 = lvar1 * (lvar4 % 3) + lvar2-- / ++lvar3;

    modulus
        let res1 = lvar1 * 1 + lvar2 / ++lvar3;

    pre-inc, 
        ++lvar3; -> lvar3 = 31
        let res1 = lvar1 * 1 + lvar2 / 31
    
    multiply, 
        let res1 = lvar1 * 1 + lvar2 / 31
        let res1 = 10 + lvar2 / 31
    
    division,
        let res1 = 10 + lvar2 / 31 
        let res1 = 10 + 0.645
    
    addition,
        let res1 = 10 + 0.645
        let res1 = 10.645
    assignment, 
        res1 = 10.645
    
    post-dec
        lvar2-- -> lvar2 = 19

*/

console.log(res1);
console.log(lvar2);
console.log(lvar3);