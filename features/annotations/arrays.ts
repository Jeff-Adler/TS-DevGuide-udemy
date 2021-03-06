// infers string[]
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// infers string[][]
const carsByMake = [['f1b0'], ['corolla'], ['camaro']];

// Help with inference when extracting values: types of variables from typed array are inferred:
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

// Help with 'map': autocomplete knows what functions and properties apply to each element in the array
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible Types: infers array of type Data or string
const importantDates = [new Date(), '2030-10-10'];
// Permitted:
importantDates.push('2030-10-10');
// Prohibited:
// importantDates.push(100)
