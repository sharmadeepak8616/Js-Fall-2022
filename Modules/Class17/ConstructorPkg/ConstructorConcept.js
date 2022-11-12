/**
 * Constructor
 * 
 *      1. It's a special function
 *          in JS: name of the constructor is always "constructor"
 *          in Java: name of the constructor is always SAME as of className 
 *      2. In order to create an object of a class, js has to execute the constructor function.
 *          when there is NO constructor in a class,
 *              js creates a default constructor, then executes it in order to create the object.
 *          if there is a user-defined constructor in a class, js will NEVER create default constructor;
 *              AND use the user-defined constructor in order to create the object.
 *      3. In JS: we CANNOT have two or constructors in a class
 *         In Java: we CAN have two or constructors in a class
 *      4. Constructor function can have input-parameters as well
 *      5. there will NEVER be a return statement in a Constructor-function
 * 
 * 
 * 
 * Only w.r.t. Java:
 * how can we have two or more functions with same name in a class?
 * Compile Time polymorphism (Method Overloading / Constructor Overloading)
 * 
 * Method Overloading - Two or more functions with same name but different parameters in a class
 * Constructor Overloading - Two or more Constructor-functions but different parameters in a class
 * 
 */