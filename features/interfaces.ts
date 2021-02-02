const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// Very long verbose declaration
const printVehicleLong = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicleLong(oldCivic);

// Make this code more streamlined with interface:
// can implement complex objects like Date
// can implement functions as well
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  vehicle.summary();
};

const newCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

printVehicle(newCivic);

//could expand interface to define the minimum necessary for any object that needs a summary
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  item.summary();
};

// toyota CANNOT be of type Reportable itself, because then it will not satisfy the function
const toyota = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// this satisfies the condition imposed by Reportable as an argument for the function
printSummary(toyota);
