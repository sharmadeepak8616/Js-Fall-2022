/**
 * static keyword:
 * 
 * static variables/functions belong to the Class instead object
 * 
 * non-static variables/functions belong to the object
 * 
 * If a variable is static, 
 *      if changed due to any reasons, it changed for all objects
 * 
 * To use static variables/functions
 *      we have to use ClassName instead object or this-keyword
 * 
 * If the purpose of the function should be performed by individual object
 *      then function should be NON-static
 * 
 * If the purpose of the function should be performed by Class OR if the function is a helping-function
 *      then function should be static
 * 
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