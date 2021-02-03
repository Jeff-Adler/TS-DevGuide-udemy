// Only need for bad methods at the bottom
// import { User } from './User';
// import { Company } from './Company';

// Instructions to every other class
// on how they can be an argument to 'addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

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

  // This allows us to take any object and add a marker, as long as it fulfills interface Mappable
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // // This method fixes the issue below, but is also suboptimal, in that we couldn't pass in another object with the location attribute
  // addMarkerBad(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  // //addUserMarker and addCompanyMarker are  highly redundant: we use interfaces to condense them
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
