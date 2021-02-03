class Vehicle {
  // fields:
  color: string;
  // To initialize to default value:
  wheelCount: number = 4;

  //Can also declare fields in the body of the constructor (see: make)
  constructor(color: string, public make = 'chevy') {
    this.color = color;
  }

  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  // overrides drive() from vehicle
  public drive(): void {
    console.log('vroom');
  }

  private break(): void {
    console.log('breaking');
  }

  startDrivingProcess(): void {
    // is permitted to call private method break()
    this.break();
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
vehicle.honk();

const car = new Car('red');
car.drive();
car.honk();
