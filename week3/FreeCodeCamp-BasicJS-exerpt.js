// 1. https://www.freecodecamp.com/challenges/multiply-two-decimals-with-javascript
// Basic JavaScript: Multiply Two Decimals with JavaScript
// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
// Let's multiply two decimals together to get their product.
var product = 2.0 * 0.0;
// Change the 0.0 so that product will equal 5.0.

var product = 5.0 * 1.0;

// 2. https://www.freecodecamp.com/challenges/store-multiple-values-in-one-variable-using-javascript-arrays
// Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays
// With JavaScript array variables, we can store several pieces of data in one place.
// You start an array declaration with an opening square bracket, 
// end it with a closing square bracket, and put a comma between each entry, like this:
var sandwich = ["peanut butter", "jelly", "bread"].
// Modify the new array myArray so that it contains both a string and a number (in that order).
// Hint
// Refer to the example code in the text editor if you get stuck.

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];
var myArray = ["this is something", 46];

// 3. https://www.freecodecamp.com/challenges/build-javascript-objects
// Basic JavaScript: Build JavaScript Objects
// You may have heard the term object before.
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
// you access the data in objects through what are called properties.
// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
// Here's a sample cat object:
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
// In this example, all the properties are stored as strings, 
// such as - "name", "legs", and "tails". 
// However, you can also use numbers as properties. 
// You can even omit the quotes for single-word string properties, as follows:
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
// However, if your object has any non-string properties, 
// JavaScript will automatically typecast them as strings.

// Make an object that represents a dog called myDog which contains 
// the properties "name" (a string), "legs", "tails" and "friends".

// You can set these object properties to whatever values you want, 
// as long "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
  
// Only change code below this line.
  
var myDog = {
    "name": "Rintintin",
    "legs": 4,
    "tails": 1,
    "friends": ["Rusty"]
};

// 4. https://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object
// Basic JavaScript: Add New Properties to a JavaScript Object
// You can add new properties to existing JavaScript objects the same way you would modify them.
// Here's how we would add a "bark" property to ourDog:
// ourDog.bark = "bow-wow";
// or
// ourDog["bark"] = "bow-wow";
// Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".
// Add a "bark" property to myDog and set it to a dog sound, such as "woof". 
// You may use either dot or bracket notation.
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
  
ourDog.bark = "bow-wow";
  
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
  
// Only change code below this line.
myDog.bark = "woof";

// 5. https://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object
// Basic JavaScript: Delete Properties from a JavaScript Object
// We can also delete properties from objects like this:
// delete ourDog.bark;
// Delete the "tails" property from myDog. You may use either dot or bracket notation.
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
  
delete ourDog.bark;
  
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
  
// Only change code below this line.
delete myDog.tails;

