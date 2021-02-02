//Shorthand notation for annotating argument and return value type for functions
const add = (a: number, b: number): number => {
  return a + b;
};

// To declare return type for anonymous function, must use 'function' keyword
const multiple = function (a: number, b: number): number {
  return a * b;
};

// Or, use arrow function
const divide = (a: number, b: number): number => {
  return a / b;
};
