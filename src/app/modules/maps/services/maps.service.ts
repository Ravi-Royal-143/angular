import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  searchLocation(searchText: string){
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?limit=10&types=place%2Cpostcode%2Caddress&access_token=${environment.mapbox.accessToken}`)
  }
}
