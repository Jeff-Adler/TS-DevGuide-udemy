//primitive types
let num: number;
let apples: number = 5;
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
