import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  faUtensils = faUtensils;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

  onLogout() {
    this.userService.logout();
  }

}
