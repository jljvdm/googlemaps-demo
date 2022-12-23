import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'googlemaps-demo';

  center: google.maps.LatLngLiteral = {lat: 52.5125, lng: 6.09444};
  zoom = 12;
  display: google.maps.LatLngLiteral | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    if ( event.latLng ) {
      this.center = (event.latLng.toJSON());
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if ( event.latLng){
      this.display = event.latLng.toJSON();
    }
  }
}
