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

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// if a function is not guarenteed to never finish, it will not return type never, since it SOMETIMES could finish
const throwErrorIf = (message: string): void => {
  if (message) {
    throw new Error(message);
  }

  return;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

//object destructuring with TS: list of keys point to list of values of specified types
// destructuring portion is separate from annotation portion
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

console.log(todaysWeather);
