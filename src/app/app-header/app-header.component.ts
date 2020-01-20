import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PageService } from '../page.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  loggedOutHeaders: any = [];

  loggedInHeaders: any = [];

  faUtensils = faUtensils;

  headers: any = [];

  constructor(
    private userService: UserService,
    private pageService: PageService
  ) { }

  ngOnInit() {
    // this.pageService.getLoggedOutHeaders().subscribe((data) => {
    //   this.loggedOutHeaders = data;
    // });
    // this.pageService.getLoggedInHeaders().subscribe((data) => {
    //   this.loggedInHeaders = data;
    // });
    this.isLoggedIn$ = this.userService.isLoggedIn;
    this.pageService.getPages().subscribe((headers: any) => {
      this.headers = headers;
      this.pageService.setPages(headers);
    });
  }

  onLogout() {
    this.userService.logout();
  }

}
