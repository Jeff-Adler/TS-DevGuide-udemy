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

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// this gets inferred to by type any, since it doesn't know what type of value will be returned by JSON.parse.
// Since it depends on the input string (that is, the json doc), it can't predict this.
const coordinatesAny = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// declare type now to initialize later
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When a type can't be inferred (corner case)
let numbers = [-10, -1, 12];
// This is bad code, but this the basic idea: when you have to switch the type of some variable
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
