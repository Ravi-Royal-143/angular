import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MenuItem } from 'primeng/api';
import { MapsService } from './services/maps.service';
import { DirectionRes, SearchRes } from './model/maps.interface';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { addLineInMap } from './services/maps.util';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

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
  directions: FormGroup;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng = 77.56205;
  lat = 11.005415;

  constructor(private mapsService: MapsService, private fb: FormBuilder) { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });
    // Add map controls
    // addLineInMap(this.map, null)
    this.map.addControl(new mapboxgl.NavigationControl());
    this.createDirectionForm();
  }

  addline() {
    addLineInMap(this.map, null)
  }

  get direction(): FormArray {
    return this.directions.get("direction") as FormArray
  }

  getControls() {
    return (this.directions.get('direction') as FormArray).controls;
  }

  newSkill(): FormControl {
    return new FormControl(null)
  }

  addSkills() {
    this.direction.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.direction.removeAt(i);
  }

  changeLocation(data) {
    this.selectedLoc = '';
    this.map.flyTo({
      center: data.coordinatesArr,
      essential: true
    });

  }

  createDirectionForm() {
    this.directions = this.fb.group({
      direction: this.fb.array([]),
    });
    this.addSkills();
    this.addSkills();
  }

  selectedContent(content: string) {
    this.showMainContent = false;
    this.subContent = content;
    if (content == 'direction') {

    }
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

  getDirections() {
    // console.log(this.direction.value)
    // let searchTxt = '';
    // this.direction.value.map((data, i) => {
    //   if (i !== 0) {
    //     searchTxt += ';';
    //   }
    //   searchTxt += data.coordinatesArr.join(',')
    // });
    // console.log(searchTxt)
    // this.mapsService.getDistance(searchTxt).subscribe((res: DirectionRes) => {
    //   console.log(res)
    //   addLineInMap(this.map, res.routes[0].geometry.coordinates)
    //   this.map.addSource
    // })

    // this.map.addLayer('poly')
    // var directions = new MapboxDirections({
    //   accessToken: mapboxgl.accessToken
    // });

    // // this.map.addControl(directions, 'top-left');

    // this.map.on('load', function () {
    //   directions.setOrigin([this.lng, this.lat]); // can be address in form setOrigin("12, Elm Street, NY")
    //   directions.setDestinaion([this.lng + 1, this.lat + 1]); // can be address 
    // })
  }



}