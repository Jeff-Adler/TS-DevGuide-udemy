import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  // instance of an object from google maps api
  // Restricts the use of the google maps object
  private googleMap: google.maps.Map;

  // Pass in HTML element we load map into
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {}
}
