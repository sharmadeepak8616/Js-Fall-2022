/**
 * Access Modifiers
 * 
 *      defines from where we can access the variables/functions of a class
 * 
 * public - variables/function can be accessed from anywhere in the project.
 *          In Js, everything is public by default.
 * 
 * private - variables/function CANNOT be accessed from outside the class.
 *          In Js, prefix variable/function name by #
 * 
 * protected - variables/function can be accessed only within the package.
 * 
 */

/**
 * 
 * static keyword defines, how to access a variable/function
 *      if static -> use className
 *      otherwise -> use object
 * 
 * Access Modifiers defines from where we can access the variables/functions of a class
 *      if public (default) -> can be accessed from anywhere using className or object
 *      if private -> canNOT be accessed outside the class
 *          To use private variables/functions within class, use className or this-keyword
 * 
 */

/**
 * Good Practices for Access Modifiers:
 * 
 *      1. All class/field variables must be Private
 *      2. If a function is NOT going to be used outside the class, then make it Private
 * 
 */
/**
 *  Can we have a Private constructor?
 *  
 * 
 *  what is the result of a Private Constructor?
 *      It can't be used outside of class, therefore we cannot create object of that class.
 * 
 *      In a class, where all functions are static, we can create a Private constructor.
 *      As the object is of no use, so let's not allow user to create the object.
 * 
 */