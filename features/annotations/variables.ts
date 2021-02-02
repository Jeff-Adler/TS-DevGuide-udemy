//primitive types
let num: number;
let apples: number = 5; //Type annotations
let pears = 5; //Type inference
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

apples = 10;
//apples = 'jeff'

num = 6;

//built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal: we declare the exact value of the key (x, y) and the type of the value the key points to
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function: we declare parameters types and type of return value
// Full, verbose annotation: First set of () => = describes the types of the parameters and the return value. In other words, its not a function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
