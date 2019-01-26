// More JavaScript

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0; i<input.length; i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
   console.log(sum([3,5,12]));

// 2. Create a function named colorCar that receives a color, 
// and prints out, 'a red car' for example.

// 3. Create an object and a function that takes the object as a parameter 
// and prints out all of its properties and values.
let tune = {
    name: "Stardust", 
    composer: "Hoagy Carmichael", 
    year: "1927", 
    tempo: 112 
};
for (let entries of Object.entries (tune)) {
    console.log(entries);
  }
;

// 4. Create a function named vehicleType that receives a color, 
// and a code, 1 for car, 2 for motorbike. 
// And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
  if (code === 1) {
      return console.log("a ", color, " car")
  } else {
      return console.log("a ", color, " motorbike")
  };
};
vehicleType("blue", 2);

// 5. Can you write the following without the if statement, 
// but with just as a single line with console.log(...);?
// if (3 === 3) {
//  console.log("yes");
// } else {
//  console.log("no");
// }
console.log("yes"); // always true

// 6. Create a function called vehicle, like before, 
// but takes another parameter called age, 
// so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
  if (code === 1) {
        if (age >= 5) {
          return console.log("a ", color, " used car");
        } else {
          return console.log("a ", color, " recent car");
        }   
  } else {
      return console.log("a ", color, " motorbike")
  };
};
vehicle("blue", 1, 5);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
vehicleTypes = ["motorbike", "caravan", "bike", "scooter", "truck"]
console.log(vehicleTypes);

// 8. How do you get the third element from that list?
console.log(vehicleTypes[2]);

// 9. Change the function vehicle to use the list of question 7. 
//So that vehicle("green", 3, 1) prints "a green new bike".

function otherVehicle(color, code, age) {
  otherVehicleTypes = ["car", "caravan", "bike", "scooter", "truck"];
        if (age > 1) {
          return console.log("a ", color, " used", otherVehicleTypes[0]);
        } else {
          return console.log("a ", color, " new", otherVehicleTypes[0]);
        }   
};
otherVehicle("green", 3, 1);

// 10. Use the list of vehicles to write an advertisement. 
// So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 
// (Hint: use a for loop.)
// Hint, the output should be correct English with all the punctuation in place 
// (that's the challenge). 
// So plurals for the vehicle types, commas followed by a single space, 
// the word and to replace the final comma and closed off by a period.
joesVehicles = ["car", "motorbike", "caravan", "bike"];
completeVehicleList = joesVehicles;
joesVehicles = ["car", "motorbike", "caravan"]
for (let i=0; i<joesVehicles.length ; i++) {
  joesVehicles[i] =  " " + joesVehicles[i] + "s" ;
}
console.log("Amazing Joe's Garage, we service" + joesVehicles + " and " + completeVehicleList[completeVehicleList.length -1] + "s." );

// 11. What if you add one more vehicle to the list, 
// can you have that added to the advertisement without changing the code for question 10?
moreJoesVehicles = ["car", "motorbike", "caravan", "truck", "mobile home", "bike"];
let lastItem = moreJoesVehicles.pop();
for (let i=0; i<moreJoesVehicles.length ; i++) {
  moreJoesVehicles[i] =  " " + moreJoesVehicles[i] + "s" ;
}
console.log("Amazing Joe's Garage, we service" + moreJoesVehicles + " and " + lastItem + "s." );

// 12. Create an empty object.
anEmptyObject = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.
teachers = {
  name: ["Baara", "Stephen", "Albert"] 
};

// 14. Add a property to the object you just created that contains the languages that they have taught you.
teachers = {
  name: ["Baara", "Stephen", "Albert"],
  language: ["code", "javascript", "git"]
};

// 15. Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// Don't cheat! Seriously - try it first.

console.log(x == y); // false
console.log(x === y); // false
console.log(y == z); // true
console.log(y === z); // true
console.log(x == z);  // false
console.log(x === z);  // false

// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. 
// Press the Run button in the upper right corner to run the code.
// More insights from this Stack Overflow question.

// 16. 
// Take a look at the following code:

let o1 = { foo: "bar" }; 
let o2 = { foo: "bar" }; 
let o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
console.log("first test, original values:");
console.log(o1); // Object {foo: "bar"}
console.log(o2); // Object {foo: "bar"}
console.log(o3); // Object {foo: "bar"}

// Show that changing o2 changes o3 (or not)
let oo1 = { foo: "bar" }; 
let oo2 = { foo: "clop" };
let oo3 = oo2;
console.log("second test, changing o2:");
console.log(oo1); // Object {foo: "bar"}
console.log(oo2); // Object {foo: "clop"}
console.log(oo3); // Object {foo: "clop"} YES changing oo2 changes oo03

// and changing o1 changes o3(or not).
let ooo1 = { foo: "boom" }; 
let ooo2 = { foo: "bar" };
let ooo3 = ooo2;
console.log("third test, changing o1:");
console.log(ooo1); // Object {foo: "boom"}
console.log(ooo2); // Object {foo: "bar"}
console.log(ooo3); // Object {foo: "bar"} NO changing ooo1 does not change ooo3

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
let oooo1 = { foo: "bar" }; 
let oooo3 = oooo2;
let oooo2 = { foo: "bar" };
// impossible, 00002 is not defined

// 17. What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;

console.log(bar); // 42 (number 42)
console.log(typeof bar); // number (string "typeof bar")
console.log(typeof typeof bar); // string (string "typeof typeof bar")