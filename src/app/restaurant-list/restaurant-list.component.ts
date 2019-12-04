import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;

  restaurants: any = [];

  url = this.restaurantService.getUrl();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((data) => {
      console.log(data);
      this.restaurants = data;
    });
  }

}
