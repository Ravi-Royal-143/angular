import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { environment } from 'src/environments/environment';
import { MenuItem } from 'primeng/api';
import { MapsService } from './services/maps.service';
import { SearchRes } from './model/maps.interface';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  showMainContent: boolean = true;
  subContent: string;
  items: MenuItem[];
  selectedLoc;
  searchSuggestions = [];

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(private mapsService: MapsService) { }
  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    // const geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    // });
    // document.getElementById('geocoder').appendChild(geocoder.onAdd(this.map));
  }

  changeLocation(data) {
    this.map.flyTo({
      center: data.coordinatesArr,
      essential: true
    });

  }

  selectedContent(content: string) {
    this.showMainContent = false;
    this.subContent = content;
  }

  onHidePanel(): void {
    this.showMainContent = true;
  }

  search(event) {
    console.log(event);
    this.mapsService.searchLocation(event.query).subscribe((res: SearchRes) => {
      this.searchSuggestions = res.features.map((singleData) => {
        return {
          name: singleData.place_name,
          cordinates: {
            lng: singleData.center[0],
            lat: singleData.center[1],
          },
          coordinatesArr: singleData.center
        }
      })
    });
  }


}