import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  devUrl = 'http://localhost:1337/restaurants';
  prodUrl = 'https://restaurant-cms-strapi.herokuapp.com/restaurants';

  constructor(private http: HttpClient) { }

  getUrl(){
    return isDevMode() ? this.devUrl : this.prodUrl;
  }

  getRestaurants() {
    return this.http.get(this.getUrl());
  }
}
