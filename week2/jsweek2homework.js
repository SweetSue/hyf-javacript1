// 1.
console.log ("Hello world!"); // english
console.log ("Salut tout le monde!"); // francais
console.log ("Hej världen!"); // svenska
console.log ("Ciao mondo");  // italiano

// 2.
console.log ('I\'m awesome');  // escape the ' (apostrophe)

// 3.

// 3.1 Declare your variable.
let x;

// 3.2 Add a console.log statement that explains in words what you think the value of x is.
console.log("the value of my variable x will be: undefined");

// 3.3 Add a console.log statement that logs the value of x.
console.log (x);

// 3.4 Initialize x with an integer.
x = 6;

// 3.5 Add a console.log statement that explains what you think the value of x is.
console.log ("the value of my variable x will be: 6");

// 3.6 Add a console.log statement that logs the value of x.
console.log (6);

// 4. Declare a variable y and assign a string to it.
let y;
y = "King Oliver";

// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
console.log("the value of y is King Oliver");

// 4.2 Now console.log the variable y
console.log (y);

// 4.3 Now assign a new string to the variable y
y = "Creole Jazz Band";

// 4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console
console.log("the value of y is now Ceole Jazz Band");

// 4.5 Now console.log y again.
console.log(y);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
console.log ("I would use the Math.round() function");

// 5.1 Declare a variable z and assign the number 7.25 to it.
let z;
z = 7.25;

// 5.2 console.log z
console.log (z);

// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer
let a;
a = 7;

// 5.4 console.log a
console.log(a);

// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable
// 5.6 console.log the highest value.
if (a > z) {
    console.log ("the highest value is " + "a" + " : " + a);
    a = "The Highest";
    z = "The Lowest";
} else {
    console.log ("the highest value is " + "z" + " : " +  z);
    z = "The Highest";
    a = "The Lowest";  
}

// 6. Arrays

// 6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element.
let kikisFavouriteMetroStations = [];

// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
console.log ("it will display an empty array");

//6.3 console.log your array.
console.log (kikisFavouriteMetroStations);

// 6.4 Create an array that has your favorite animals inside
let kikisFavoriteAnimals = ["horse" , "budgerigar" , "dog"];

// 6.5 Log your array
console.log (kikisFavoriteAnimals);

// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
kikisFavoriteAnimals.push("baby pig");

// 6.7 Log your new array!
console.log(kikisFavoriteAnimals);

// 7. More strings 
// Let's consider the following string: let myString = "this is a test".

// 7.1 Add the string to your file and console.log it.
let myString = "this is a test";
console.log (myString);

// 7.2 Find a way to get the length of myString.
// 7.3 console.log the length of myString.
console.log ("My string's length is " + myString.length);

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

// 8.1 First declare at least four variables and assign them different data types.
let aNumber = 123;
let anotherNumber = 4.5;
let aString = "Perfect";
let aBoolean = true;

// 8.2 For each variable write a console.log statement that logs the value.
console.log("The value of my variable aNumber is: " + aNumber);
console.log("The value of my variable anotherNumber is: " + anotherNumber);
console.log("The value of my variable aString is: " + aString);
console.log("The value of my variable aBoolean is: " + aBoolean);

// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log ("The names of the variables are self explanatory");

// 8.4 Now use typeof to log the actual type of your variables.
console.log (typeof aNumber, typeof anotherNumber, typeof aString, typeof aBoolean);

//8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.
if (typeof aNumber !== typeof anotherNumber){
    console.log (aNumber + " and " + anotherNumber + "have two different types");
}
if (typeof aNumber !== typeof aString){
    console.log (aNumber + " and " + aString + " have two different types");
}
if (typeof aNumber !== typeof aBoolean){
    console.log (aNumber + " and " + aBoolean + " have two different types");
}
if (typeof anotherNumber !== typeof aString){
    console.log (anotherNumber + " and " + aString + " have two different types");
}
if (typeof anotherNumber !== typeof aBoolean){
    console.log (anotherNumber + " and " + aBoolean + " have two different types");
}
if (typeof aString !== typeof aBoolean){
    console.log (aString + " and " + aBoolean + " have two different types");
}

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.
console.log ("the sign % is the Remainder Operator");
console.log ("the result of (7 % 3) is a remainder of 7 divided by 3");
console.log (7 % 3);

// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
console.log ("An array can store elements of any type.");
let kikisFavoriteRecordings = [ 'Singin\' the Blues', { name: 'Bix Beiderbecke' }, 1927, true, function() { alert('Great solo!'); } ];
console.log(kikisFavoriteRecordings);

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
// 10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
if (6/0 === 10/0) {
    console.log("false is equal to false");
}

