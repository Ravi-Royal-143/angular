import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DirectionRes } from '../model/maps.interface';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  searchLocation(searchText: string){
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?limit=10&types=place%2Cpostcode%2Caddress&access_token=${environment.mapbox.accessToken}`)
  }

  getDistance(searchTxt): Observable<DirectionRes> {
    return this.http.get<DirectionRes>(`https://api.mapbox.com/directions/v5/mapbox/driving/${searchTxt}?steps=true&geometries=geojson&access_token=${environment.mapbox.accessToken}`);
  }
}
