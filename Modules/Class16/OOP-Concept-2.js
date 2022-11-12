/**
 * OOP Concept (OOP -> Object Oriented Programming)
 * 
 * 1. Encapsulation
 *      Wrapping up code in a class
 *      To implement the Encapsulation concept, we create Class and write code in it.
 * 
 * 
 * 2. Abstraction
 *      Hiding unnecessary information from user.
 *      To implement Abstraction concept, we create methods/functions
 * 
 * 
 * 3. Inheritance
 *      -> To implement Inheritance, we need to have parent-child set up between two classes.
 *      -> we use "extends" keyword with childClass, in to order to create parent-child relation between two classes
 *      -> childClass gets access to parentClass/grandParentClass variables and functions (except the private variables and functions in parent/grandParent class)
 *      -> a class can extend ONLY one class (why? - Diamond Problem)
 * 
 * 
 * 4. Polymorphism
 *      In general, same name but multiple forms.
 *      When we have two or more functions with SAME name
 *      Types:
 *          1. Compile Time Polymorphism (Static Binding, Method Overloading)
 *          2. Run Time Polymorphism (Dynamic Binding, Method Overriding)
 * 
 * 
 *      1. Compile Time Polymorphism (Static Binding, Method Overloading)
 *          In a class, when we have two or more functions with same name but different input parameters.
 *          Ways to set different input parameters:
 *              a) different number of input-parameters
 *              b) different datatype of input-parameters
 *              c) different sequence of input-parameters
 *              
 *      2. Run Time Polymorphism (Dynamic Binding, Method Overriding)
 *          -> This can exist ONLY in Inheritance set-up 
 *          -> when we have a method in childClass with SAME name and SAME input-parameters
 *
 * 
 * ***************************
 * 
 * keyword -> super
 * 
 * we use 'super' keyword
 *      when we want to execute/call parentC;ass function inside childClass function.
 * 
 */