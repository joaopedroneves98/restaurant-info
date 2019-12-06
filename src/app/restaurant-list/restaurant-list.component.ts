import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;

  isLoggedIn$: Observable<boolean>;

  restaurants$: Observable<any[]>;

  url = this.restaurantService.getUrl();

  constructor(
    private restaurantService: RestaurantService,
    private userService: UserService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
    this.restaurantService.getRestaurants();
    this.restaurants$ = this.restaurantService.getRestaurantList;
  }

  deleteRestaurant(restaurant) {
    this.restaurantService.deleteRestaurant(restaurant._id).subscribe((response) => {
      this.restaurantService.getRestaurants();
      this.snackbarService.open('Deleted', false);
    });
  }

}
