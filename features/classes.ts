class Vehicle {
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

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
