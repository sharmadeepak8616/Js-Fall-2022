/**
 * Operators in JS:
 * 
 * 4. Logical Operators (&&, ||, !)
 * 
 * 
 *  &&  -> and operator
 *      Both combined conditions must be true, to get result as true
 *      If any combined condition is false, then result will be false
 * 
 *      true && true   ->  true
 *      true && false   ->  false
 *      false && true   ->  false
 *      false && false   ->  false
 * 
 * 
 * 
 *  ||  -> or operator
 *      Any one of the combined conditions should be true, to get result as true
 *      Both combined conditions are false, then result will be false
 * 
 *      true || false   ->  true
 *      true || true   ->  true
 *      false || true   ->  true
 *      false || false   ->  false
 * 
 *  !   ->  not operator
 *      makes true into false and vice versa
 * 
 *      !true -> false
 *      !false -> true
 * 
 * 
 */

/**
 * if a num is greater than X and less than Y
 * 
 * if a num is greater than X or less than Y
 * 
 * 
 * num=5
 * X=4
 * Y=3
 * Z=7
 * 
 * if a num is (greater than X or less than Y) and not of (greater than Z)
 * 
 * (num > X OR num < Y) and not of (num > Z)
 * 
 * (num > X || num < Y) && !(num > Z)
 * 
 * (5 > 4 || 5 < 3) && !(5 > 7)
 * 
 * (true || false) && !(false)
 * 
 * true && true
 * 
 * true
 * 
 */


let lVar1 = 10, lVar2= 20, lVar3= 30, lVar4= 40;

let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar1 + lVar4);
    /*
        lVar1 <= lVar3 && (lVar2 === lVar1 + lVar4);
        10 <= 30 && (20 === 10 + 40)
        10 <= 30 && (20 === 50)
        10 <= 30 && false
        true && false
        false
    */
console.log(`\n\nlRes1 -> ${lRes1}`);

let lRes2 = lVar3 >= lVar4 + lVar1 || !(lVar2 - lVar4 > lVar3);
    /*
        lVar3 >= lVar4 + lVar1 || !(lVar2 - lVar4 > lVar3);
        30 >= 40+10 || !(20 - 40 > 30)
        30 >= 40+10 || !(-20 > 30)
        30 >= 40+10 || !(false)
        30 >= 40+10 || true
        30 >= 50 || true
        false || true
        true
    */
console.log(`\n\nlRes2 -> ${lRes2}`);