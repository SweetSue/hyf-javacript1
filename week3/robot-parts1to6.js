// 1. Introduction
move();
turn('right');
move();
move();
move();
turn('left');
move();
move();
// ++++++++++++++++++++++++++++++++++++++++

// 2.1 Loops 1
for ( let i = 0 ; i < 7 ; i++ ) {
    move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 2.2 Loops 2
let stepsUp = 4;
let stepsRight = 2;
   
for ( let i = 0 ; i < stepsUp; i++ ){
  move(); 
}
turn('right');
for ( let i = 0 ; i < stepsRight ; i++ ) {
  move();
}
turn('right');
for ( let i = 0 ; i < stepsUp ; i++ ){
     move(); 
}
// ++++++++++++++++++++++++++++++++++++++++  

// 3.1 Variables 1
// ---- You cannot modify these lines
let stepsDown = 3;
let stepsLeft = 0;
// ++++

// Change the variables here.
stepsDown = 2;
stepsLeft = 1;

// ---- You cannot modify these lines
for ( let i = 0 ; i < stepsDown ; i++ ) {
  move();
}
turn('right');
for ( let i = 0 ; i < stepsLeft ; i++ ) {
  move()
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.2 Variables 2
// Declare your variables here:
let stepsUp = 3;
let stepsRight = 3;
// ---- You cannot modify these lines

for ( let i = 0 ; i < stepsUp ; i++ ) {
  move();
}
turn('right');
for ( let i = 0 ; i < stepsRight ; i++ ) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.3 Variables 3 
// Declare your variables here:
let steps = 1;
let moreSteps = 1;
let evenMoreSteps = 3;
for ( let i = 0 ; i < steps ; i++ ) {
  move();
}
const key = pickUp ();
for ( let i = 0 ; i < moreSteps ; i++ ) {
  move();
}
turn('right');
unlock (key);
for ( let i = 0 ; i < evenMoreSteps ; i++ ) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.4 Variables 4
let steps = 1;
let moreSteps = 1;
let evenMoreSteps = 3;
for ( let i = 0 ; i < steps; i++ ) {
  move();
}
const key = 1;
pickUp (key);
for ( let i = 0 ; i < moreSteps; i++ ) {
  move();
}
turn('right');
const lock = 2;
unlock (lock);
for ( let i = 0 ; i < evenMoreSteps ; i++ ) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.5 Variables 5
let steps = 1;
let moreSteps = 1;
let evenMoreSteps = 3;
for ( let i = 0 ; i < steps ; i++ ) {
  move();
}
const key = 1;
pickUp (key);
for (let i = 0; i < moreSteps; i++) {
  move();
}
turn( 'right' );
const lock = -1;
unlock (lock);
for (let i = 0; i < evenMoreSteps; i++) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.6 Variables 6 
let steps = 1;
let moreSteps = 2;
for (let i = 0; i < steps; i++) {
  move();
}
const key = pickUp ();
pickUp ('key');
for (let i = 0; i < steps; i++) {
  move();
}
turn('right');
unlock(Math.pow(key, 3));
move();
unlock(key < 6);
for (let i = 0; i < moreSteps; i++) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.7 Variables 7
let steps = 1;
let moreSteps = 2;
for (let i = 0; i < steps; i++) {
  move();
}
const key = pickUp ();
pickUp ('key');
for (let i = 0; i < steps; i++) {
  move();
}
turn('right');
unlock(key.concat(',', key));
move();
unlock(key.length);
for (let i = 0; i < moreSteps; i++) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 3.8 Variables 8
let steps = 1;
let moreSteps = 2;
for (let i = 0; i < steps; i++) {
  move();
}
const key = pickUp ();
pickUp ('key'); 
  move();
turn('right');
unlock(typeof key);
  move();
unlock(key.length);
for (let i = 0; i < moreSteps; i++) {
  move();
}
// ++++++++++++++++++++++++++++++++++++++++

// 4.1 Boolean logic 1
let steps = 1;
for (let i = 0; i < steps; i++) {
  move();
}
const blueKey = pickUp ();
pickUp (); 
  move();
const redKey = pickUp ();
pickUp (); 
  move();
unlock (blueKey && redKey);
  move();
  move();
// ++++++++++++++++++++++++++++++++++++++++

// 4.2 Boolean logic 2
let steps = 1;
for (let i = 0; i < steps; i++) {
  move();
}
const key = pickUp ();
pickUp (); 
  move();

if (key <=5) {

  turn('left');
    move();
  turn('right');
    move();
  unlock (key);
   move();
    move();
  turn('right');
    move();

    } else {

  turn('right');
    move();
  turn('left');
    move();
  unlock (key); 
    move();
    move();
  turn('left');
   move();          
    }
 // ++++++++++++++++++++++++++++++++++++++++

// 5.1 Functions 1
let steps = 1;
let moreSteps = 4;
turn('right');
for ( let i = 0 ; i < steps ; i++ ) {
  move();
}
turn('left');
for ( let i = 0 ; i < moreSteps ; i++ ) {
  move();
}
turn('left');
move();
 // ++++++++++++++++++++++++++++++++++++++++

// 5.2 Functions 2
function moveAwayAndComeBack () {
  // Fill in your function here.
  turn('right');
  move();
  turn('right');
  turn('right');
  move();
  turn('right')
}

// ---- You cannot modify these lines
move();
move();
for ( let i = 0 ; i < 3 ; i++ ) {
  moveAwayAndComeBack();
}
move();
move();
// ++++++++++++++++++++++++++++++++++++++++

// 5.3 Functions 3
// Write your function here:
let direction;
function knightMove(direction) {
  if (direction === 'right') {    
  turn('right');
    move();
  turn('left');
    move();
    move();
  } else {
  turn('left');
    move();
  turn('right');
    move();
    move();
  }
};  

// ---- You cannot modify these lines

knightMove('right');
turn('right');
knightMove('left');
knightMove('right');
knightMove('left');
turn('left');
knightMove('left');
knightMove('right');
// ++++++++++++++++++++++++++++++++++++++++

// 6.1 Arrays 1
// ---- You cannot modify this code
const stepsUp = [1, 4];
const stepsRight = [1];
// ++++

// Modify the arrays here.
stepsUp.push(1,1,1,1);
stepsRight.push(1,2,3,4);

// ---- You cannot modify this code

while (stepsUp.length > 0 || stepsRight.length > 0) {
  const up = stepsUp.shift();
  if (up != null) { moveN(up); }
  turn('right');

  const right = stepsRight.shift();
  if (right != null) { moveN(right); }
  turn('left');
}

function moveN(n) {
  for (let i = 0; i < n; i++) {
    move();
  }
}
// ++++++++++++++++++++++++++++++++++++++++

// 6.2 Arrays 2
// ---- You cannot modify this code
const stepsUp = [1, 4, 5, 3, 1];
const stepsRight = [3, 2, 5, 2];
// ++++

// Modify the arrays here.
stepsUp.splice(1,4,3);
stepsUp.splice(2,5,1);
stepsUp.slice(-2);
stepsRight.splice(0,3,2);

// ---- You cannot modify this code

while (stepsUp.length > 0 || stepsRight.length > 0) {
  const up = stepsUp.shift();
  if (up != null) { moveN(up); }
  turn('right');

  const right = stepsRight.shift();
  if (right != null) { moveN(right); }
  turn('left');
}

function moveN(n) {
  for (let i = 0; i < n; i++) {
    move();
  }
}
// ++++++++++++++++++++++++++++++++++++++++

