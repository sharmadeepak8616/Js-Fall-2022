/**
 * Array -> can store one or more values at the same time
 * 
 * [] represents array
 * 
 */
let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Saturn'];

console.log(`\nplanets -> ${planets}`);
console.log(`\ntypeof planets -> ${typeof planets}`);     // typeof planets -> object

/**
 * To find the length of array (or to find the number of values in an array)
 * property: length
 * 
 * number
 */
let numOfPlanets = planets.length;
console.log(`\nNumber of planet names stored in planets-array -> ${numOfPlanets}`);

/**
 * Values are stored using the concept of index.
 * 
 * first values goes to index-0
 * second values goes to index-1
 * third values goes to index-2 
 * ... and so on
 * 
 * 
 * last Index in Array = ArrayLength -1
 * 
 * arrayName[indexNum]  ->      represents the value at indexNum in arrayName array
 * 
 * planets[0] -> represents the value at 0 in planets array ("Earth")
 * 
 * planets[4] -> represents the value at 4 in planets array ("Saturn")
 * 
 * 
 */
console.log(planets[4]);

let ourPlanet = planets[0];
console.log(ourPlanet);
