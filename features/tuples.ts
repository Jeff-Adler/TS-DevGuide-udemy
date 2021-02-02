const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//this will be inferred to be an array of multiple possible types, not preserving the strict ordering we want to maintain
const pepsi = ['brown', true, 40];
//We want to prevent:
pepsi[0] = 40;
pepsi[2] = 'brown';

//Tuple preserves ordering:
const coke: [string, boolean, number] = ['brown', true, 40];
//We want to prevent:
// coke[0] = 40;
// coke[2] = 'brown';

//Type Aliasing is also useful:
type Drink = [string, boolean, number];
const sprite: Drink = ['brown', true, 40];
const fanta: Drink = ['brown', true, 40];

// nondescript tuple:
const carSpecs: [number, number] = [400, 3354];

// far more descriptive:
const carStats = {
  horsepower: 400,
  weight: 3354,
};
