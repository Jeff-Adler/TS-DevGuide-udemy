import faker from 'faker';
import { Mappable } from './CustomMap';

// Implements keyword ensures that User conforms to Mappable
export class User implements Mappable {
  name: string;
  // Declaring object does not initialize the fields when new object is created
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // Location field is initialized here, not in fields above
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
